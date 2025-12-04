System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AudioClip, AudioSource, Component, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, menu, property, SoundComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      AudioClip = _cc.AudioClip;
      AudioSource = _cc.AudioSource;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cdd30Ci1VpN2quA82l3xKvH", "SoundComp", undefined);
      /**
       * @Descripttion: 水瓶交互控制组件
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'AudioClip', 'AudioSource', 'Color', 'Component', 'Node', 'Sprite', 'tween', 'UIOpacity', 'UITransform']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", SoundComp = (_dec = ccclass('SoundComp'), _dec2 = menu('cwg/SoundComp'), _dec3 = property(AudioSource), _dec4 = property(AudioClip), _dec5 = property(AudioClip), _dec(_class = _dec2(_class = (_class2 = class SoundComp extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "audioSource", _descriptor, this);

          _initializerDefineProperty(this, "waterClips", _descriptor2, this);

          _initializerDefineProperty(this, "pickupClip", _descriptor3, this);
        }

        playWater(idx) {
          if (idx < 0 || idx >= this.waterClips.length) {
            return;
          }

          this.playOneShot(this.waterClips[idx]);
        }

        playPickup() {
          this.playOneShot(this.pickupClip, 0.3);
        }

        playOneShot(clip, volumeScale) {
          this.audioSource.playOneShot(clip, volumeScale);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "audioSource", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "waterClips", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pickupClip", [_dec5], {
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
//# sourceMappingURL=fd330aa9e88b8d3f9789120357fd283406723b6b.js.map