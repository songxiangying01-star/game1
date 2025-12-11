System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Component, Node, Sprite, tween, UIOpacity, UITransform, Vec3, WaterColor, WaterColors, WaterSurface, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, menu, property, Glass;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfWaterColor(extras) {
    _reporterNs.report("WaterColor", "./CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColors(extras) {
    _reporterNs.report("WaterColors", "./CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterSurface(extras) {
    _reporterNs.report("WaterSurface", "./glass-anims/WaterSurface", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "./FunlandInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Color = _cc.Color;
      Component = _cc.Component;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      WaterColor = _unresolved_2.WaterColor;
      WaterColors = _unresolved_2.WaterColors;
    }, function (_unresolved_3) {
      WaterSurface = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a00bdwvCvVExLUTsg6BMSMd", "Glass", undefined);
      /**
       * @Descripttion: 水瓶交互控制组件
       * @version: 1.1 (Safety Fixes)
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Color', 'Component', 'Node', 'Sprite', 'tween', 'UIOpacity', 'UITransform', 'Vec3']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", Glass = (_dec = ccclass('Glass'), _dec2 = menu('cwg/Glass'), _dec3 = property({
        type: Node,
        tooltip: '瓶体碰撞节点（用于触摸检测）'
      }), _dec4 = property({
        type: Node,
        tooltip: '水层节点容器（包含4层水柱节点）'
      }), _dec5 = property({
        type: Node,
        tooltip: '密封状态瓶盖节点'
      }), _dec6 = property(Node), _dec7 = property(_crd && WaterSurface === void 0 ? (_reportPossibleCrUseOfWaterSurface({
        error: Error()
      }), WaterSurface) : WaterSurface), _dec8 = property(Node), _dec(_class = _dec2(_class = (_class2 = class Glass extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "glassNode", _descriptor, this);

          _initializerDefineProperty(this, "watersNode", _descriptor2, this);

          _initializerDefineProperty(this, "capNode", _descriptor3, this);

          // 瓶盖
          _initializerDefineProperty(this, "waterHeight", _descriptor4, this);

          // 每节水柱的高度
          _initializerDefineProperty(this, "pickupHeight", _descriptor5, this);

          _initializerDefineProperty(this, "shadowNode", _descriptor6, this);

          _initializerDefineProperty(this, "waterSurface", _descriptor7, this);

          _initializerDefineProperty(this, "adNode", _descriptor8, this);

          this.info = undefined;
          this.waters = [];
          // 水瓶内的水颜色

          /** 标记瓶子是否处于拿起状态 */
          this.isPickedUp = false;
        }

        /**
         * 初始化水瓶状态
         * @param info
         */
        init(info) {
          if (this.capNode) this.capNode.active = false; // 强制关闭广告

          info.ad = false;
          this.info = info;
          this.reset(info.colors);
          this.updateDisplayState();
        }
        /**
         * 重置水柱显示状态
         * @param waters 新的水色配置数组
         */


        reset(waters) {
          this.info.colors = waters;
          this.waters = waters;
          var waterCnt = waters.length;

          for (var i = 0; i < waterCnt; i++) {
            this.setWater(i, this.waters[i]);
          }

          for (var _i = waterCnt; _i < 4; _i++) {
            var waterNode = this.watersNode.children[_i];
            if (waterNode) waterNode.active = false;
          }

          this.resetSurface();
        }

        resetSurface() {
          this.waterSurface && this.waterSurface.reset();
        }
        /**
         * 更新瓶子视觉状态
         */


        updateDisplayState() {
          this.showSurface();

          if (this.isSealed()) {
            this.putOnCap();
          }

          this.updateShadowOpacity(); // 强制隐藏广告图标

          if (this.adNode) {
            this.adNode.active = false;
          }
        } // 根据水多水少调整影子的颜色深浅


        updateShadowOpacity() {
          // 【安全检查】确保 shadowNode 存在
          if (!this.shadowNode) return;
          var opacityLevels = [64, 80, 96, 112, 128];
          var uiOpacity = this.shadowNode.getComponent(UIOpacity); // 【安全检查】确保组件存在

          if (uiOpacity) {
            uiOpacity.opacity = opacityLevels[this.waters.length];
          }
        } // 每一层水都有一个水面，需要隐藏其他层的水面，显示最上层的水面


        showSurface() {
          var topIndex = this.waters.length - 1;

          for (var i = 0; i < topIndex; i++) {
            var waterNode = this.watersNode.children[i];
            if (waterNode && waterNode.children[0]) waterNode.children[0].active = false;
          }

          if (topIndex >= 0) {
            var topWaterNode = this.watersNode.children[topIndex];
            if (topWaterNode && topWaterNode.children[0]) topWaterNode.children[0].active = true;
          }
        }

        getTouchBoundingBoxToWorld() {
          if (!this.glassNode) return null;
          return this.glassNode.getComponent(UITransform).getBoundingBoxToWorld();
        }
        /**
         * 设置指定层水柱颜色
         */


        setWater(index, waterColor, black2color) {
          var _waterNode$children$;

          var waterNode = this.watersNode.children[index];
          if (!waterNode) return; // 安全检查

          if (waterColor == (_crd && WaterColor === void 0 ? (_reportPossibleCrUseOfWaterColor({
            error: Error()
          }), WaterColor) : WaterColor).None) {
            waterNode.active = false;
            return;
          }

          if (index < this.info.hideCnt) {
            waterColor = (_crd && WaterColor === void 0 ? (_reportPossibleCrUseOfWaterColor({
              error: Error()
            }), WaterColor) : WaterColor).Black;
            if (waterNode.children[1]) waterNode.children[1].active = true;
          } else {
            if (waterNode.children[1]) waterNode.children[1].active = false;
          }

          waterNode.active = true;
          if (waterNode.children[0]) waterNode.children[0].active = false;
          var waterSprite = waterNode.getComponent(Sprite);
          var surfaceSprite = (_waterNode$children$ = waterNode.children[0]) == null ? void 0 : _waterNode$children$.getComponent(Sprite);
          if (!waterSprite || !surfaceSprite) return; // 安全检查

          var baseColor = new Color((_crd && WaterColors === void 0 ? (_reportPossibleCrUseOfWaterColors({
            error: Error()
          }), WaterColors) : WaterColors)[waterColor].base);
          var surfaceColor = new Color((_crd && WaterColors === void 0 ? (_reportPossibleCrUseOfWaterColors({
            error: Error()
          }), WaterColors) : WaterColors)[waterColor].surface);

          if (black2color) {
            tween(waterSprite).to(0.3, {
              color: baseColor
            }).start();
            tween(surfaceSprite).to(0.3, {
              color: surfaceColor
            }).start();
          } else {
            waterSprite.color = baseColor;
            surfaceSprite.color = surfaceColor;
          }
        } // 把瓶子放下来


        putDown() {
          if (!this.isPickedUp || !this.glassNode || !this.shadowNode) {
            return;
          }

          this.isPickedUp = false;
          var glassTarget = new Vec3(this.glassNode.position.x, 0, this.glassNode.position.z);
          tween(this.glassNode).to(0.17, {
            position: glassTarget
          }).start();
          var shadowTarget = new Vec3(0, 0, this.shadowNode.position.z);
          tween(this.shadowNode).to(0.17, {
            position: shadowTarget
          }).start();
          this.resetSurface();
        } // 把瓶子拿起来


        pickup() {
          if (this.isPickedUp || !this.glassNode || !this.shadowNode) {
            return;
          }

          this.isPickedUp = true;
          var glassTarget = new Vec3(this.glassNode.position.x, this.pickupHeight, this.glassNode.position.z);
          tween(this.glassNode).to(0.17, {
            position: glassTarget
          }).start();
          var shadowTarget = new Vec3(17.3, 10, this.shadowNode.position.z);
          tween(this.shadowNode).to(0.17, {
            position: shadowTarget
          }).start();
          this.resetSurface();
        }

        hide() {
          this.node.active = false;
        }

        show() {
          if (this.node.active == false) {
            this.node.active = true;
            this.resetSurface();
            return;
          }

          this.node.active = true;
        }
        /**
         * 获取顶层水色
         */


        get waterColorID() {
          var len = this.waters.length;

          if (len == 0) {
            return 0;
          }

          return this.waters[len - 1];
        }

        get waterColor() {
          var len = this.waters.length;

          if (len == 0 || !this.watersNode.children[len - 1]) {
            return Color.WHITE;
          }

          return this.watersNode.children[len - 1].children[0].getComponent(Sprite).color;
        }
        /**
         * 倒出顶层水
         */


        pourOutWater() {
          var water = this.waters.pop();
          var index = this.waters.length;
          this.setWater(index, (_crd && WaterColor === void 0 ? (_reportPossibleCrUseOfWaterColor({
            error: Error()
          }), WaterColor) : WaterColor).None);
          this.resetSurface();
          return water;
        }

        addIntoWater(color) {
          var index = this.waters.length;
          this.waters.push(color);
          this.setWater(index, color);
          this.resetSurface();
        }

        isAllHide() {
          if (this.info.hideCnt <= 0) {
            return false;
          }

          return this.info.hideCnt == this.waters.length;
        }

        showHide() {
          if (this.info.hideCnt <= 0) {
            return;
          }

          this.info.hideCnt--;
          this.setWater(this.info.hideCnt, this.waters[this.info.hideCnt], true);
          this.updateDisplayState();
        }

        isAd() {
          return false;
        }
        /**
         * 判断是否达到密封状态（4层同色水）
         */


        isSealed() {
          if (this.waters.length < 4) {
            return false;
          }

          return this.waters[0] == this.waters[1] && this.waters[1] == this.waters[2] && this.waters[2] == this.waters[3];
        }

        putOnCap() {
          if (this.capNode) this.capNode.active = true;
        }

        get isFull() {
          return this.waters.length == 4;
        }

        get isEmpty() {
          return this.waters.length == 0;
        }

        removeAd() {
          this.info.ad = false;
          this.updateDisplayState();
        } // 随机交换水颜色


        randExchangeColors() {
          this.waters.sort((a, b) => {
            return Math.random() - 0.5;
          });
          this.reset(this.waters);
        }

        toString() {
          return JSON.stringify({
            waters: this.waters
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "glassNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "watersNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "capNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "waterHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 40;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "pickupHeight", [property], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 32;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "shadowNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "waterSurface", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "adNode", [_dec8], {
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
//# sourceMappingURL=eb1eea0e2bfac83532bff0ca0865a2d73db83fcd.js.map