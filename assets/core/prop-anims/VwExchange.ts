/**
 * @Descripttion:
 * 使用交换道具：点击后不显示特效，直接随机选择一个有效瓶子进行水层交换
 * @version: 1.1
 * @Author: Lioesquieu
 * @Date: 2025-08-07
 * @LastEditors: Lioesquieu
 * @LastEditTime: 2025-08-07
 */
import {_decorator, Component, Node, Prefab} from 'cc';
import { VwFunland } from '../VwFunland';

const {ccclass, menu, property} = _decorator;

@ccclass('VwExchange')
@menu('cwg/VwExchange')
export class VwExchange extends Component {

    @property(Node)
    protected contentNode: Node;

    @property(Prefab)
    protected dmNode: Prefab;

    @property(VwFunland)
    protected funlandView: VwFunland;

    public show() {
        // 筛选出所有可以进行交换的瓶子
        // 条件：不是广告瓶、不是空瓶、没有密封（没满且同色）、没有隐藏层
        const candidates = this.funlandView.glasses.filter(glass => 
            !glass.isAd() && 
            !glass.isEmpty && 
            !glass.isSealed() && 
            !glass.isAllHide()
        );

        if (candidates.length > 0) {
            // 从符合条件的瓶子中随机选择一个
            const randomIndex = Math.floor(Math.random() * candidates.length);
            const selectedGlass = candidates[randomIndex];
            
            // 直接执行交换逻辑，不显示任何特效
            this.funlandView.handleRandExchangeColors(selectedGlass);
        }

        // 隐藏自身（确保没有残留UI）
        this.hide();
    }

    public hide() {
        this.contentNode.removeAllChildren();
        this.node.active = false;
    }
}