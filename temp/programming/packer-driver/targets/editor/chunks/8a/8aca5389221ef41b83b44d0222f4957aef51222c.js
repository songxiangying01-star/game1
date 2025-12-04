System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Prefab, VwFunland, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, menu, property, VwExchange;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVwFunland(extras) {
    _reporterNs.report("VwFunland", "../VwFunland", _context.meta, extras);
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
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      VwFunland = _unresolved_2.VwFunland;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36a804ym+9ORIMesu3lkZAw", "VwExchange", undefined);
      /**
       * @Descripttion:
       * 使用交换道具：点击后不显示特效，直接随机选择一个有效瓶子进行水层交换
       * @version: 1.1
       * @Author: Lioesquieu
       * @Date: 2025-08-07
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-08-07
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwExchange", VwExchange = (_dec = ccclass('VwExchange'), _dec2 = menu('cwg/VwExchange'), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(_crd && VwFunland === void 0 ? (_reportPossibleCrUseOfVwFunland({
        error: Error()
      }), VwFunland) : VwFunland), _dec(_class = _dec2(_class = (_class2 = class VwExchange extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "dmNode", _descriptor2, this);

          _initializerDefineProperty(this, "funlandView", _descriptor3, this);
        }

        show() {
          // 筛选出所有可以进行交换的瓶子
          // 条件：不是广告瓶、不是空瓶、没有密封（没满且同色）、没有隐藏层
          const candidates = this.funlandView.glasses.filter(glass => !glass.isAd() && !glass.isEmpty && !glass.isSealed() && !glass.isAllHide());

          if (candidates.length > 0) {
            // 从符合条件的瓶子中随机选择一个
            const randomIndex = Math.floor(Math.random() * candidates.length);
            const selectedGlass = candidates[randomIndex]; // 直接执行交换逻辑，不显示任何特效

            this.funlandView.handleRandExchangeColors(selectedGlass);
          } // 隐藏自身（确保没有残留UI）


          this.hide();
        }

        hide() {
          this.contentNode.removeAllChildren();
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dmNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "funlandView", [_dec5], {
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
//# sourceMappingURL=8aca5389221ef41b83b44d0222f4957aef51222c.js.map