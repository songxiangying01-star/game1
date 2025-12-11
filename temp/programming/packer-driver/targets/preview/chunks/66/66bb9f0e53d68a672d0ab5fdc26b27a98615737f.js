System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, EventTarget, EventMng, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      EventTarget = _cc.EventTarget;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "848ee7wpuFN77ERYYaQajF0", "EventMng", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2020-03-04
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2020-03-04
       */


      __checkObsolete__(['EventTarget']);

      _export("default", EventMng = class EventMng {
        static on(type, callback, target) {
          this.eventTarget.on(type, callback, target);
        }

        static once(type, callback, target) {
          this.eventTarget.once(type, callback, target);
        }

        static offTarget(target) {
          this.eventTarget.targetOff(target);
        }

        static off(type, callback, target) {
          if (type === void 0) {
            type = null;
          }

          if (callback === void 0) {
            callback = null;
          }

          if (target === void 0) {
            target = null;
          }

          if (type) {
            this.eventTarget.off(type, callback, target);
          }
        }

        static emit(type, arg1, arg2, arg3, arg4) {
          if (arg1 === void 0) {
            arg1 = null;
          }

          if (arg2 === void 0) {
            arg2 = null;
          }

          if (arg3 === void 0) {
            arg3 = null;
          }

          if (arg4 === void 0) {
            arg4 = null;
          }

          // cc.log("EventMng emit", type);
          this.eventTarget.emit(type, arg1, arg2, arg3, arg4);
        }

      });

      EventMng.eventTarget = new EventTarget();

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=66bb9f0e53d68a672d0ab5fdc26b27a98615737f.js.map