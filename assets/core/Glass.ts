/**
 * @Descripttion: 水瓶交互控制组件
 * @version: 1.1 (Safety Fixes)
 * @Author: Lioesquieu
 * @Date: 2025-07-20
 * @LastEditors: Lioesquieu
 * @LastEditTime: 2025-07-22
 */
import {_decorator, Color, Component, Node, Sprite, tween, UIOpacity, UITransform, Vec3} from 'cc';
import {WaterColor, WaterColors} from './CwgConstant';
import WaterSurface from './glass-anims/WaterSurface';
import { GlassInfo } from './FunlandInfo';

const {ccclass, menu, property} = _decorator;


@ccclass('Glass')
@menu('cwg/Glass')
export default class Glass extends Component {

    @property({type: Node, tooltip: '瓶体碰撞节点（用于触摸检测）'})
    protected glassNode: Node;

    @property({type: Node, tooltip: '水层节点容器（包含4层水柱节点）'})
    protected watersNode: Node;

    @property({type: Node, tooltip: '密封状态瓶盖节点'})
    protected capNode: Node;                // 瓶盖

    @property
    protected waterHeight: number = 40;          // 每节水柱的高度

    @property
    public pickupHeight: number = 32;

    @property(Node)
    public shadowNode: Node;

    @property(WaterSurface)
    protected waterSurface: WaterSurface;

    @property(Node)
    protected adNode: Node;

    public info: GlassInfo = undefined;

    protected waters: WaterColor[] = [];    // 水瓶内的水颜色

    /** 标记瓶子是否处于拿起状态 */
    public isPickedUp: boolean = false;

    /**
     * 初始化水瓶状态
     * @param info
     */
    public init(info: GlassInfo) {
        if (this.capNode) this.capNode.active = false;
        
        // 强制关闭广告
        info.ad = false;

        this.info = info;
        this.reset(info.colors);
        this.updateDisplayState();
    }

    /**
     * 重置水柱显示状态
     * @param waters 新的水色配置数组
     */
    public reset(waters: WaterColor[]) {
        this.info.colors = waters;
        this.waters = waters;
        const waterCnt = waters.length;
        for (let i = 0; i < waterCnt; i++) {
            this.setWater(i, this.waters[i]);
        }
        for (let i = waterCnt; i < 4; i++) {
            const waterNode = this.watersNode.children[i];
            if (waterNode) waterNode.active = false;
        }
        this.resetSurface();
    }

    public resetSurface() {
        this.waterSurface && this.waterSurface.reset();
    }

    /**
     * 更新瓶子视觉状态
     */
    public updateDisplayState() {
        this.showSurface();
        if (this.isSealed()) {
            this.putOnCap();
        }
        this.updateShadowOpacity();
        
        // 强制隐藏广告图标
        if (this.adNode) {
            this.adNode.active = false;
        }
    }

    // 根据水多水少调整影子的颜色深浅
    private updateShadowOpacity() {
        // 【安全检查】确保 shadowNode 存在
        if (!this.shadowNode) return;
        
        const opacityLevels = [64, 80, 96, 112, 128];
        const uiOpacity = this.shadowNode.getComponent(UIOpacity);
        // 【安全检查】确保组件存在
        if (uiOpacity) {
            uiOpacity.opacity = opacityLevels[this.waters.length];
        }
    }

    // 每一层水都有一个水面，需要隐藏其他层的水面，显示最上层的水面
    protected showSurface() {
        const topIndex = this.waters.length - 1;
        for (let i = 0; i < topIndex; i++) {
            const waterNode = this.watersNode.children[i];
            if (waterNode && waterNode.children[0]) waterNode.children[0].active = false;
        }
        if (topIndex >= 0) {
            const topWaterNode = this.watersNode.children[topIndex];
            if (topWaterNode && topWaterNode.children[0]) topWaterNode.children[0].active = true;
        }
    }

    public getTouchBoundingBoxToWorld() {
        if (!this.glassNode) return null;
        return this.glassNode.getComponent(UITransform).getBoundingBoxToWorld();
    }

    /**
     * 设置指定层水柱颜色
     */
    protected setWater(index: number, waterColor: WaterColor, black2color?: boolean) {
        const waterNode = this.watersNode.children[index];
        if (!waterNode) return; // 安全检查

        if (waterColor == WaterColor.None) {
            waterNode.active = false;
            return;
        }
        if (index < this.info.hideCnt) {
            waterColor = WaterColor.Black;
            if (waterNode.children[1]) waterNode.children[1].active = true;
        } else {
            if (waterNode.children[1]) waterNode.children[1].active = false;
        }
        waterNode.active = true;
        if (waterNode.children[0]) waterNode.children[0].active = false;
        
        const waterSprite = waterNode.getComponent(Sprite);
        const surfaceSprite = waterNode.children[0]?.getComponent(Sprite);

        if (!waterSprite || !surfaceSprite) return; // 安全检查

        const baseColor = new Color(WaterColors[waterColor].base);
        const surfaceColor = new Color(WaterColors[waterColor].surface);
        if (black2color) {
            tween(waterSprite).to(0.3, {color: baseColor}).start();
            tween(surfaceSprite).to(0.3, {color: surfaceColor}).start();
        } else {
            waterSprite.color = baseColor;
            surfaceSprite.color = surfaceColor;
        }
    }

    // 把瓶子放下来
    public putDown() {
        if (!this.isPickedUp || !this.glassNode || !this.shadowNode) {
            return;
        }
        this.isPickedUp = false;
        
        const glassTarget = new Vec3(this.glassNode.position.x, 0, this.glassNode.position.z);
        tween(this.glassNode).to(0.17, { position: glassTarget }).start();

        const shadowTarget = new Vec3(0, 0, this.shadowNode.position.z);
        tween(this.shadowNode).to(0.17, { position: shadowTarget }).start();
        
        this.resetSurface();
    }

    // 把瓶子拿起来
    public pickup() {
        if (this.isPickedUp || !this.glassNode || !this.shadowNode) {
            return;
        }
        this.isPickedUp = true;
        
        const glassTarget = new Vec3(this.glassNode.position.x, this.pickupHeight, this.glassNode.position.z);
        tween(this.glassNode).to(0.17, { position: glassTarget }).start();

        const shadowTarget = new Vec3(17.3, 10, this.shadowNode.position.z);
        tween(this.shadowNode).to(0.17, { position: shadowTarget }).start();
        
        this.resetSurface();
    }

    public hide() {
        this.node.active = false;
    }

    public show() {
        if (this.node.active == false) {
            this.node.active = true;
            this.resetSurface();
            return;
        }
        this.node.active = true;
    }

    /**
     * 获取顶层水色
     */
    public get waterColorID(): WaterColor {
        const len = this.waters.length;
        if (len == 0) {
            return 0;
        }
        return this.waters[len - 1];
    }

    public get waterColor(): Color {
        const len = this.waters.length;
        if (len == 0 || !this.watersNode.children[len - 1]) {
            return Color.WHITE;
        }
        return this.watersNode.children[len - 1].children[0].getComponent(Sprite).color;
    }

    /**
     * 倒出顶层水
     */
    public pourOutWater(): WaterColor {
        const water = this.waters.pop();
        const index = this.waters.length;
        this.setWater(index, WaterColor.None);
        this.resetSurface();
        return water;
    }

    public addIntoWater(color: WaterColor) {
        const index = this.waters.length;
        this.waters.push(color);
        this.setWater(index, color);
        this.resetSurface();
    }

    public isAllHide() {
        if (this.info.hideCnt <= 0) {
            return false;
        }
        return this.info.hideCnt == this.waters.length;
    }

    public showHide() {
        if (this.info.hideCnt <= 0) {
            return;
        }
        this.info.hideCnt--;
        this.setWater(this.info.hideCnt, this.waters[this.info.hideCnt], true);
        this.updateDisplayState();
    }

    public isAd() {
        return false;
    }

    /**
     * 判断是否达到密封状态（4层同色水）
     */
    public isSealed() {
        if (this.waters.length < 4) {
            return false;
        }
        return this.waters[0] == this.waters[1] && this.waters[1] == this.waters[2] && this.waters[2] == this.waters[3];
    }

    public putOnCap() {
        if(this.capNode) this.capNode.active = true;
    }

    public get isFull() {
        return this.waters.length == 4;
    }

    public get isEmpty() {
        return this.waters.length == 0;
    }

    public removeAd() {
        this.info.ad = false;
        this.updateDisplayState();
    }

    // 随机交换水颜色
    public randExchangeColors() {
        this.waters.sort((a, b) => {
            return Math.random() - 0.5;
        });
        this.reset(this.waters);
    }

    public toString() {
        return JSON.stringify({waters: this.waters});
    }

}