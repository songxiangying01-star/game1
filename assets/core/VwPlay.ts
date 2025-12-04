/**
 * @Descripttion:
 * @version: 1.7 (Level Switch Lock)
 * @Author: Lioesquieu
 * @Date: 2025-07-20
 * @LastEditors: Lioesquieu
 * @LastEditTime:2025-07-20
 */
import {_decorator, Component, director} from 'cc';
import {VwFunland} from "./VwFunland";
import {VwUi} from "./VwUi";
import CwgState from "./CwgState";
import FunlandInfo from './FunlandInfo';
import EventMng from '../common/EventMng';

const {ccclass, menu, property} = _decorator;

@ccclass('VwPlay')
@menu('cwg/VwPlay')
export class VwPlay extends Component {

    @property(VwFunland)
    protected play: VwFunland;

    @property(VwUi)
    protected ui: VwUi;

    public funland: FunlandInfo;
    public gameState: CwgState;

    // 【新增】关卡切换锁，防止短时间内重复触发切换
    private isSwitchingLevel: boolean = false;

    start() {
        this.gameState = new CwgState();
        this.funland = new FunlandInfo();
        
        // 【安全检查】确保对象创建成功
        if (this.funland && this.gameState) {
            this.funland.init(this.gameState);

            // 在注册之前先移除，防止重复注册
            EventMng.off('GameWin', this.handleGameWin, this);
            // 监听游戏通关事件
            EventMng.on('GameWin', this.handleGameWin, this);

            this.restartLevel();
        } else {
            console.error("游戏初始化失败：funland 或 gameState 为空！");
        }
    }

    protected onDestroy() {
        EventMng.offTarget(this);
    }

    // 处理通关逻辑：自动进入下一关
    protected handleGameWin() {
        // 【关键修复】如果已经在切换关卡中，忽略后续的通关事件
        if (this.isSwitchingLevel) {
            console.log("正在切换关卡中，忽略重复的 GameWin 事件");
            return;
        }

        console.log("接收到通关事件，准备自动进入下一关");
        // 【关键修复】立即上锁
        this.isSwitchingLevel = true;

        // 自动通关延时：2.3秒
        this.scheduleOnce(() => {
            // 自动调用切换下一关逻辑（参数 '1' 代表下一关）
            this.performSwitchLevel('1');
        }, 2.3); 
    }

    /**
     * 重新开始当前关卡
     * 重置游戏状态、关卡数据，并重新初始化视图
     */
    protected async restartLevel() {
        // 【安全检查】防止对象为空导致报错
        if (!this.gameState || !this.funland || !this.play || !this.ui) {
            console.error("无法重启关卡：关键组件或数据丢失！");
            // 如果失败了也要解锁，否则游戏就卡死了
            this.isSwitchingLevel = false;
            return;
        }

        console.log("开始加载新关卡...");
        // 重置游戏状态
        this.gameState.reset();
        // 重置关卡数据
        await this.funland.reset();

        this.play.reset(this.funland);
        this.ui.reset(this.gameState.info);

        // 开始游戏
        this.play.playStart();
        
        // 【关键修复】新关卡加载完成，解锁，允许下一次切换
        this.isSwitchingLevel = false;
        console.log("新关卡加载完成，切换锁解除");
    }

    /**
     * 执行切换关卡的实际逻辑
     * @param direction 切换方向
     */
    private performSwitchLevel(direction: string) {
        // 【安全检查】
        if (!this.funland) {
             this.isSwitchingLevel = false;
             return;
        }

        if (direction == '-1') {
            this.funland.preLevel();
        } else {
            this.funland.nextLevel();
        }
        this.restartLevel();
    }

    /**
     * 切换到上一个或下一个关卡
     * 这个方法通常绑定在 UI 按钮的 Click 事件上
     * @param _ - 事件对象（未使用）
     * @param direction - 切换方向，'-1'表示上一关，其他值表示下一关
     */
    protected switchLevel(_, direction: string) {
        // 【关键修复】手动点击也要检查锁，防止和自动跳转冲突
        if (this.isSwitchingLevel) {
             console.log("正在切换中，忽略手动点击");
             return;
        }
        console.log("点击了切换关卡按钮，准备跳转");
        // 上锁
        this.isSwitchingLevel = true;

        // 手动点击按钮延时：1.0秒
        this.scheduleOnce(() => {
            this.performSwitchLevel(direction);
        }, 0.6);
    }

    protected openLevelEditor() {
        director.loadScene('editor');
    }
}