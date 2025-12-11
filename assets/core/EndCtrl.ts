import { _decorator, Component, director, sys } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('EndCtrl')
export class EndCtrl extends Component {

    // “回到首页”按钮
    public onBtnHome() {
        director.loadScene("Home");
    }

    // “重新游戏”按钮 (回到第1关)
    public onBtnRestart() {
        // 重置存档为第1关
        let info = { level: 0, time: 0, step: 0, width: 3, height: 3 };
        const localData = sys.localStorage.getItem("CwgState");
        if (localData) {
            info = JSON.parse(localData);
            info.level = 0; 
        }
        sys.localStorage.setItem("CwgState", JSON.stringify(info));

        // 进入游戏
        director.loadScene("game");
    }
}