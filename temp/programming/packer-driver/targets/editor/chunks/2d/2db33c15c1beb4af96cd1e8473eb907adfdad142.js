System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, director, VwFunland, VwUi, CwgState, FunlandInfo, EventMng, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, menu, property, VwPlay;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVwFunland(extras) {
    _reporterNs.report("VwFunland", "./VwFunland", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwUi(extras) {
    _reporterNs.report("VwUi", "./VwUi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCwgState(extras) {
    _reporterNs.report("CwgState", "./CwgState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunlandInfo(extras) {
    _reporterNs.report("FunlandInfo", "./FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMng(extras) {
    _reporterNs.report("EventMng", "../common/EventMng", _context.meta, extras);
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
      director = _cc.director;
    }, function (_unresolved_2) {
      VwFunland = _unresolved_2.VwFunland;
    }, function (_unresolved_3) {
      VwUi = _unresolved_3.VwUi;
    }, function (_unresolved_4) {
      CwgState = _unresolved_4.default;
    }, function (_unresolved_5) {
      FunlandInfo = _unresolved_5.default;
    }, function (_unresolved_6) {
      EventMng = _unresolved_6.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8feb5b2nY9ItZZAB5zEe4Rm", "VwPlay", undefined);
      /**
       * @Descripttion:
       * @version: 1.7 (Level Switch Lock)
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime:2025-07-20
       */


      __checkObsolete__(['_decorator', 'Component', 'director']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("VwPlay", VwPlay = (_dec = ccclass('VwPlay'), _dec2 = menu('cwg/VwPlay'), _dec3 = property(_crd && VwFunland === void 0 ? (_reportPossibleCrUseOfVwFunland({
        error: Error()
      }), VwFunland) : VwFunland), _dec4 = property(_crd && VwUi === void 0 ? (_reportPossibleCrUseOfVwUi({
        error: Error()
      }), VwUi) : VwUi), _dec(_class = _dec2(_class = (_class2 = class VwPlay extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "play", _descriptor, this);

          _initializerDefineProperty(this, "ui", _descriptor2, this);

          // 【新增】关卡切换锁，防止短时间内重复触发切换
          this.isSwitchingLevel = false;
        }

        start() {
          this.gameState = new (_crd && CwgState === void 0 ? (_reportPossibleCrUseOfCwgState({
            error: Error()
          }), CwgState) : CwgState)();
          this.funland = new (_crd && FunlandInfo === void 0 ? (_reportPossibleCrUseOfFunlandInfo({
            error: Error()
          }), FunlandInfo) : FunlandInfo)(); // 【安全检查】确保对象创建成功

          if (this.funland && this.gameState) {
            this.funland.init(this.gameState); // 在注册之前先移除，防止重复注册

            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).off('GameWin', this.handleGameWin, this); // 监听游戏通关事件

            (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
              error: Error()
            }), EventMng) : EventMng).on('GameWin', this.handleGameWin, this);
            this.restartLevel();
          } else {
            console.error("游戏初始化失败：funland 或 gameState 为空！");
          }
        }

        onDestroy() {
          (_crd && EventMng === void 0 ? (_reportPossibleCrUseOfEventMng({
            error: Error()
          }), EventMng) : EventMng).offTarget(this);
        } // 处理通关逻辑：自动进入下一关


        handleGameWin() {
          // 【关键修复】如果已经在切换关卡中，忽略后续的通关事件
          if (this.isSwitchingLevel) {
            console.log("正在切换关卡中，忽略重复的 GameWin 事件");
            return;
          }

          console.log("接收到通关事件，准备自动进入下一关"); // 【关键修复】立即上锁

          this.isSwitchingLevel = true; // 自动通关延时：2.3秒

          this.scheduleOnce(() => {
            // 自动调用切换下一关逻辑（参数 '1' 代表下一关）
            this.performSwitchLevel('1');
          }, 2.3);
        }
        /**
         * 重新开始当前关卡
         * 重置游戏状态、关卡数据，并重新初始化视图
         */


        async restartLevel() {
          // 【安全检查】防止对象为空导致报错
          if (!this.gameState || !this.funland || !this.play || !this.ui) {
            console.error("无法重启关卡：关键组件或数据丢失！"); // 如果失败了也要解锁，否则游戏就卡死了

            this.isSwitchingLevel = false;
            return;
          }

          console.log("开始加载新关卡..."); // 重置游戏状态

          this.gameState.reset(); // 重置关卡数据

          await this.funland.reset();
          this.play.reset(this.funland);
          this.ui.reset(this.gameState.info); // 开始游戏

          this.play.playStart(); // 【关键修复】新关卡加载完成，解锁，允许下一次切换

          this.isSwitchingLevel = false;
          console.log("新关卡加载完成，切换锁解除");
        }
        /**
         * 执行切换关卡的实际逻辑
         * @param direction 切换方向
         */


        performSwitchLevel(direction) {
          // 【安全检查】
          if (!this.funland) {
            this.isSwitchingLevel = false;
            return;
          }

          if (direction == '-1') {
            this.funland.preLevel();
          } else {
            this.funland.nextLevel();
          }

          this.restartLevel();
        }
        /**
         * 切换到上一个或下一个关卡
         * 这个方法通常绑定在 UI 按钮的 Click 事件上
         * @param _ - 事件对象（未使用）
         * @param direction - 切换方向，'-1'表示上一关，其他值表示下一关
         */


        switchLevel(_, direction) {
          // 【关键修复】手动点击也要检查锁，防止和自动跳转冲突
          if (this.isSwitchingLevel) {
            console.log("正在切换中，忽略手动点击");
            return;
          }

          console.log("点击了切换关卡按钮，准备跳转"); // 上锁

          this.isSwitchingLevel = true; // 手动点击按钮延时：1.0秒

          this.scheduleOnce(() => {
            this.performSwitchLevel(direction);
          }, 0.6);
        }

        openLevelEditor() {
          director.loadScene('editor');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "play", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ui", [_dec4], {
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
//# sourceMappingURL=2db33c15c1beb4af96cd1e8473eb907adfdad142.js.map