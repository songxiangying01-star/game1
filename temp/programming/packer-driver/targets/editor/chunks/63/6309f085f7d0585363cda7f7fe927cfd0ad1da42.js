System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, UiEdColumn, Rand, WaterColor, EdGlass, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, UiEdColorCount;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUiEdColumn(extras) {
    _reporterNs.report("UiEdColumn", "./UiEdColumn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRand(extras) {
    _reporterNs.report("Rand", "../common/Rand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColor(extras) {
    _reporterNs.report("WaterColor", "../core/CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlass(extras) {
    _reporterNs.report("EdGlass", "./EdGlass", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UiEdColumn = _unresolved_2.default;
    }, function (_unresolved_3) {
      Rand = _unresolved_3.default;
    }, function (_unresolved_4) {
      WaterColor = _unresolved_4.WaterColor;
    }, function (_unresolved_5) {
      EdGlass = _unresolved_5.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b900aDzJu1G6IrkRNXHiya4", "UiEdColorCount", undefined);
      /**
       * @Descripttion: 控制颜色数量
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-08
       */


      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", UiEdColorCount = (_dec = ccclass('UiEdColorCount'), _dec2 = menu('cwg/UiEdColorCount'), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = class UiEdColorCount extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "columnsContent", _descriptor, this);

          _initializerDefineProperty(this, "cntLabel", _descriptor2, this);

          this.count = 5;
        }

        start() {
          this.updateColorConfiguration();
        }

        handleIncrement() {
          if (this.count >= 8) {
            return;
          }

          this.count++;
          this.updateColorConfiguration();
        }

        handleDecrement() {
          if (this.count <= 0) {
            return;
          }

          this.count--;
          this.updateColorConfiguration();
        }
        /**
         * 计算当前场景中所有水柱的总段数
         * 每瓶水最多可分割为4段（对应4种颜色）
         */


        calculateTotalWaterSegments() {
          let total = 0; // 瓶子总数

          this.columnsContent.children.forEach(node => {
            if (!node.active) {
              return;
            }

            const item = node.getComponent(_crd && UiEdColumn === void 0 ? (_reportPossibleCrUseOfUiEdColumn({
              error: Error()
            }), UiEdColumn) : UiEdColumn);
            item.glassesNode.children.forEach(node => {
              const glass = node.getComponent(_crd && EdGlass === void 0 ? (_reportPossibleCrUseOfEdGlass({
                error: Error()
              }), EdGlass) : EdGlass);

              if (glass.info.colorCnt == undefined) {
                total += 4;
              } else {
                total += glass.info.colorCnt;
              }
            });
          });
          return total;
        }
        /**
         * 更新颜色配置
         * 1. 根据总水柱段数计算最大可用颜色数
         * 2. 生成随机颜色序列
         * 3. 分配颜色到各个玻璃瓶
         */


        updateColorConfiguration() {
          // 计算最大可用颜色数（每4段水柱对应1种颜色）
          const totalSegments = Math.floor(this.calculateTotalWaterSegments() / 4);

          if (this.count > totalSegments) {
            this.count = totalSegments;
          }

          if (this.count == 0) {
            this.count = 1;
          }

          this.cntLabel.string = this.count.toString(); // 生成基础颜色序列（确保颜色不重复循环）

          let colors = [];
          let color = (_crd && WaterColor === void 0 ? (_reportPossibleCrUseOfWaterColor({
            error: Error()
          }), WaterColor) : WaterColor).None + 1;

          for (let i = 0; i < this.count; i++) {
            colors.push(color);
            color++;

            if (color >= (_crd && WaterColor === void 0 ? (_reportPossibleCrUseOfWaterColor({
              error: Error()
            }), WaterColor) : WaterColor).Black) {
              color = (_crd && WaterColor === void 0 ? (_reportPossibleCrUseOfWaterColor({
                error: Error()
              }), WaterColor) : WaterColor).None + 1;
            }
          } // 分配颜色到水柱（每颜色重复4次形成完整水柱）


          const waterSegments = [];

          for (let i = 0; i < totalSegments; i++) {
            const color = colors.shift();
            waterSegments.push(color);
            waterSegments.push(color);
            waterSegments.push(color);
            waterSegments.push(color);
            colors.push(color);
          } // 随机打乱颜色顺序实现自然分布


          (_crd && Rand === void 0 ? (_reportPossibleCrUseOfRand({
            error: Error()
          }), Rand) : Rand).sort(waterSegments);
          this.columnsContent.children.forEach(node => {
            if (!node.active) {
              return;
            }

            const item = node.getComponent(_crd && UiEdColumn === void 0 ? (_reportPossibleCrUseOfUiEdColumn({
              error: Error()
            }), UiEdColumn) : UiEdColumn);

            for (let i = 0, len = item.glassesNode.children.length; i < len; i++) {
              const node = item.glassesNode.children[i];
              const glass = node.getComponent(_crd && EdGlass === void 0 ? (_reportPossibleCrUseOfEdGlass({
                error: Error()
              }), EdGlass) : EdGlass);

              if (glass.info.ad) {
                glass.info.colorCnt = 0;
                glass.info.colors = [];
              } else {
                if (glass.info.colorCnt == undefined) {
                  glass.info.colorCnt = 4;
                }

                if (waterSegments.length < glass.info.colorCnt) {
                  glass.info.colors = waterSegments.splice(0, waterSegments.length);
                } else {
                  glass.info.colors = waterSegments.splice(0, glass.info.colorCnt);
                }
              }

              glass.init(glass.info);
            }
          });
        }

        choseReset() {
          this.updateColorConfiguration();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "columnsContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cntLabel", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6309f085f7d0585363cda7f7fe927cfd0ad1da42.js.map