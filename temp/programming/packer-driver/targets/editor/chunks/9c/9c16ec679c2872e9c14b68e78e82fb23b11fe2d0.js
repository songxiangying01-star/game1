System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ParticleSystem2D, _dec, _dec2, _dec3, _class, _class2, _descriptor, _crd, ccclass, menu, property, EfParticleSystem2D;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      ParticleSystem2D = _cc.ParticleSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2534db9OExGY4ZqPj8eAf9t", "EfParticleSystem2D", undefined);
      /**
       * @Descripttion:
       * 水满了，显示一个特效
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-08-08
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-08-08
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'EventTouch', 'Node', 'v3', 'Vec2', 'Prefab', 'UITransform', 'ParticleSystem2D']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("EfParticleSystem2D", EfParticleSystem2D = (_dec = ccclass('EfParticleSystem2D'), _dec2 = menu('cwg/EfParticleSystem2D'), _dec3 = property(ParticleSystem2D), _dec(_class = _dec2(_class = (_class2 = class EfParticleSystem2D extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "ps", _descriptor, this);
        }

        play(complete) {
          this.node.active = true;

          if (this.ps) {
            this.ps.resetSystem();

            if (this.ps.duration > 0) {
              this.scheduleOnce(complete, this.ps.duration + this.ps.life + this.ps.lifeVar);
            }
          }
        }

        stop() {
          this.ps && this.ps.stopSystem();
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "ps", [_dec3], {
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
//# sourceMappingURL=9c16ec679c2872e9c14b68e78e82fb23b11fe2d0.js.map