System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, LocalStorage, ResLoader, CwgState, _crd;

  function _reportPossibleCrUseOfLocalStorage(extras) {
    _reporterNs.report("LocalStorage", "../common/LocalStorage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResLoader(extras) {
    _reporterNs.report("ResLoader", "../common/ResLoader", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      LocalStorage = _unresolved_2.default;
    }, function (_unresolved_3) {
      ResLoader = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3cfe6wOGaFIQr46HqFQRTdb", "CwgState", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-10
       */


      _export("default", CwgState = class CwgState {
        constructor() {
          this.info = {
            level: 0,
            time: 0,
            step: 0,
            width: 3,
            height: 3
          };
          this.info = (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).getJson("CwgState");

          if (!this.info) {
            this.info = {
              level: 0,
              time: 1000,
              step: 2,
              width: 2,
              height: 2
            };
          } // 【修改点】强制从第1关开始（索引0）


          this.info.level = 0;
        }

        reset() {}

        getData() {
          return (_crd && ResLoader === void 0 ? (_reportPossibleCrUseOfResLoader({
            error: Error()
          }), ResLoader) : ResLoader).loadJson('resources', `data/level_${this.info.level + 1}`);
        }

        save() {
          (_crd && LocalStorage === void 0 ? (_reportPossibleCrUseOfLocalStorage({
            error: Error()
          }), LocalStorage) : LocalStorage).setJson("CwgState", this.info);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5e938edf978757676ed953eac6f5b5b0d06513c.js.map