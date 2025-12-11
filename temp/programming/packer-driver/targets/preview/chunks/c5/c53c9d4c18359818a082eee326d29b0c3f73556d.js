System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, v3, Prefab, VwFunland, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, menu, property, VwAddGlass;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVwFunland(extras) {
    _reporterNs.report("VwFunland", "../VwFunland", _context.meta, extras);
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
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      v3 = _cc.v3;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      VwFunland = _unresolved_2.VwFunland;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8cb189/syFMT589XtE8gJBU", "VwAddGlass", undefined);
      /**
       * @Descripttion:
       * 使用交换道具：先显示一层选择特效，提示用户选择一个瓶子。选择瓶子后，完成选中瓶子内水层的随机交换
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-08-07
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-08-07
       */


      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'EventTouch', 'Node', 'v3', 'Vec2', 'Prefab', 'UITransform']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwAddGlass", VwAddGlass = (_dec = ccclass('VwAddGlass'), _dec2 = menu('cwg/VwAddGlass'), _dec3 = property(Node), _dec4 = property(Prefab), _dec5 = property(_crd && VwFunland === void 0 ? (_reportPossibleCrUseOfVwFunland({
        error: Error()
      }), VwFunland) : VwFunland), _dec(_class = _dec2(_class = (_class2 = class VwAddGlass extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "dmNode", _descriptor2, this);

          _initializerDefineProperty(this, "funlandView", _descriptor3, this);
        }

        show() {
          // 把this.funland.glasses按列分组
          var glassMap = new Map();
          this.funlandView.funland.glasses.forEach(glass => {
            var column = glassMap.get(glass.position.x);

            if (!column) {
              column = [];
              glassMap.set(glass.position.x, column);
            }

            column.push(glass);
          });
          var addGlassInfo = undefined;

          for (var [key, columns] of glassMap) {
            if (columns.length >= 4) {
              continue;
            } // 如果这一列的上面可以放


            if (columns[0].position.y <= 40) {
              addGlassInfo = {
                position: {
                  x: columns[0].position.x,
                  y: columns[0].position.y + 260
                },
                colors: [],
                hideCnt: 0,
                ad: false
              };
              break;
            } // 如果这一列的下面可以放


            var lastGlass = columns[columns.length - 1];

            if (lastGlass.position.y >= -220) {
              addGlassInfo = {
                position: {
                  x: lastGlass.position.x,
                  y: lastGlass.position.y - 260
                },
                colors: [],
                hideCnt: 0,
                ad: false
              };
              break;
            }
          }

          if (!addGlassInfo) {
            this.hide();
            return;
          }

          this.node.worldPosition = this.funlandView.node.worldPosition;
          this.node.active = true;
          this.scheduleOnce(() => {
            var node = instantiate(this.dmNode);
            node.active = true;
            node.parent = this.contentNode;
            node.position = v3(addGlassInfo.position.x, addGlassInfo.position.y, 0);
            this.funlandView.addEmptyGlass(addGlassInfo);
          }, 0.3);
          this.scheduleOnce(() => {
            this.hide();
          }, 1);
        }

        hide() {
          this.contentNode.removeAllChildren();
          this.node.active = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "dmNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "funlandView", [_dec5], {
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
//# sourceMappingURL=c53c9d4c18359818a082eee326d29b0c3f73556d.js.map