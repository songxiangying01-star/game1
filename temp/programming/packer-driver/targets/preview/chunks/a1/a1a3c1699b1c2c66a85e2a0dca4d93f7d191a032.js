System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, sys, _dec, _class, _crd, ccclass, property, HomeCtrl;

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

      _cclegacy._RF.push({}, "2bdabN/BYlCT49vdmM3EYck", "HomeCtrl", undefined);

      __checkObsolete__(['_decorator', 'Component', 'director', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeCtrl", HomeCtrl = (_dec = ccclass('HomeCtrl'), _dec(_class = class HomeCtrl extends Component {
        start() {} // “开始游戏”按钮点击事件


        onBtnStart() {
          console.log("点击开始游戏"); // 确保从第1关开始 (level 0 = 第1关)
          // 读取现有的存档结构，只修改 level，保留其他设置

          var info = {
            level: 0,
            time: 0,
            step: 0,
            width: 3,
            height: 3
          };
          var localData = sys.localStorage.getItem("CwgState");

          if (localData) {
            info = JSON.parse(localData);
            info.level = 0; // 强制重置为第1关
          }

          sys.localStorage.setItem("CwgState", JSON.stringify(info)); // 跳转到游戏场景

          director.loadScene("game");
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a1a3c1699b1c2c66a85e2a0dca4d93f7d191a032.js.map