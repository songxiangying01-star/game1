System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, AnimationClip, Color, Node, Sprite, tween, UIOpacity, v3, Vec3, Glass, WaterColors, Toolkit, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, menu, property, GlassPourOut;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "../Glass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColor(extras) {
    _reporterNs.report("WaterColor", "../CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColors(extras) {
    _reporterNs.report("WaterColors", "../CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolkit(extras) {
    _reporterNs.report("Toolkit", "../../common/Toolkit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "../FunlandInfo", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      AnimationClip = _cc.AnimationClip;
      Color = _cc.Color;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UIOpacity = _cc.UIOpacity;
      v3 = _cc.v3;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Glass = _unresolved_2.default;
    }, function (_unresolved_3) {
      WaterColors = _unresolved_3.WaterColors;
    }, function (_unresolved_4) {
      Toolkit = _unresolved_4.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19a27h1RghJZLafkG4IVWov", "GlassPourOut", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Animation', 'AnimationClip', 'Color', 'math', 'Node', 'Sprite', 'tween', 'UIOpacity', 'v3', 'Vec3']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", GlassPourOut = (_dec = ccclass('GlassPourOut'), _dec2 = menu('cwg/GlassPourOut'), _dec3 = property(Animation), _dec4 = property(Node), _dec5 = property([Sprite]), _dec(_class = _dec2(_class = (_class2 = class GlassPourOut extends (_crd && Glass === void 0 ? (_reportPossibleCrUseOfGlass({
        error: Error()
      }), Glass) : Glass) {
        constructor(...args) {
          super(...args);

          /** Animation component reference */
          _initializerDefineProperty(this, "anim", _descriptor, this);

          /** Reflection on the front of the glass */
          _initializerDefineProperty(this, "frontNode", _descriptor2, this);

          _initializerDefineProperty(this, "flowingSprites", _descriptor3, this);

          /** Starting column index (0-based) */
          this.startColumnIndex = 0;
          this._eventCallbacks = {};

          /** Whether the pouring process is completed */
          this.isPourOutCompleted = false;
        }

        /**
         * Register event callback
         * @param event Event type: 'startPour' | 'completePour'
         * @param callback Callback function
         * @returns this
         */
        on(event, callback) {
          this._eventCallbacks[event] = callback;
          return this;
        }

        /** Cache of the glass's original position */
        init(info) {
          super.init(info);
          this.flowingSprites.forEach(sprite => {
            sprite.node.active = false;
          });
        }
        /**
         * Pickup and move the glass to the target position
         * @param from Starting world coordinates
         * @param to Target world coordinates
         */


        pickUpMoveTo(from, to) {
          this.oriPosition = from.clone();

          if (this.node.scale.x < 0) {
            this.oriPosition.x -= 17.244 * 2;
          }

          this.node.worldPosition = from;
          tween(this.node).to(0.666, {
            worldPosition: to
          }).start(); // Shadow flies away

          if (this.shadowNode) {
            this.shadowNode.position = v3(0, 0, 0); // [Fix] Use Vec3 and position property for tween to avoid type error

            const targetX = 380 * this.node.scale.x;
            const targetPos = new Vec3(targetX, 22, this.shadowNode.position.z);
            tween(this.shadowNode).to(0.3, {
              position: targetPos
            }).start();
            const uiOpacity = this.shadowNode.getComponent(UIOpacity);

            if (uiOpacity) {
              tween(uiOpacity).to(0.3, {
                opacity: 0
              }).start();
            }
          }

          this.frontNode.scale = this.node.scale;
        }
        /**
         * Put the glass back to its original position
         * @returns Promise that resolves when movement is complete
         */


        putDownBack() {
          const layerID = this.startColumnIndex + 1;
          const speed = [0, 6, 5, 4, 3][layerID];
          const tw = tween(this.node).to((0.666 + (5 - layerID) * 0.333) / speed, {
            worldPosition: this.oriPosition
          });
          return (_crd && Toolkit === void 0 ? (_reportPossibleCrUseOfToolkit({
            error: Error()
          }), Toolkit) : Toolkit).waitForTween(tw);
        }
        /**
         * Handle pour out complete event
         * @param currentLayerIdx Current liquid layer Index
         */


        pourOutFinish(currentLayerIdx) {
          if (this.isPourOutCompleted) {
            return;
          }

          if (currentLayerIdx == this.startColumnIndex) {
            var _this$_eventCallbacks, _this$_eventCallbacks2;

            // Hide the water that has been poured out
            for (let i = 3; i >= this.startColumnIndex; i--) {
              this.watersNode.children[i].active = false;
            }

            const animState = this.anim.getState(this.anim.defaultClip.name);
            const currentTime = animState.time; // Get current playback time

            this.anim.pause(); // Pause animation
            // Set reverse playback mode and time

            animState.wrapMode = AnimationClip.WrapMode.Reverse;
            animState.time = animState.duration - currentTime;
            animState.speed = [6, 5, 4, 3][currentLayerIdx]; // Reverse playback speed

            this.anim.resume(); // Start reverse playback
            // Pouring completed (trigger complete event)
            // At this time, it is still in the state of returning to upright

            this.isPourOutCompleted = true;
            (_this$_eventCallbacks = (_this$_eventCallbacks2 = this._eventCallbacks).completePour) == null || _this$_eventCallbacks.call(_this$_eventCallbacks2, currentLayerIdx, this.waters[currentLayerIdx]);
            this.recycle();
          } else {
            // Show the water surface of the layer below
            this.showNextLayerSurface(currentLayerIdx);
          }
        }
        /**
         * Show the water surface of the next layer
         * @param currentLayerIdx Current liquid layer Index (0-based)
         */


        showNextLayerSurface(index) {
          const nextIndex = index - 1;

          if (nextIndex >= 0) {
            const nextNode = this.watersNode.children[nextIndex];

            if (nextNode.active) {
              nextNode.children[0].active = true;
            }
          }
        }
        /**
         * Handle pour out start event
         * @param layerID ID of the liquid layer currently being operated on
         */


        pourOutStart(layerIdx) {
          if (this.isPourOutCompleted) {
            return;
          }

          if (layerIdx >= this.startColumnIndex && layerIdx < this.waters.length) {
            var _this$_eventCallbacks3, _this$_eventCallbacks4;

            const colorIdx = this.waters[layerIdx];
            (_this$_eventCallbacks3 = (_this$_eventCallbacks4 = this._eventCallbacks).startPour) == null || _this$_eventCallbacks3.call(_this$_eventCallbacks4, layerIdx, colorIdx);
            const color = new Color().fromHEX((_crd && WaterColors === void 0 ? (_reportPossibleCrUseOfWaterColors({
              error: Error()
            }), WaterColors) : WaterColors)[colorIdx].base);
            this.flowingSprites.forEach(sprite => {
              sprite.node.active = true;
              sprite.color = color;
            });
          }
        }
        /**
         * Reset animation state to initial values
         */


        resetAnim() {
          const animState = this.anim.getState(this.anim.defaultClip.name);
          animState.speed = 1; // Reset playback speed

          animState.time = 0; // Reset playback position

          animState.wrapMode = AnimationClip.WrapMode.Normal;
        }

        initAnimationParams(addWaters) {
          this.isPourOutCompleted = false;
          this.startColumnIndex = this.waters.length - addWaters.length;
        }
        /**
         * Play pour out animation
         * Returns a chainable object
         * @param addWaters Array of water colors to add
         * @returns Promise that resolves when animation is complete
         */


        play(addWaters) {
          this.resetAnim(); // Initialize animation parameters

          this.initAnimationParams(addWaters);
          this.showSurface();
          this.anim.play();
          return this;
        } // Clean up callbacks in recycle method


        recycle() {
          this._eventCallbacks = {};
          this.flowingSprites.forEach(sprite => {
            sprite.node.active = false;
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "anim", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frontNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flowingSprites", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fcf039c04f4136b436d8166e7e1474fa91d32a36.js.map