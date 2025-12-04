System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Toolkit, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0db23WP0jhH2Zn/YD3kG1d6", "Toolkit", undefined);

      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2020-03-04
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-08
       */
      __checkObsolete__(['Tween']);

      _export("default", Toolkit = class Toolkit {
        static cloneObj(obj) {
          var newObj = {};

          if (obj instanceof Array) {
            newObj = [];
          }

          for (var key in obj) {
            var val = obj[key];
            newObj[key] = typeof val === 'object' ? Toolkit.cloneObj(val) : val;
          }

          return newObj;
        }

        static waitForTween(tween) {
          return new Promise(resolve => tween.call(resolve).start());
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9fb9cbbdb0ce153f819989ff8ef7ab988ae05ba9.js.map