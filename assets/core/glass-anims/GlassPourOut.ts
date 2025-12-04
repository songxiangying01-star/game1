/**
 * @Descripttion:
 * @version: 1.0
 * @Author: Lioesquieu
 * @Date: 2025-07-20
 * @LastEditors: Lioesquieu
 * @LastEditTime: 2025-07-22
 */
import {_decorator, Animation, AnimationClip, Color, math, Node, Sprite, tween, UIOpacity, v3, Vec3} from 'cc';
import Glass from "../Glass";
import {WaterColor, WaterColors} from "../CwgConstant";
import Toolkit from '../../common/Toolkit';
import { GlassInfo } from '../FunlandInfo';

const {ccclass, menu, property} = _decorator;


@ccclass('GlassPourOut')
@menu('cwg/GlassPourOut')
export default class GlassPourOut extends Glass {

    /** Animation component reference */
    @property(Animation)
    protected anim: Animation;

    /** Reflection on the front of the glass */
    @property(Node)
    protected frontNode: Node;

    @property([Sprite])
    protected flowingSprites: Sprite[] = [];

    /** Starting column index (0-based) */
    protected startColumnIndex: number = 0;

    private _eventCallbacks: { [event: string]: (layerIdx: number, color: WaterColor) => void } = {};

    /**
     * Register event callback
     * @param event Event type: 'startPour' | 'completePour'
     * @param callback Callback function
     * @returns this
     */
    public on(event: 'startPour' | 'completePour', callback: (layerIdx: number, color: WaterColor) => void): this {
        this._eventCallbacks[event] = callback;
        return this;
    }

    /** Whether the pouring process is completed */
    protected isPourOutCompleted: boolean = false;

    /** Cache of the glass's original position */
    protected oriPosition: math.Vec3;

    public init(info: GlassInfo): void {
        super.init(info);
        this.flowingSprites.forEach((sprite) => {
            sprite.node.active = false;
        })
    }

    /**
     * Pickup and move the glass to the target position
     * @param from Starting world coordinates
     * @param to Target world coordinates
     */
    public pickUpMoveTo(from: math.Vec3, to: Readonly<Vec3>) {
        this.oriPosition = from.clone();
        if (this.node.scale.x < 0) {
            this.oriPosition.x -= 17.244 * 2;
        }
        this.node.worldPosition = from;
        tween(this.node).to(0.666, {worldPosition: to}).start();

        // Shadow flies away
        if (this.shadowNode) {
            this.shadowNode.position = v3(0, 0, 0);
            
            // [Fix] Use Vec3 and position property for tween to avoid type error
            const targetX = 380 * this.node.scale.x;
            const targetPos = new Vec3(targetX, 22, this.shadowNode.position.z);
            tween(this.shadowNode).to(0.3, { position: targetPos }).start();

            const uiOpacity = this.shadowNode.getComponent(UIOpacity);
            if (uiOpacity) {
                tween(uiOpacity).to(0.3, {opacity: 0}).start();
            }
        }
        this.frontNode.scale = this.node.scale;
    }

    /**
     * Put the glass back to its original position
     * @returns Promise that resolves when movement is complete
     */
    public putDownBack() {
        const layerID = this.startColumnIndex + 1;
        const speed = [0, 6, 5, 4, 3][layerID];
        const tw = tween(this.node).to((0.666 + ((5 - layerID) * 0.333)) / speed, {worldPosition: this.oriPosition});
        return Toolkit.waitForTween(tw);
    }

    /**
     * Handle pour out complete event
     * @param currentLayerIdx Current liquid layer Index
     */
    protected pourOutFinish(currentLayerIdx: number) {
        if (this.isPourOutCompleted) {
            return;
        }
        if (currentLayerIdx == this.startColumnIndex) {
            // Hide the water that has been poured out
            for (let i = 3; i >= this.startColumnIndex; i--) {
                this.watersNode.children[i].active = false;
            }

            const animState = this.anim.getState(this.anim.defaultClip.name);
            const currentTime = animState.time; // Get current playback time

            this.anim.pause();  // Pause animation
            // Set reverse playback mode and time
            animState.wrapMode = AnimationClip.WrapMode.Reverse;
            animState.time = animState.duration - currentTime;
            animState.speed = [6, 5, 4, 3][currentLayerIdx]; // Reverse playback speed
            this.anim.resume(); // Start reverse playback

            // Pouring completed (trigger complete event)
            // At this time, it is still in the state of returning to upright
            this.isPourOutCompleted = true;
            this._eventCallbacks.completePour?.(currentLayerIdx, this.waters[currentLayerIdx]);
            this.recycle();
        } else {
            // Show the water surface of the layer below
            this.showNextLayerSurface(currentLayerIdx);
        }
    }

    /**
     * Show the water surface of the next layer
     * @param currentLayerIdx Current liquid layer Index (0-based)
     */
    protected showNextLayerSurface(index: number) {
        const nextIndex = index - 1;
        if (nextIndex >= 0) {
            const nextNode = this.watersNode.children[nextIndex];
            if (nextNode.active) {
                nextNode.children[0].active = true;
            }
        }
    }

    /**
     * Handle pour out start event
     * @param layerID ID of the liquid layer currently being operated on
     */
    protected pourOutStart(layerIdx: number) {
        if (this.isPourOutCompleted) {
            return;
        }
        if (layerIdx >= this.startColumnIndex && layerIdx < this.waters.length) {

            const colorIdx = this.waters[layerIdx];
            this._eventCallbacks.startPour?.(layerIdx, colorIdx);
            const color = new Color().fromHEX(WaterColors[colorIdx].base);
            this.flowingSprites.forEach((sprite) => {
                sprite.node.active = true;
                sprite.color = color;
            })
        }
    }

    /**
     * Reset animation state to initial values
     */
    protected resetAnim() {
        const animState = this.anim.getState(this.anim.defaultClip.name);
        animState.speed = 1; // Reset playback speed
        animState.time = 0;  // Reset playback position
        animState.wrapMode = AnimationClip.WrapMode.Normal;
    }

    private initAnimationParams(addWaters: WaterColor[]) {
        this.isPourOutCompleted = false;
        this.startColumnIndex = this.waters.length - addWaters.length;
    }

    /**
     * Play pour out animation
     * Returns a chainable object
     * @param addWaters Array of water colors to add
     * @returns Promise that resolves when animation is complete
     */
    public play(addWaters: WaterColor[]) {
        this.resetAnim();

        // Initialize animation parameters
        this.initAnimationParams(addWaters);

        this.showSurface();
        this.anim.play();

        return this;
    }

    // Clean up callbacks in recycle method
    public recycle() {
        this._eventCallbacks = {};
        this.flowingSprites.forEach((sprite) => {
            sprite.node.active = false;
        })
    }
}