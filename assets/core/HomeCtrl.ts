import { _decorator, Component, director, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('HomeCtrl')
export class HomeCtrl extends Component {

    start() {
    }

    // “开始游戏”按钮点击事件
    public onBtnStart() {
        console.log("点击开始游戏");
        // 确保从第1关开始 (level 0 = 第1关)
        // 读取现有的存档结构，只修改 level，保留其他设置
        let info = { level: 0, time: 0, step: 0, width: 3, height: 3 };
        const localData = sys.localStorage.getItem("CwgState");
        if (localData) {
            info = JSON.parse(localData);
            info.level = 0; // 强制重置为第1关
        }
        sys.localStorage.setItem("CwgState", JSON.stringify(info));

        // 跳转到游戏场景
        director.loadScene("game");
    }
}