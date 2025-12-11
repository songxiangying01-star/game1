System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, FunlandInfo, _crd;

  function _reportPossibleCrUseOfCwgState(extras) {
    _reporterNs.report("CwgState", "./CwgState", _context.meta, extras);
  }

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "17317g2M3pP2JIrjJwBTNC8", "FunlandInfo", undefined);
      /**
       * @Descripttion:
       * @version: 1.1 (With Default Level)
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-20
       */


      _export("default", FunlandInfo = class FunlandInfo {
        init(state) {
          this.state = state;
        }

        async reset() {
          // 尝试加载 JSON 文件
          const data = await this.state.getData().catch(() => {
            return null;
          });

          if (data) {
            // 如果加载成功，使用 JSON 数据
            this.resetLvData(data);
          } else {
            // 【关键修改】如果加载失败（data为null），使用默认的保底数据
            console.warn("关卡数据加载失败，使用默认第1关数据");
            const defaultLevel = {
              level: [// 瓶子1：位置(-150, 0)，颜色[1, 1, 2, 2] (红红橙橙)
              {
                position: {
                  x: -150,
                  y: 0
                },
                colors: [1, 1, 2, 2],
                hideCnt: 0,
                ad: false
              }, // 瓶子2：位置(150, 0)，颜色[2, 2, 1, 1] (橙橙红红)
              {
                position: {
                  x: 150,
                  y: 0
                },
                colors: [2, 2, 1, 1],
                hideCnt: 0,
                ad: false
              }, // 瓶子3：位置(0, 0)，空瓶
              {
                position: {
                  x: 0,
                  y: 0
                },
                colors: [],
                hideCnt: 0,
                ad: false
              }]
            };
            this.resetLvData(defaultLevel);
          }
        }
        /**
         * 切换到上一关卡
         * @remarks 当关卡数≤0时不执行操作
         */


        preLevel() {
          if (this.state.info.level <= 0) {
            return;
          }

          this.state.info.level--;
          this.state.save();
        }
        /**
         * 切换到下一关卡
         * 修改逻辑：限制只玩前3关 (0, 1, 2)，超过则回到第1关
         */


        nextLevel() {
          this.state.info.level++; // 需求：只要前三个关卡。索引从0开始，所以大于2就重置回0

          if (this.state.info.level > 1) {
            this.state.info.level = 0;
          }

          this.state.save();
        }

        resetLvData(save) {
          this.glasses = save.level; // 确保数据存在

          if (!this.glasses) {
            this.glasses = [];
            return;
          } // 重新排序，根据position.y


          this.glasses.sort((a, b) => {
            return b.position.y - a.position.y;
          });
        }

      });

      FunlandInfo.debug = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f0034bd718cdb0c9e7f9c93a54dbf9523fea0d66.js.map