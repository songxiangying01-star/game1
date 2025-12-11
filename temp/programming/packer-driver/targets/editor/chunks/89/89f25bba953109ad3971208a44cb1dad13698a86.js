System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, _dec, _class, _crd, ccclass, property, EndCtrl;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      director = _cc.director;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "908a6IPfvhAHrV8vDHpe1Ki", "EndCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EndCtrl", EndCtrl = (_dec = ccclass('EndCtrl'), _dec(_class = class EndCtrl extends Component {
        // “回到首页”按钮
        onBtnHome() {
          director.loadScene("Home");
        } // “重新游戏”按钮 (回到第1关)


        onBtnRestart() {
          // 重置存档为第1关
          let info = {
            level: 0,
            time: 0,
            step: 0,
            width: 3,
            height: 3
          };
          const localData = sys.localStorage.getItem("CwgState");

          if (localData) {
            info = JSON.parse(localData);
            info.level = 0;
          }

          sys.localStorage.setItem("CwgState", JSON.stringify(info)); // 进入游戏

          director.loadScene("game");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=89f25bba953109ad3971208a44cb1dad13698a86.js.map