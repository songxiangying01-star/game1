System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, UiEdColumn, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, UiEdColumnCtrl;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUiEdColumn(extras) {
    _reporterNs.report("UiEdColumn", "./UiEdColumn", _context.meta, extras);
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
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      UiEdColumn = _unresolved_2.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "611efzi+T5O6a1GZLbmXFQR", "UiEdColumnCtrl", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-08
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", UiEdColumnCtrl = (_dec = ccclass('UiEdColumnCtrl'), _dec2 = menu('cwg/UiEdColumnCtrl'), _dec3 = property(UITransform), _dec4 = property(_crd && UiEdColumn === void 0 ? (_reportPossibleCrUseOfUiEdColumn({
        error: Error()
      }), UiEdColumn) : UiEdColumn), _dec(_class = _dec2(_class = (_class2 = class UiEdColumnCtrl extends Component {
        constructor(...args) {
          super(...args);

          /** 列容器UI变换组件 */
          _initializerDefineProperty(this, "uiTransform", _descriptor, this);

          /** 列控件实例 */
          _initializerDefineProperty(this, "column", _descriptor2, this);

          /** 当前列包含的玻璃杯数量 */
          this.glassCount = 3;
        }

        onLoad() {
          this.node.on(Node.EventType.SIZE_CHANGED, this.sizeChanged, this);
          this.node.on(Node.EventType.ACTIVE_CHANGED, this.activeChanged, this);
        }

        start() {
          this.column.adjustGlassCount(this.glassCount);
        }
        /**
         * 重置列状态
         * @param stageInfos 关卡配置数据
         */


        reset(stageInfos) {
          this.glassCount = stageInfos.length;
          this.column.reset(stageInfos);
        }

        sizeChanged() {
          this.column.uiTransform.width = this.uiTransform.width;
        }

        activeChanged() {
          this.column.node.active = this.node.active;
        }
        /**
         * 调整玻璃杯数量
         * @param countStr 输入的数量字符串
         */


        resetCount(_, countStr) {
          this.glassCount = parseInt(countStr);
          this.column.adjustGlassCount(this.glassCount);
        }

        moveUp() {
          this.column.moveUp();
        }

        moveDown() {
          this.column.moveDown();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiTransform", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "column", [_dec4], {
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
//# sourceMappingURL=6491c26128ba0c9a1c55380892d300a31845d9e7.js.map