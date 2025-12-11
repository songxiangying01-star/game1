System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Button, Sprite, director, VwFunland, EventMng, VwExchange, VwAddGlass, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, menu, property, VwUi;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfCwgStateInfo(extras) {
    _reporterNs.report("CwgStateInfo", "./CwgState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwFunland(extras) {
    _reporterNs.report("VwFunland", "./VwFunland", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../common/EventMng", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwExchange(extras) {
    _reporterNs.report("VwExchange", "./prop-anims/VwExchange", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwAddGlass(extras) {
    _reporterNs.report("VwAddGlass", "./prop-anims/VwAddGlass", _context.meta, extras);
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
      Label = _cc.Label;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      director = _cc.director;
    }, function (_unresolved_2) {
      VwFunland = _unresolved_2.VwFunland;
    }, function (_unresolved_3) {
      EventMng = _unresolved_3.default;
    }, function (_unresolved_4) {
      VwExchange = _unresolved_4.VwExchange;
    }, function (_unresolved_5) {
      VwAddGlass = _unresolved_5.VwAddGlass;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "109a6Ig7eZM2bzYZfOo6w8r", "VwUi", undefined);
      /**
       * @Descripttion:
       * @version: 1.1 (Added Scene Transition)
       * @Author: Lioesquieu
       */


      // 1. 增加了 director 导入
      __checkObsolete__(['_decorator', 'Component', 'Label', 'Button', 'Sprite', 'director']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwUi", VwUi = (_dec = ccclass('VwUi'), _dec2 = menu('cwg/VwUi'), _dec3 = property(Label), _dec4 = property(_crd && VwFunland === void 0 ? (_reportPossibleCrUseOfVwFunland({
        error: Error()
      }), VwFunland) : VwFunland), _dec5 = property(Button), _dec6 = property(_crd && VwExchange === void 0 ? (_reportPossibleCrUseOfVwExchange({
        error: Error()
      }), VwExchange) : VwExchange), _dec7 = property(_crd && VwAddGlass === void 0 ? (_reportPossibleCrUseOfVwAddGlass({
        error: Error()
      }), VwAddGlass) : VwAddGlass), _dec(_class = _dec2(_class = (_class2 = class VwUi extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "levelLabel", _descriptor, this);

          _initializerDefineProperty(this, "funlandView", _descriptor2, this);

          _initializerDefineProperty(this, "undoButton", _descriptor3, this);

          _initializerDefineProperty(this, "exchangeView", _descriptor4, this);

          _initializerDefineProperty(this, "addGlassView", _descriptor5, this);

          // 新增变量：记录当前关卡索引
          this._currLevelIndex = 0;
        }

        reset(info) {
          // 记录当前关卡
          this._currLevelIndex = info.level;
          this.levelLabel.string = "第" + (info.level + 1).toString() + "关"; // 监听倒水完成

          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).on('completePour', this.handleCompletePour, this); // 2. 新增：监听游戏胜利 (GameWin)

          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).on('GameWin', this.handleGameWin, this);

          if (this.exchangeView) {
            this.exchangeView.node.active = false;
          }
        }

        onDestroy() {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).offTarget(this);
        }

        handleCompletePour() {
          this.updateUndoDisplayState();
        } // 3. 新增：处理胜利逻辑


        handleGameWin() {
          // 判断：如果是第2关 (index >= 1)，跳转结尾页
          if (this._currLevelIndex >= 1) {
            console.log("全部通关，跳转到结尾页！");
            this.scheduleOnce(() => {
              director.loadScene("End");
            }, 1.0); // 延迟1秒跳转
          } else {
            // 否则，通知 VwPlay 进入下一关
            console.log("第1关通过，进入下一关");
            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).emit('NextLevel');
          }
        } // --- 下面是你原来的代码，完全没动 ---


        updateUndoDisplayState() {
          // 首先检查撤销按钮及其节点是否有效
          if (!this.undoButton || !this.undoButton.node || !this.undoButton.node.isValid) {
            return;
          } // 检查撤销栈是否存在且不为空


          var canUndo = this.funlandView.undoStack && this.funlandView.undoStack.length > 0;
          this.undoButton.interactable = canUndo;
          var sprite = this.undoButton.node.getComponent(Sprite);

          if (sprite) {
            sprite.grayscale = !canUndo;
          }
        }

        handleProp(_, propName) {
          if (propName === "exchange") {
            this.exchangeView.show();
          } else if (propName === "undo") {
            this.funlandView.handleUndo();
            this.updateUndoDisplayState();
          } else if (propName === "addEmptyGlass") {
            this.addGlassView.show();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "levelLabel", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "funlandView", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "undoButton", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "exchangeView", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "addGlassView", [_dec7], {
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
//# sourceMappingURL=530f0f342e5341a6fd0569417744a0c3c9525406.js.map