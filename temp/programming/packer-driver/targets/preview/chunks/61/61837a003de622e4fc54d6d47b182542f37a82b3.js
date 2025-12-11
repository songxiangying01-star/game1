System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, UITransform, v3, CwgPools, Glass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, menu, property, UiEdColumn;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCwgPools(extras) {
    _reporterNs.report("CwgPools", "../core/CwgPools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "../core/Glass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlass(extras) {
    _reporterNs.report("EdGlass", "./EdGlass", _context.meta, extras);
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
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      CwgPools = _unresolved_2.CwgPools;
    }, function (_unresolved_3) {
      Glass = _unresolved_3.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "fe1bdKHH+lKb5Uzx+1uUo5u", "UiEdColumn", undefined);
      /**
       * @Descripttion: 控制瓶子数量和移动瓶子位置
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-08
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'UITransform', 'v3']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", UiEdColumn = (_dec = ccclass('UiEdColumn'), _dec2 = menu('cwg/UiEdColumn'), _dec3 = property(UITransform), _dec4 = property(Node), _dec5 = property(_crd && CwgPools === void 0 ? (_reportPossibleCrUseOfCwgPools({
        error: Error()
      }), CwgPools) : CwgPools), _dec6 = property({
        tooltip: "垂直移动步长"
      }), _dec(_class = _dec2(_class = (_class2 = class UiEdColumn extends Component {
        constructor() {
          super(...arguments);

          /** UI变换组件，用于控制容器尺寸和位置 */
          _initializerDefineProperty(this, "uiTransform", _descriptor, this);

          /** 玻璃瓶容器节点，用于存放所有玻璃瓶实例 */
          _initializerDefineProperty(this, "glassesNode", _descriptor2, this);

          /** 对象池管理器，用于玻璃瓶的创建和回收 */
          _initializerDefineProperty(this, "glassPools", _descriptor3, this);

          /** 垂直移动步长（单位：像素） */
          _initializerDefineProperty(this, "verticalStep", _descriptor4, this);
        }

        /** 创建单个玻璃瓶并加入场景 */
        createGlass() {
          // 从对象池获取可编辑玻璃瓶实例
          var glass = this.glassPools.getGlass(); // 初始化玻璃瓶参数（位置、颜色等）

          glass.init({
            position: {
              x: 0,
              y: 0
            },
            colors: [],
            hideCnt: 0,
            ad: false,
            colorCnt: undefined
          }); // 设置玻璃瓶位置并激活

          var glassNode = glass.node;
          glassNode.position = v3(0, 0, 0);
          glassNode.parent = this.glassesNode;
          glassNode.active = true;
        }
        /** 下移所有玻璃瓶 */


        moveDown() {
          this.glassesNode.children.forEach(node => {
            node.y -= this.verticalStep;
          });
        }
        /** 上移所有玻璃瓶 */


        moveUp() {
          this.glassesNode.children.forEach(node => {
            node.y += this.verticalStep;
          });
        }
        /** 
         * 根据关卡配置重置玻璃瓶
         * @param stageConfigs 关卡配置数组，包含每个玻璃瓶的位置和状态
         */


        reset(stageConfigs) {
          // 调整玻璃瓶数量匹配关卡配置
          this.adjustGlassCount(stageConfigs.length); // 设置每个玻璃瓶的初始位置和状态

          for (var i = 0; i < stageConfigs.length; i++) {
            var info = stageConfigs[i];
            var node = this.glassesNode.children[i];
            node.y = info.position.y;
            var glass = node.getComponent(_crd && Glass === void 0 ? (_reportPossibleCrUseOfGlass({
              error: Error()
            }), Glass) : Glass);
            glass && glass.init(info);
          }
        }
        /**
         * 调整玻璃瓶数量
         * @param targetCount 目标数量
         */


        adjustGlassCount(targetCount) {
          // 补充缺少的玻璃瓶
          for (var i = this.glassesNode.children.length; i < targetCount; i++) {
            // 从对象池获取玻璃瓶实例
            this.createGlass();
          } // 回收多余的玻璃瓶


          for (var _i = this.glassesNode.children.length - 1; _i >= targetCount; _i--) {
            var node = this.glassesNode.children[_i];
            var glass = node.getComponent(_crd && Glass === void 0 ? (_reportPossibleCrUseOfGlass({
              error: Error()
            }), Glass) : Glass);
            glass && this.glassPools.recycleGlass(glass);
          } // 重新排列所有玻璃瓶位置


          if (targetCount > 0) {
            var height = this.glassesNode.children[0].getComponent(UITransform).height;
            var bottom_y = -targetCount * height / 2;
            this.glassesNode.children.forEach((node, index) => {
              node.y = bottom_y + index * (height + this.verticalStep);
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "uiTransform", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "glassesNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "glassPools", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "verticalStep", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return 20;
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=61837a003de622e4fc54d6d47b182542f37a82b3.js.map