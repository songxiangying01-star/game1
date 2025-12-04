System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, LocalStorage, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb7ce+0P6VPWof0rNCNIYp4", "LocalStorage", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2020-03-04
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2022-11-01
       */


      __checkObsolete__(['sys']);

      _export("default", LocalStorage = class LocalStorage {
        static getItem(key, defaultValue = null) {
          let item = sys.localStorage.getItem(key);

          if (!item) {
            return defaultValue;
          }

          return item;
        }

        static setItem(key, value) {
          if (!value) {
            value = "";
          }

          sys.localStorage.setItem(key, value);
        }

        static getJson(key, defaultValue = null) {
          let item = this.getItem(key);

          if (!item) {
            return defaultValue;
          }

          try {
            return JSON.parse(item);
          } catch (e) {}

          return defaultValue;
        }

        static setJson(key, value) {
          const item = JSON.stringify(value);
          this.setItem(key, item);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9012a80e30af0ad357d8b892373126721d21ed52.js.map