System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, CwgPools, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, menu, property, VwEffect;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCwgPools(extras) {
    _reporterNs.report("CwgPools", "./CwgPools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "./Glass", _context.meta, extras);
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
    }, function (_unresolved_2) {
      CwgPools = _unresolved_2.CwgPools;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c387jEqWtFxZjFvHOcXcfw", "VwEffect", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-08-08
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-08-08
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'EventTouch', 'Node', 'v3', 'Vec2', 'Prefab', 'UITransform']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwEffect", VwEffect = (_dec = ccclass('VwEffect'), _dec2 = menu('cwg/VwEffect'), _dec3 = property({
        type: _crd && CwgPools === void 0 ? (_reportPossibleCrUseOfCwgPools({
          error: Error()
        }), CwgPools) : CwgPools
      }), _dec(_class = _dec2(_class = (_class2 = class VwEffect extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pools", _descriptor, this);
        }

        showFullSeled(glass) {
          var fullSeled = this.pools.getFullSealedEffect(glass.node.position, this.node);

          if (fullSeled) {
            fullSeled.ps.startColor = glass.waterColor; // fullSeled.ps.endColor = glass.waterColor;

            fullSeled.play(() => {
              this.pools.recycleFullSealedEffect(fullSeled.node);
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pools", [_dec3], {
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
//# sourceMappingURL=dd889b299f63ddf58f3a389ab199915f213d9705.js.map