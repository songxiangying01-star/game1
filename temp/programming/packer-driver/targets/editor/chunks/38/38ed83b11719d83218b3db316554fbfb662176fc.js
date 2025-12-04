System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, UiEdColumnCtrl, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, UiEdColumnCount;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUiEdColumnCtrl(extras) {
    _reporterNs.report("UiEdColumnCtrl", "./UiEdColumnCtrl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdFunlandInfo(extras) {
    _reporterNs.report("EdFunlandInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "../core/FunlandInfo", _context.meta, extras);
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
      UiEdColumnCtrl = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "72f3f6LdfpNE7lKWZ28mHdL", "UiEdColumnCount", undefined);
      /**
       * @Descripttion: 控制列数
       * 1. 管理关卡编辑器的列数显示
       * 2. 同步列数与关卡数据的映射关系
       * 3. 控制列数增减操作
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

      _export("default", UiEdColumnCount = (_dec = ccclass('UiEdColumnCount'), _dec2 = menu('cwg/UiEdColumnCount'), _dec3 = property(Node), _dec4 = property(Label), _dec(_class = _dec2(_class = (_class2 = class UiEdColumnCount extends Component {
        constructor(...args) {
          super(...args);

          /** 列控制器容器节点 */
          _initializerDefineProperty(this, "columnCtrlsContent", _descriptor, this);

          /** 当前列数显示标签 */
          _initializerDefineProperty(this, "countLabel", _descriptor2, this);

          this.count = 5;
          this.columnMap = new Map();
        }

        /** 当前配置的关卡数据 */

        /**
         * 重置控制器状态
         * @param funland 关卡数据（为空时重置为默认状态）
         */
        reset(funland) {
          if (funland) {
            const columnMap = new Map();
            funland.glasses.forEach(item => {
              const key = item.position.x;
              const items = columnMap.get(key) || [];
              items.push(item);
              columnMap.set(key, items);
            });
            this.columnMap = columnMap;
            this.count = this.columnMap.size;
            this.currentStageConfig = funland;
          } else {
            this.count = 5;
            this.currentStageConfig = undefined;
          }

          this.updateCountDisplay();
        }
        /** 增加列数（最大不超过8列） */


        increaseColumnCount() {
          if (this.count >= 8) {
            return;
          }

          this.count++;
          this.updateCountDisplay();
        }
        /** 减少列数（最小不低于0列） */


        decreaseColumnCount() {
          if (this.count <= 0) {
            return;
          }

          this.count--;
          this.updateCountDisplay();
        }
        /** 更新列数显示和控制器布局 */


        updateCountDisplay() {
          this.countLabel.string = this.count.toString(); // 总宽度744px根据列数均分（假设为固定容器宽度）

          const width = 744 / this.count;
          const sortedEntries = Array.from(this.columnMap.entries()).sort((a, b) => a[0] - b[0]);
          const maxCnt = sortedEntries.length;
          this.columnCtrlsContent.children.forEach((item, index) => {
            const colument = item.getComponent(_crd && UiEdColumnCtrl === void 0 ? (_reportPossibleCrUseOfUiEdColumnCtrl({
              error: Error()
            }), UiEdColumnCtrl) : UiEdColumnCtrl);

            if (index < maxCnt) {
              colument.reset(sortedEntries[index][1]);
            } else {
              colument.reset([]);
            }

            colument.uiTransform.width = width;
            item.active = index < this.count;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "columnCtrlsContent", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "countLabel", [_dec4], {
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
//# sourceMappingURL=38ed83b11719d83218b3db316554fbfb662176fc.js.map