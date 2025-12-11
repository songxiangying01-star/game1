System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Color, Node, Sprite, tween, UITransform, Toolkit, SoundComp, Glass, WaterColors, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, GlassFlowing;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfToolkit(extras) {
    _reporterNs.report("Toolkit", "../../common/Toolkit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundComp(extras) {
    _reporterNs.report("SoundComp", "../SoundComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "../Glass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColor(extras) {
    _reporterNs.report("WaterColor", "../CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColors(extras) {
    _reporterNs.report("WaterColors", "../CwgConstant", _context.meta, extras);
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
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      tween = _cc.tween;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      Toolkit = _unresolved_2.default;
    }, function (_unresolved_3) {
      SoundComp = _unresolved_3.default;
    }, function (_unresolved_4) {
      Glass = _unresolved_4.default;
    }, function (_unresolved_5) {
      WaterColors = _unresolved_5.WaterColors;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2db6dKo3RpDE6Xxi4KCzOpw", "GlassFlowing", undefined);
      /**
       * @Descripttion:
       * 液体流动玻璃杯动画控制器
       * 处理液体注入和瓶盖动画的播放逻辑
       * @version: 1.2 (Safety Fixes & Speed Up)
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Color', 'Node', 'Sprite', 'tween', 'UITransform']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", GlassFlowing = (_dec = ccclass('GlassFlowing'), _dec2 = menu('cwg/GlassFlowing'), _dec3 = property(Node), _dec4 = property(_crd && SoundComp === void 0 ? (_reportPossibleCrUseOfSoundComp({
        error: Error()
      }), SoundComp) : SoundComp), _dec(_class = _dec2(_class = (_class2 = class GlassFlowing extends (_crd && Glass === void 0 ? (_reportPossibleCrUseOfGlass({
        error: Error()
      }), Glass) : Glass) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "flowingNode", _descriptor, this);

          _initializerDefineProperty(this, "soundComp", _descriptor2, this);
        }

        /**
         * 播放水位上升动画
         * @param index 水位索引（从0开始）
         */
        playWaterUpAnim(index) {
          var _this = this;

          return _asyncToGenerator(function* () {
            var waterNode = _this.watersNode.children[index]; // 【关键修复】增加安全检查：如果水节点不存在（例如索引越界），直接返回，避免报错

            if (!waterNode) {
              // console.warn("尝试访问不存在的水位节点，索引:", index);
              return;
            }

            var waterTransform = waterNode.getComponent(UITransform); // 【安全检查】确保组件存在

            if (!waterTransform) return;
            var height = waterTransform.height;
            waterTransform.height = 46; // 初始高度设为46像素
            // 水流根据水位高度变化

            var flowingTf = _this.flowingNode.getComponent(UITransform); // 速度加快：0.15s


            tween(flowingTf).by(0.15, {
              height: -_this.waterHeight
            }).start(); // 速度加快：0.15s

            return (_crd && Toolkit === void 0 ? (_reportPossibleCrUseOfToolkit({
              error: Error()
            }), Toolkit) : Toolkit).waitForTween(tween(waterTransform).to(0.15, {
              height
            }));
          })();
        }
        /**
         * 播放瓶盖盖合动画
         */


        playPutOnCapAnim() {
          var _this2 = this;

          return _asyncToGenerator(function* () {
            if (!_this2.capNode) return;
            _this2.capNode.active = true;
            _this2.capNode.y = 276; // 盖盖子速度：0.2s

            yield (_crd && Toolkit === void 0 ? (_reportPossibleCrUseOfToolkit({
              error: Error()
            }), Toolkit) : Toolkit).waitForTween(tween(_this2.capNode).to(0.2, {
              y: 216
            }));
          })();
        }
        /**
         * 主播放流程
         * @param color 需要添加的新水颜色
         */


        play(color) {
          var flowingSprite = this.flowingNode.getComponent(Sprite);
          if (flowingSprite) flowingSprite.color = new Color().fromHEX((_crd && WaterColors === void 0 ? (_reportPossibleCrUseOfWaterColors({
            error: Error()
          }), WaterColors) : WaterColors)[color].base);
          var startIdx = this.waters.length;
          var flowingTransform = this.flowingNode.getComponent(UITransform);
          if (flowingTransform) flowingTransform.height = 350 - 40 * startIdx; // 计算流动效果初始高度
          // 激活流动效果节点

          if (this.capNode) this.capNode.active = false;
          this.flowingNode.active = true; // 逐层添加新水并播放动画

          this.addIntoWater(color);
          this.playWaterUpAnim(startIdx);
        } // 添加水结束


        complete() {
          var _this3 = this;

          return _asyncToGenerator(function* () {
            // 关闭流动效果
            _this3.flowingNode.active = false;

            if (_this3.isSealed()) {
              yield _this3.playPutOnCapAnim();
            }
          })();
        }

        playWaterSound(id) {
          // 播发倒水声音
          if (this.soundComp) this.soundComp.playWater(id - 1);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "flowingNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "soundComp", [_dec4], {
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
//# sourceMappingURL=db8feaa7a2275191e025edf76e5b3c572e7bec5c.js.map