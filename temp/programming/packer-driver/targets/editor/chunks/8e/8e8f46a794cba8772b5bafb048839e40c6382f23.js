System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, CwgPools, UiEdColumn, VwEdGlassSetting, EdGlass, UiEdColorCount, UiEdColumnCount, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, menu, property, VwEdFunland;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCwgPools(extras) {
    _reporterNs.report("CwgPools", "../core/CwgPools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUiEdColumn(extras) {
    _reporterNs.report("UiEdColumn", "./UiEdColumn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwEdGlassSetting(extras) {
    _reporterNs.report("VwEdGlassSetting", "./VwEdGlassSetting", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdFunlandInfo(extras) {
    _reporterNs.report("EdFunlandInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlassInfo(extras) {
    _reporterNs.report("EdGlassInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlass(extras) {
    _reporterNs.report("EdGlass", "./EdGlass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUiEdColorCount(extras) {
    _reporterNs.report("UiEdColorCount", "./UiEdColorCount", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUiEdColumnCount(extras) {
    _reporterNs.report("UiEdColumnCount", "./UiEdColumnCount", _context.meta, extras);
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
    }, function (_unresolved_2) {
      CwgPools = _unresolved_2.CwgPools;
    }, function (_unresolved_3) {
      UiEdColumn = _unresolved_3.default;
    }, function (_unresolved_4) {
      VwEdGlassSetting = _unresolved_4.default;
    }, function (_unresolved_5) {
      EdGlass = _unresolved_5.default;
    }, function (_unresolved_6) {
      UiEdColorCount = _unresolved_6.default;
    }, function (_unresolved_7) {
      UiEdColumnCount = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "57383d02AdP3KXsTybReLnk", "VwEdFunland", undefined);
      /**
       * @Descripttion:游乐场编辑器视图
       * @classdesc 负责游乐场布局编辑的视图组件
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'Vec2']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwEdFunland", VwEdFunland = (_dec = ccclass('VwEdFunland'), _dec2 = menu('cwg/VwEdFunland'), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(_crd && CwgPools === void 0 ? (_reportPossibleCrUseOfCwgPools({
        error: Error()
      }), CwgPools) : CwgPools), _dec6 = property(_crd && VwEdGlassSetting === void 0 ? (_reportPossibleCrUseOfVwEdGlassSetting({
        error: Error()
      }), VwEdGlassSetting) : VwEdGlassSetting), _dec7 = property(_crd && UiEdColumnCount === void 0 ? (_reportPossibleCrUseOfUiEdColumnCount({
        error: Error()
      }), UiEdColumnCount) : UiEdColumnCount), _dec8 = property(_crd && UiEdColorCount === void 0 ? (_reportPossibleCrUseOfUiEdColorCount({
        error: Error()
      }), UiEdColorCount) : UiEdColorCount), _dec(_class = _dec2(_class = (_class2 = class VwEdFunland extends Component {
        constructor(...args) {
          super(...args);

          /** 玻璃瓶容器节点 */
          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          /** 特效展示节点 */
          _initializerDefineProperty(this, "effectNode", _descriptor2, this);

          /** 对象池管理器 */
          _initializerDefineProperty(this, "pools", _descriptor3, this);

          /** 玻璃瓶配置菜单 */
          _initializerDefineProperty(this, "glassMenu", _descriptor4, this);

          /** 列数配置UI组件 */
          _initializerDefineProperty(this, "uiColumnCount", _descriptor5, this);

          /** 颜色数量配置UI组件 */
          _initializerDefineProperty(this, "uiColorCount", _descriptor6, this);
        }

        onLoad() {
          console.log("StVwFunland");
        }
        /**
         * 初始化游乐场布局
         * @param funland 游乐场配置数据
         */


        reset(funland) {
          this.funland = funland;
          this.uiColumnCount.reset(funland);
        } // 触摸事件处理


        registerTouchEvents() {
          this.contentNode.targetOff(this); // 注册触摸结束事件

          this.contentNode.on(Node.EventType.TOUCH_END, touch => {
            // 判断哪个瓶子被点击到了
            // 查找被点击的玻璃瓶
            const currentSelected = this.handleTouchEnd(touch.getUILocation());

            if (currentSelected) {
              this.showGlassConfigMenu(currentSelected);
            }
          }, this);
        }

        showGlassConfigMenu(glass) {
          console.log('showMenu');
          this.glassMenu.node.active = true;
          this.glassMenu.init(glass);

          this.glassMenu.onClose = info => {
            console.log('onClose', info);
            this.uiColorCount.updateColorConfiguration();
          };
        }
        /**
         * 处理触摸结束事件
         * @param location 触摸点的UI坐标
         * @returns 被选中的玻璃瓶实例
         */


        handleTouchEnd(location) {
          let selectedGlass; // 遍历所有列查找被点击的玻璃瓶

          this.contentNode.children.find((node, index) => {
            const column = node.getComponent(_crd && UiEdColumn === void 0 ? (_reportPossibleCrUseOfUiEdColumn({
              error: Error()
            }), UiEdColumn) : UiEdColumn); // 在列中查找具体玻璃瓶

            return column.glassesNode.children.find(node => {
              const glass = node.getComponent(_crd && EdGlass === void 0 ? (_reportPossibleCrUseOfEdGlass({
                error: Error()
              }), EdGlass) : EdGlass);

              if (glass.getTouchBoundingBoxToWorld().contains(location)) {
                selectedGlass = glass;
                return glass;
              }
            });
          });
          return selectedGlass;
        }

        pickupGlass(glass) {
          glass.pickup();
        }
        /** 开始游戏交互 */


        playStart() {
          this.registerTouchEvents();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pools", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "glassMenu", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "uiColumnCount", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "uiColorCount", [_dec8], {
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
//# sourceMappingURL=8e8f46a794cba8772b5bafb048839e40c6382f23.js.map