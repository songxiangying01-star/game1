System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FunlandInfo, EdFunlandInfo, _crd;

  function _reportPossibleCrUseOfFunlandInfo(extras) {
    _reporterNs.report("FunlandInfo", "../core/FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLevelStruct(extras) {
    _reporterNs.report("LevelStruct", "../core/FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "../core/FunlandInfo", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      FunlandInfo = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c77fcXF/UVJBp7SLldamAiz", "EdFunlandInfo", undefined);

      _export("default", EdFunlandInfo = class EdFunlandInfo extends (_crd && FunlandInfo === void 0 ? (_reportPossibleCrUseOfFunlandInfo({
        error: Error()
      }), FunlandInfo) : FunlandInfo) {
        /** 当前编辑的关卡数据 */

        /**
         * 重置编辑器数据
         * @async
         * @returns 初始化后的关卡数据
         */
        async reset() {
          let data = await this.state.getData().catch(() => {
            return null;
          });

          if (!data) {
            data = {
              "level": [{
                "position": {
                  "x": -248,
                  "y": -120
                },
                "colors": [],
                "hideCnt": 0,
                "ad": false
              }, {
                "position": {
                  "x": 0,
                  "y": -120
                },
                "colors": [],
                "hideCnt": 0,
                "ad": false
              }, {
                "position": {
                  "x": 248,
                  "y": -120
                },
                "colors": [],
                "hideCnt": 0,
                "ad": false
              }]
            };
          }

          this.curLevelData = data;
          this.resetLvData(this.curLevelData);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=54d66fd2389ee52ae2a0f793e6bdc8c668a020ac.js.map