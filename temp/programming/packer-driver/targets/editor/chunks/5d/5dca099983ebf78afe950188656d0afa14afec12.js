System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, Tween, Pool, Glass, GlassPourOut, GlassFlowing, Toolkit, EfParticleSystem2D, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, menu, property, CwgPools;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPool(extras) {
    _reporterNs.report("Pool", "../common/Pool", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "./Glass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassPourOut(extras) {
    _reporterNs.report("GlassPourOut", "./glass-anims/GlassPourOut", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassFlowing(extras) {
    _reporterNs.report("GlassFlowing", "./glass-anims/GlassFlowing", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolkit(extras) {
    _reporterNs.report("Toolkit", "../common/Toolkit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "./FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEfParticleSystem2D(extras) {
    _reporterNs.report("EfParticleSystem2D", "./other-anims/EfParticleSystem2D", _context.meta, extras);
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
      Tween = _cc.Tween;
    }, function (_unresolved_2) {
      Pool = _unresolved_2.default;
    }, function (_unresolved_3) {
      Glass = _unresolved_3.default;
    }, function (_unresolved_4) {
      GlassPourOut = _unresolved_4.default;
    }, function (_unresolved_5) {
      GlassFlowing = _unresolved_5.default;
    }, function (_unresolved_6) {
      Toolkit = _unresolved_6.default;
    }, function (_unresolved_7) {
      EfParticleSystem2D = _unresolved_7.EfParticleSystem2D;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff07eOgmElCfqWe/NBXj93l", "CwgPools", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'Tween', 'Vec3']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("CwgPools", CwgPools = (_dec = ccclass('CwgPools'), _dec2 = menu('cwg/CwgPools'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec(_class = _dec2(_class = (_class2 = class CwgPools extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "glassNode", _descriptor, this);

          _initializerDefineProperty(this, "pourOutAnimNode", _descriptor2, this);

          _initializerDefineProperty(this, "flowingAnimNode", _descriptor3, this);

          _initializerDefineProperty(this, "efFullSealedNode", _descriptor4, this);
        }

        // 满瓶密封效果节点

        /**
         * @description 对象池初始化（Cocos Creator生命周期函数）
         */
        onLoad() {
          this.glassPool = (_crd && Pool === void 0 ? (_reportPossibleCrUseOfPool({
            error: Error()
          }), Pool) : Pool).create(this.glassNode);
          this.pourOutAnimPool = (_crd && Pool === void 0 ? (_reportPossibleCrUseOfPool({
            error: Error()
          }), Pool) : Pool).create(this.pourOutAnimNode);
          this.flowingAnimPool = (_crd && Pool === void 0 ? (_reportPossibleCrUseOfPool({
            error: Error()
          }), Pool) : Pool).create(this.flowingAnimNode);
          this.fullSealedAnimPool = (_crd && Pool === void 0 ? (_reportPossibleCrUseOfPool({
            error: Error()
          }), Pool) : Pool).create(this.efFullSealedNode);
        }
        /**
         * @description 从对象池获取玻璃杯实例
         * @returns 玻璃杯组件实例
         */


        getGlass() {
          const node = this.glassPool.get();
          return node.getComponent(_crd && Glass === void 0 ? (_reportPossibleCrUseOfGlass({
            error: Error()
          }), Glass) : Glass);
        }
        /**
         * @description 回收玻璃杯到对象池
         * @param glass 需要回收的玻璃杯组件
         */


        recycleGlass(glass) {
          var _glass$node;

          if (!(glass != null && (_glass$node = glass.node) != null && _glass$node.isValid)) return;
          Tween.stopAllByTarget(glass.node);
          this.glassPool.put(glass.node);
        }

        getPourOutAnim(glass, parentNode) {
          const node = this.pourOutAnimPool.get();
          node.parent = parentNode;
          node.worldPosition = glass.node.worldPosition.clone();
          const glassAnim = node.getComponent(_crd && GlassPourOut === void 0 ? (_reportPossibleCrUseOfGlassPourOut({
            error: Error()
          }), GlassPourOut) : GlassPourOut);
          glassAnim.init((_crd && Toolkit === void 0 ? (_reportPossibleCrUseOfToolkit({
            error: Error()
          }), Toolkit) : Toolkit).cloneObj(glass.info));
          return glassAnim;
        }

        recyclePourOutAnim(anim) {
          var _anim$node;

          if (!(anim != null && (_anim$node = anim.node) != null && _anim$node.isValid)) return;
          Tween.stopAllByTarget(anim.node);
          this.pourOutAnimPool.put(anim.node);
        }
        /**
         * @description 获取水流动画实例
         * @param sourceGlass 来源玻璃杯组件
         * @param parentNode 父级节点
         * @returns 初始化后的水流动画组件
         */


        getFlowingAnim(sourceGlass, parentNode) {
          const node = this.flowingAnimPool.get();
          node.parent = parentNode;
          node.worldPosition = sourceGlass.node.worldPosition.clone();
          node.setSiblingIndex(sourceGlass.node.getSiblingIndex());
          const glassAnim = node.getComponent(_crd && GlassFlowing === void 0 ? (_reportPossibleCrUseOfGlassFlowing({
            error: Error()
          }), GlassFlowing) : GlassFlowing);
          glassAnim.init((_crd && Toolkit === void 0 ? (_reportPossibleCrUseOfToolkit({
            error: Error()
          }), Toolkit) : Toolkit).cloneObj(sourceGlass.info));
          return glassAnim;
        }

        recycleFlowingAnim(anim) {
          var _anim$node2;

          if (!(anim != null && (_anim$node2 = anim.node) != null && _anim$node2.isValid)) return;
          Tween.stopAllByTarget(anim.node);
          this.flowingAnimPool.put(anim.node);
        }

        getFullSealedEffect(pos, parentNode) {
          const node = this.fullSealedAnimPool.get();
          node.active = true;
          pos && node.setPosition(pos);
          parentNode && (node.parent = parentNode);
          const effect = node.getComponent(_crd && EfParticleSystem2D === void 0 ? (_reportPossibleCrUseOfEfParticleSystem2D({
            error: Error()
          }), EfParticleSystem2D) : EfParticleSystem2D);
          return effect;
        }

        recycleFullSealedEffect(node) {
          if (!(node != null && node.isValid)) return;
          this.fullSealedAnimPool.put(node);
        }

        onDestroy() {
          if (this.glassPool) {
            this.glassPool.destroy();
            this.glassPool = undefined;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "glassNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pourOutAnimNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "flowingAnimNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "efFullSealedNode", [_dec6], {
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
//# sourceMappingURL=5dca099983ebf78afe950188656d0afa14afec12.js.map