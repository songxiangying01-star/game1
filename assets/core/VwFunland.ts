/**
 * @Descripttion:
 * @version: 1.4 (Fix interaction bug)
 * @Author: Lioesquieu
 * @Date: 2025-07-20
 * @LastEditors: Lioesquieu
 * @LastEditTime: 2025-07-22
 */
import {_decorator, Component, EventTouch, Node, v3, Vec2} from 'cc';
import {CwgPools} from "./CwgPools";
import Glass from "./Glass";
import {WaterColor} from './CwgConstant';
import Toolkit from "../common/Toolkit";
import FunlandInfo, { GlassInfo } from './FunlandInfo';
import EventMng from '../common/EventMng';
import { VwEffect } from './VwEffect';
import SoundComp from './SoundComp';

const {ccclass, menu, property} = _decorator;

@ccclass('VwFunland')
@menu('cwg/VwFunland')
export class VwFunland extends Component {

    @property(Node)
    protected contentNode: Node;

    @property(VwEffect)
    protected effectView: VwEffect;

    @property(CwgPools)
    protected pools: CwgPools;

    @property(Node)
    protected glassesNode: Node;

    @property(SoundComp)
    protected soundComp: SoundComp;

    public funland: FunlandInfo;

    public glasses: Glass[] = [];

    public undoStack: [Glass, WaterColor[]][] = undefined;

    public finished: boolean = false;

    protected onLoad() {
        console.log("StVwFunland")
    }

    // 初始化游乐场布局
    public reset(funland: FunlandInfo) {
        this.funland = funland;

        this.glassesNode.removeAllChildren();
        this.glasses = [];
        
        // 根据配置生成玻璃瓶阵列
        for (let i = 0, len = funland.glasses.length; i < len; i++) {
            const glassInfo = funland.glasses[i];
            const glass = this.createGlass(glassInfo);
            this.glasses.push(glass);
        }
        // 让水面显示出来
        this.scheduleOnce(() => {
            this.glasses.forEach(glass => {
                glass.resetSurface();
            })
        }, 0.0);
    }

    protected createGlass(glassInfo: GlassInfo) {
        // 从对象池获取玻璃瓶实例
        const glass = this.pools.getGlass();
        glass.init(Toolkit.cloneObj(glassInfo) as GlassInfo);

        // 设置玻璃瓶位置并激活
        const glassNode = glass.node;
        
        // y轴偏移 +100
        glassNode.position = v3(glassInfo.position.x, glassInfo.position.y + 100, 0);
        
        glassNode.parent = this.glassesNode;
        glassNode.active = true;

        return glass;
    }

    // 开始游戏的方法
    public playStart() {
        this.setTouchListener();
        this.finished = false;
    }

    // 触摸事件处理
    protected setTouchListener() {
        this.contentNode.targetOff(this);

        let lastSelectedGlass: Glass = undefined;

        // 注册触摸结束事件
        this.contentNode.on(Node.EventType.TOUCH_END, (touch: EventTouch) => {
            if (this.finished) {
                return;
            }

            // 判断哪个瓶子被点击到了
            const currentSelected = this.handleTouchEnd(touch.getUILocation());

            // 有效性检查
            if (!this.isValidSelection(currentSelected)) {
                return;
            }

            // 处理重复点击同一玻璃瓶
            if (lastSelectedGlass && currentSelected == lastSelectedGlass) {
                lastSelectedGlass.putDown();
                lastSelectedGlass = undefined;
                return;
            }

            // 倒水逻辑处理
            if (lastSelectedGlass && !lastSelectedGlass.isEmpty && !currentSelected.isFull) {
                if (this.handleWaterTransfer(lastSelectedGlass, currentSelected)) {
                    lastSelectedGlass = undefined;
                    return;
                }
            }

            // 更新选中状态
            lastSelectedGlass?.putDown();
            this.pickup(currentSelected);
            lastSelectedGlass = currentSelected;
        }, this);
    }

    private handleTouchEnd(location: Vec2) {
        return this.glasses.find((glass, index) => {
            const box = glass.getTouchBoundingBoxToWorld();
            return box && box.contains(location);
        });
    }

    private isValidSelection(glass: Glass) {
        return glass?.node.active && !glass.isSealed();
    }

    private handleWaterTransfer(source: Glass, target: Glass) {
        if (source.waterColorID === target.waterColorID || target.isEmpty) {
            this.playPourOutWater(source, target);
            return true;
        }
        return false;
    }

    // 判断是否通关
    public checkWin() {
        return this.glasses.every(glass => glass.isEmpty || glass.isSealed());
    }

    // 播放倒水动画并处理状态更新
    protected playPourOutWater(lastSelected: Glass, currentSelected: Glass): void {
        lastSelected.node.active = false;
        currentSelected.hide();

        const undoStack = [];
        undoStack.push([lastSelected, [...lastSelected.info.colors]]);
        undoStack.push([currentSelected, [...currentSelected.info.colors]]);
        this.undoStack = undefined;

        const pourAnim = this.pools.getPourOutAnim(lastSelected, this.effectView.node);
        const flowAnim = this.pools.getFlowingAnim(currentSelected, this.glassesNode);

        if (lastSelected.node.position.x > currentSelected.node.position.x) {
            pourAnim.node.scale = v3(-1, 1, 1);
        } else {
            pourAnim.node.scale = v3(1, 1, 1);
        }

        const transferredWaters: WaterColor[] = [];
        while (this.canTransferWater(lastSelected, currentSelected)) {
            const water = lastSelected.pourOutWater();
            currentSelected.addIntoWater(water);
            transferredWaters.push(water);
        }

        lastSelected.updateDisplayState();
        currentSelected.updateDisplayState();

        const worldPosition = flowAnim.flowingNode.worldPosition;
        const pickupFromPosition = lastSelected.node.worldPosition.clone().add3f(17, 220, 0);
        pourAnim.pickUpMoveTo(pickupFromPosition.clone().add3f(0, lastSelected.pickupHeight, 0), worldPosition);

        let started = false;
        pourAnim.play(transferredWaters).on('startPour', (layerIdx: number, color: WaterColor) => {
            flowAnim.play(color);
            if (!started) {
                started = true;
                flowAnim.playWaterSound(transferredWaters.length);
            }
        }).on('completePour', async (layerIdx: number) => {
            flowAnim.complete().then(() => {
                this.pools.recycleFlowingAnim(flowAnim)
                currentSelected.show();

                if (currentSelected.isSealed()) {
                    // 已注释掉特效
                    // this.effectView.showFullSeled(currentSelected);
                    this.undoStack = undefined;
                } else {
                    this.undoStack = undoStack;
                }
            })
            pourAnim.putDownBack().then(() => {
                this.pools.recyclePourOutAnim(pourAnim);
                
                // 确保原来的瓶子显示出来
                lastSelected.node.active = true;

                // 【修复点】取消了延时，立即执行放下动作。
                // Glass.ts 里的安全检查会防止报错，同时保证状态立即同步。
                lastSelected.putDown();
                
                this.scheduleOnce(() => {
                    if (lastSelected.isAllHide()) {
                        lastSelected.showHide();
                    }
                    EventMng.emit('completePour');

                    if (this.checkWin()) {
                        console.log("游戏通关！");
                        this.finished = true;
                        // 延时缩短：0.1s
                        this.scheduleOnce(() => {
                            EventMng.emit('GameWin'); 
                        }, 0.1);
                    }
                }, 0.1);
            })
        });
    }

    private canTransferWater(source: Glass, target: Glass): boolean {
        return !target.isFull && !source.isAllHide() &&
            (source.waterColorID === target.waterColorID || target.isEmpty);
    }

    protected pickup(glass: Glass) {
        this.soundComp.playPickup();
        glass.pickup();
    }

    public handleRandExchangeColors(glass: Glass) {
        this.schedule(() => {
            glass.randExchangeColors();
        }, 0.17, 8);
    }

    public handleUndo() {
        if (!this.undoStack) {
            return;
        }
        this.undoStack.forEach(([glass, colors]) => {
            glass.reset(colors);
        })
        this.undoStack = undefined;
    }

    public addEmptyGlass(addGlassInfo: GlassInfo) {
        console.log('addEmptyGlass')
        if (addGlassInfo) {
            this.funland.glasses.push(addGlassInfo);
            this.funland.glasses.sort((a, b) => {
                if (a.position.y != b.position.y) {
                    return b.position.y - a.position.y;
                }
                return a.position.x - b.position.x;
            })
            const glass = this.createGlass(addGlassInfo);
            this.glasses.push(glass);
        }
    }
}