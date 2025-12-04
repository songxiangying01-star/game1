System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Sprite, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, WaterSurface;

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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cad1eGn1LJMRKWrQr3f1pXq", "WaterSurface", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Component', 'Material', 'Node', 'Sprite', 'Tween']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", WaterSurface = (_dec = ccclass('WaterSurface'), _dec2 = menu('cwg/WaterSurface'), _dec3 = property({
        tooltip: '是否开启水面波动效果'
      }), _dec4 = property({
        type: Node,
        tooltip: '包含不同水位节点的容器（0-3级水位）'
      }), _dec(_class = _dec2(_class = (_class2 = class WaterSurface extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "surfaceEffect", _descriptor, this);

          _initializerDefineProperty(this, "watersNode", _descriptor2, this);

          this.waterMaterial = null;
          this._waveTime = 0;
          this._waveAmplitude = 5;
          // 【修复点】Tween 需要指定泛型类型，这里改为 Tween<any>
          this.tweenProperty = null;
        }

        /**
         * 重置水面特效参数
         * 初始化水面材质并设置默认波动参数
         */
        reset() {
          this.waterMaterial = undefined;
          var surfaceSprite = this.getSurfaceSprite();

          if (!surfaceSprite) {
            return;
          }

          if (!surfaceSprite.node.active) {
            surfaceSprite.node.active = true;
          }

          this.waterMaterial = surfaceSprite.getMaterialInstance(0); // 强制关闭波动效果

          if (this.waterMaterial) {
            this.surfaceEffect = false;
          }
        }
        /**
         * 获取当前激活水面的精灵组件
         * @returns 水面精灵对象，未找到时返回null
         */


        getSurfaceSprite() {
          var surfaceNode = this.getSurfaceNode();

          if (surfaceNode) {
            return surfaceNode.children[0].getComponent(Sprite);
          }
        }
        /**
         * 遍历水位容器查找当前激活的水位节点
         * @returns 当前激活的最高级别水位节点
         */


        getSurfaceNode() {
          for (var i = 3; i >= 0; i--) {
            var waterNode = this.watersNode.children[i];

            if (waterNode.active) {
              return waterNode;
            }
          }
        }

        update(dt) {
          if (!this.surfaceEffect) return;

          if (!this.waterMaterial && this.getSurfaceNode()) {
            this._waveTime = 0;
            this.reset();
          }

          if (!this.waterMaterial) return;
          /** 累计波动时间（用于材质动画） */

          this._waveTime += dt;
          /** 当前波动幅度随时间衰减 */

          this._waveAmplitude -= dt;

          if (this._waveAmplitude < 0) {
            this._waveAmplitude = 0;
            this.surfaceEffect = false;
          }
          /** 更新材质参数 */


          this.waterMaterial.setProperty('time', this._waveTime);
          this.waterMaterial.setProperty('waveAmplitude', this._waveAmplitude);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "surfaceEffect", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return false;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watersNode", [_dec4], {
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
//# sourceMappingURL=09ff9ffe64b674fac1b987001a6cedb23b625e83.js.map