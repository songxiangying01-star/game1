System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Rand, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "51d21ur4eZE+Igvn+mH4UPN", "Rand", undefined);

      /**
       * @Descripttion:
       * @version: 1.0
       * @Author:
       * @Date: 2024-06-26
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-07
       */
      _export("default", Rand = class Rand {
        static intNum(start, end) {
          return Math.floor(Math.random() * (end - start) + start);
        }

        static one(arr, rm) {
          if (rm === void 0) {
            rm = false;
          }

          var len = arr.length;

          if (len <= 0) {
            return;
          }

          if (rm) {
            return arr.splice(this.intNum(0, len), 1);
          }

          return arr[this.intNum(0, len)];
        }

        static sort(arr) {
          arr.sort((a, b) => {
            return Math.random() - 0.5;
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7c077441331c003d5a60fdeea3dfdf4960ed7933.js.map