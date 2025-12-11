/**
 * @Descripttion:
 * @version: 1.1 (Added Scene Transition)
 * @Author: Lioesquieu
 */
import {_decorator, Component, Label, Button, Sprite, director} from 'cc'; // 1. 增加了 director 导入
import { CwgStateInfo } from './CwgState';
import { VwFunland } from './VwFunland';
import EventMng from '../common/EventMng';
import { VwExchange } from './prop-anims/VwExchange';
import { VwAddGlass } from './prop-anims/VwAddGlass';

const {ccclass, menu, property} = _decorator;

@ccclass('VwUi')
@menu('cwg/VwUi')
export class VwUi extends Component {

    @property(Label)
    protected levelLabel: Label;

    @property(VwFunland)
    protected funlandView: VwFunland;

    @property(Button)
    protected undoButton: Button;

    @property(VwExchange)
    protected exchangeView: VwExchange;

    @property(VwAddGlass)
    protected addGlassView: VwAddGlass;

    // 新增变量：记录当前关卡索引
    private _currLevelIndex: number = 0;

    public reset(info: CwgStateInfo) {
        // 记录当前关卡
        this._currLevelIndex = info.level;

        this.levelLabel.string = "第" + (info.level + 1).toString() + "关";
        
        // 监听倒水完成
        EventMng.on('completePour', this.handleCompletePour, this);
        
        // 2. 新增：监听游戏胜利 (GameWin)
        EventMng.on('GameWin', this.handleGameWin, this);

        if (this.exchangeView) {
            this.exchangeView.node.active = false;
        }
    }

    protected onDestroy() {
        EventMng.offTarget(this);
    }

    protected handleCompletePour() {
        this.updateUndoDisplayState();
    }

    // 3. 新增：处理胜利逻辑
    protected handleGameWin() {
        // 判断：如果是第2关 (index >= 1)，跳转结尾页
        if (this._currLevelIndex >= 1) {
            console.log("全部通关，跳转到结尾页！");
            this.scheduleOnce(() => {
                director.loadScene("End");
            }, 1.0); // 延迟1秒跳转
        } else {
            // 否则，通知 VwPlay 进入下一关
            console.log("第1关通过，进入下一关");
            EventMng.emit('NextLevel');
        }
    }

    // --- 下面是你原来的代码，完全没动 ---
    protected updateUndoDisplayState() {
        // 首先检查撤销按钮及其节点是否有效
        if (!this.undoButton || !this.undoButton.node || !this.undoButton.node.isValid) {
            return;
        }

        // 检查撤销栈是否存在且不为空
        const canUndo = this.funlandView.undoStack && this.funlandView.undoStack.length > 0;
        
        this.undoButton.interactable = canUndo;

        const sprite = this.undoButton.node.getComponent(Sprite);
        if (sprite) {
            sprite.grayscale = !canUndo;
        }
    }

    protected handleProp(_, propName: string) {
        if (propName === "exchange") {
            this.exchangeView.show();
        } else if (propName === "undo") {
            this.funlandView.handleUndo();
            this.updateUndoDisplayState();
        } else if (propName === "addEmptyGlass") {
            this.addGlassView.show();
        }
    }
}