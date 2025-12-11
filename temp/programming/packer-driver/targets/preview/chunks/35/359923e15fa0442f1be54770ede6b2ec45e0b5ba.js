System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Glass, _dec, _dec2, _class, _crd, ccclass, menu, property, EdGlass;

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "../core/Glass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlassInfo(extras) {
    _reporterNs.report("EdGlassInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      Glass = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b2fb9pypPRPfaEWUGPc4nES", "EdGlass", undefined);
      /**
       * @Descripttion: 水瓶交互控制组件
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", EdGlass = (_dec = ccclass('EdGlass'), _dec2 = menu('cwg/EdGlass'), _dec(_class = _dec2(_class = class EdGlass extends (_crd && Glass === void 0 ? (_reportPossibleCrUseOfGlass({
        error: Error()
      }), Glass) : Glass) {
        constructor() {
          super(...arguments);
          this.info = undefined;
        }

        init(info) {
          super.init(info);
        }

      }) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=359923e15fa0442f1be54770ede6b2ec45e0b5ba.js.map