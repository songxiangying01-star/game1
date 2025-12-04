System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, v3, CwgPools, Toolkit, EventMng, VwEffect, SoundComp, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, menu, property, VwFunland;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCwgPools(extras) {
    _reporterNs.report("CwgPools", "./CwgPools", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlass(extras) {
    _reporterNs.report("Glass", "./Glass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWaterColor(extras) {
    _reporterNs.report("WaterColor", "./CwgConstant", _context.meta, extras);
  }

  function _reportPossibleCrUseOfToolkit(extras) {
    _reporterNs.report("Toolkit", "../common/Toolkit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunlandInfo(extras) {
    _reporterNs.report("FunlandInfo", "./FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "./FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../common/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwEffect(extras) {
    _reporterNs.report("VwEffect", "./VwEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSoundComp(extras) {
    _reporterNs.report("SoundComp", "./SoundComp", _context.meta, extras);
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
      v3 = _cc.v3;
    }, function (_unresolved_2) {
      CwgPools = _unresolved_2.CwgPools;
    }, function (_unresolved_3) {
      Toolkit = _unresolved_3.default;
    }, function (_unresolved_4) {
      EventMng = _unresolved_4.default;
    }, function (_unresolved_5) {
      VwEffect = _unresolved_5.VwEffect;
    }, function (_unresolved_6) {
      SoundComp = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0376bYXWolOxqvcWS84z2z8", "VwFunland", undefined);
      /**
       * @Descripttion:
       * @version: 1.4 (Fix interaction bug)
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */


      __checkObsolete__(['_decorator', 'Component', 'EventTouch', 'Node', 'v3', 'Vec2']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwFunland", VwFunland = (_dec = ccclass('VwFunland'), _dec2 = menu('cwg/VwFunland'), _dec3 = property(Node), _dec4 = property(_crd && VwEffect === void 0 ? (_reportPossibleCrUseOfVwEffect({
        error: Error()
      }), VwEffect) : VwEffect), _dec5 = property(_crd && CwgPools === void 0 ? (_reportPossibleCrUseOfCwgPools({
        error: Error()
      }), CwgPools) : CwgPools), _dec6 = property(Node), _dec7 = property(_crd && SoundComp === void 0 ? (_reportPossibleCrUseOfSoundComp({
        error: Error()
      }), SoundComp) : SoundComp), _dec(_class = _dec2(_class = (_class2 = class VwFunland extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentNode", _descriptor, this);

          _initializerDefineProperty(this, "effectView", _descriptor2, this);

          _initializerDefineProperty(this, "pools", _descriptor3, this);

          _initializerDefineProperty(this, "glassesNode", _descriptor4, this);

          _initializerDefineProperty(this, "soundComp", _descriptor5, this);

          this.glasses = [];
          this.undoStack = undefined;
          this.finished = false;
        }

        onLoad() {
          console.log("StVwFunland");
        } // 初始化游乐场布局


        reset(funland) {
          this.funland = funland;
          this.glassesNode.removeAllChildren();
          this.glasses = []; // 根据配置生成玻璃瓶阵列

          for (var i = 0, len = funland.glasses.length; i < len; i++) {
            var glassInfo = funland.glasses[i];
            var glass = this.createGlass(glassInfo);
            this.glasses.push(glass);
          } // 让水面显示出来


          this.scheduleOnce(() => {
            this.glasses.forEach(glass => {
              glass.resetSurface();
            });
          }, 0.0);
        }

        createGlass(glassInfo) {
          // 从对象池获取玻璃瓶实例
          var glass = this.pools.getGlass();
          glass.init((_crd && Toolkit === void 0 ? (_reportPossibleCrUseOfToolkit({
            error: Error()
          }), Toolkit) : Toolkit).cloneObj(glassInfo)); // 设置玻璃瓶位置并激活

          var glassNode = glass.node; // y轴偏移 +100

          glassNode.position = v3(glassInfo.position.x, glassInfo.position.y + 100, 0);
          glassNode.parent = this.glassesNode;
          glassNode.active = true;
          return glass;
        } // 开始游戏的方法


        playStart() {
          this.setTouchListener();
          this.finished = false;
        } // 触摸事件处理


        setTouchListener() {
          this.contentNode.targetOff(this);
          var lastSelectedGlass = undefined; // 注册触摸结束事件

          this.contentNode.on(Node.EventType.TOUCH_END, touch => {
            var _lastSelectedGlass;

            if (this.finished) {
              return;
            } // 判断哪个瓶子被点击到了


            var currentSelected = this.handleTouchEnd(touch.getUILocation()); // 有效性检查

            if (!this.isValidSelection(currentSelected)) {
              return;
            } // 处理重复点击同一玻璃瓶


            if (lastSelectedGlass && currentSelected == lastSelectedGlass) {
              lastSelectedGlass.putDown();
              lastSelectedGlass = undefined;
              return;
            } // 倒水逻辑处理


            if (lastSelectedGlass && !lastSelectedGlass.isEmpty && !currentSelected.isFull) {
              if (this.handleWaterTransfer(lastSelectedGlass, currentSelected)) {
                lastSelectedGlass = undefined;
                return;
              }
            } // 更新选中状态


            (_lastSelectedGlass = lastSelectedGlass) == null || _lastSelectedGlass.putDown();
            this.pickup(currentSelected);
            lastSelectedGlass = currentSelected;
          }, this);
        }

        handleTouchEnd(location) {
          return this.glasses.find((glass, index) => {
            var box = glass.getTouchBoundingBoxToWorld();
            return box && box.contains(location);
          });
        }

        isValidSelection(glass) {
          return (glass == null ? void 0 : glass.node.active) && !glass.isSealed();
        }

        handleWaterTransfer(source, target) {
          if (source.waterColorID === target.waterColorID || target.isEmpty) {
            this.playPourOutWater(source, target);
            return true;
          }

          return false;
        } // 判断是否通关


        checkWin() {
          return this.glasses.every(glass => glass.isEmpty || glass.isSealed());
        } // 播放倒水动画并处理状态更新


        playPourOutWater(lastSelected, currentSelected) {
          var _this = this;

          lastSelected.node.active = false;
          currentSelected.hide();
          var undoStack = [];
          undoStack.push([lastSelected, [...lastSelected.info.colors]]);
          undoStack.push([currentSelected, [...currentSelected.info.colors]]);
          this.undoStack = undefined;
          var pourAnim = this.pools.getPourOutAnim(lastSelected, this.effectView.node);
          var flowAnim = this.pools.getFlowingAnim(currentSelected, this.glassesNode);

          if (lastSelected.node.position.x > currentSelected.node.position.x) {
            pourAnim.node.scale = v3(-1, 1, 1);
          } else {
            pourAnim.node.scale = v3(1, 1, 1);
          }

          var transferredWaters = [];

          while (this.canTransferWater(lastSelected, currentSelected)) {
            var water = lastSelected.pourOutWater();
            currentSelected.addIntoWater(water);
            transferredWaters.push(water);
          }

          lastSelected.updateDisplayState();
          currentSelected.updateDisplayState();
          var worldPosition = flowAnim.flowingNode.worldPosition;
          var pickupFromPosition = lastSelected.node.worldPosition.clone().add3f(17, 220, 0);
          pourAnim.pickUpMoveTo(pickupFromPosition.clone().add3f(0, lastSelected.pickupHeight, 0), worldPosition);
          var started = false;
          pourAnim.play(transferredWaters).on('startPour', (layerIdx, color) => {
            flowAnim.play(color);

            if (!started) {
              started = true;
              flowAnim.playWaterSound(transferredWaters.length);
            }
          }).on('completePour', /*#__PURE__*/_asyncToGenerator(function* (layerIdx) {
            flowAnim.complete().then(() => {
              _this.pools.recycleFlowingAnim(flowAnim);

              currentSelected.show();

              if (currentSelected.isSealed()) {
                // 已注释掉特效
                // this.effectView.showFullSeled(currentSelected);
                _this.undoStack = undefined;
              } else {
                _this.undoStack = undoStack;
              }
            });
            pourAnim.putDownBack().then(() => {
              _this.pools.recyclePourOutAnim(pourAnim); // 确保原来的瓶子显示出来


              lastSelected.node.active = true; // 【修复点】取消了延时，立即执行放下动作。
              // Glass.ts 里的安全检查会防止报错，同时保证状态立即同步。

              lastSelected.putDown();

              _this.scheduleOnce(() => {
                if (lastSelected.isAllHide()) {
                  lastSelected.showHide();
                }

                (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                  error: Error()
                }), EventMng) : EventMng).emit('completePour');

                if (_this.checkWin()) {
                  console.log("游戏通关！");
                  _this.finished = true; // 延时缩短：0.1s

                  _this.scheduleOnce(() => {
                    (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
                      error: Error()
                    }), EventMng) : EventMng).emit('GameWin');
                  }, 0.1);
                }
              }, 0.1);
            });
          }));
        }

        canTransferWater(source, target) {
          return !target.isFull && !source.isAllHide() && (source.waterColorID === target.waterColorID || target.isEmpty);
        }

        pickup(glass) {
          this.soundComp.playPickup();
          glass.pickup();
        }

        handleRandExchangeColors(glass) {
          this.schedule(() => {
            glass.randExchangeColors();
          }, 0.17, 8);
        }

        handleUndo() {
          if (!this.undoStack) {
            return;
          }

          this.undoStack.forEach(_ref2 => {
            var [glass, colors] = _ref2;
            glass.reset(colors);
          });
          this.undoStack = undefined;
        }

        addEmptyGlass(addGlassInfo) {
          console.log('addEmptyGlass');

          if (addGlassInfo) {
            this.funland.glasses.push(addGlassInfo);
            this.funland.glasses.sort((a, b) => {
              if (a.position.y != b.position.y) {
                return b.position.y - a.position.y;
              }

              return a.position.x - b.position.x;
            });
            var glass = this.createGlass(addGlassInfo);
            this.glasses.push(glass);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "effectView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pools", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "glassesNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "soundComp", [_dec7], {
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
//# sourceMappingURL=9ff0248b9e97c05dd23a9fbe67466f34f126c380.js.map