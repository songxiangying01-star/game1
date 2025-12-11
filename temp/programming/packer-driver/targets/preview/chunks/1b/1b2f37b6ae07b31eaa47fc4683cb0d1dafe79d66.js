System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, profiler, director, VwEdFunland, CwgState, EdFunlandInfo, UiEdColumn, EdGlass, VwEdUi, VwPlay, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, menu, property, VwEdPlay;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfVwEdFunland(extras) {
    _reporterNs.report("VwEdFunland", "./VwEdFunland", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCwgState(extras) {
    _reporterNs.report("CwgState", "../core/CwgState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdFunlandInfo(extras) {
    _reporterNs.report("EdFunlandInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlassInfo(extras) {
    _reporterNs.report("EdGlassInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUiEdColumn(extras) {
    _reporterNs.report("UiEdColumn", "./UiEdColumn", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlass(extras) {
    _reporterNs.report("EdGlass", "./EdGlass", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlassInfo(extras) {
    _reporterNs.report("GlassInfo", "../core/FunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwEdUi(extras) {
    _reporterNs.report("VwEdUi", "./VwEdUi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwPlay(extras) {
    _reporterNs.report("VwPlay", "../core/VwPlay", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      profiler = _cc.profiler;
      director = _cc.director;
    }, function (_unresolved_2) {
      VwEdFunland = _unresolved_2.VwEdFunland;
    }, function (_unresolved_3) {
      CwgState = _unresolved_3.default;
    }, function (_unresolved_4) {
      EdFunlandInfo = _unresolved_4.default;
    }, function (_unresolved_5) {
      UiEdColumn = _unresolved_5.default;
    }, function (_unresolved_6) {
      EdGlass = _unresolved_6.default;
    }, function (_unresolved_7) {
      VwEdUi = _unresolved_7.default;
    }, function (_unresolved_8) {
      VwPlay = _unresolved_8.VwPlay;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a480cYJJHRD0Jg5q2wYRQEA", "VwEdPlay", undefined);
      /**
       * @Descripttion: 编辑模式下的游戏控制器 - 用于关卡编辑和测试
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime:2025-07-20
       * 
       * 功能说明：
       * - 管理编辑模式下的游戏状态
       * - 提供关卡重置、切换、导出功能
       * - 协调视图层和逻辑层的交互
       */


      __checkObsolete__(['_decorator', 'Component', 'Node', 'profiler', 'director']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);
      /**
       * 编辑模式游戏控制器
       * 负责管理编辑模式下的游戏流程，包括关卡测试、数据导出等
       */

      _export("VwEdPlay", VwEdPlay = (_dec = ccclass('VwEdPlay'), _dec2 = menu('cwg/VwEdPlay'), _dec3 = property({
        type: _crd && VwEdFunland === void 0 ? (_reportPossibleCrUseOfVwEdFunland({
          error: Error()
        }), VwEdFunland) : VwEdFunland,
        override: true
      }), _dec4 = property({
        type: _crd && VwEdUi === void 0 ? (_reportPossibleCrUseOfVwEdUi({
          error: Error()
        }), VwEdUi) : VwEdUi,
        override: true
      }), _dec5 = property(Node), _dec(_class = _dec2(_class = (_class2 = class VwEdPlay extends (_crd && VwPlay === void 0 ? (_reportPossibleCrUseOfVwPlay({
        error: Error()
      }), VwPlay) : VwPlay) {
        constructor() {
          super(...arguments);

          /** 编辑模式的游乐场视图控制器 */
          _initializerDefineProperty(this, "vwFunland", _descriptor, this);

          /** 编辑模式的UI控制器 */
          _initializerDefineProperty(this, "ui", _descriptor2, this);

          /** 关卡列节点容器 - 包含所有关卡列的父节点 */
          _initializerDefineProperty(this, "columnsNode", _descriptor3, this);
        }

        /** 游乐场数据管理器 - 管理当前编辑的关卡数据 */

        /**
         * 组件初始化
         * 隐藏性能统计，初始化游戏状态和关卡数据
         */
        start() {
          profiler.hideStats();
          this.gameState = new (_crd && CwgState === void 0 ? (_reportPossibleCrUseOfCwgState({
            error: Error()
          }), CwgState) : CwgState)();
          this.funland = new (_crd && EdFunlandInfo === void 0 ? (_reportPossibleCrUseOfEdFunlandInfo({
            error: Error()
          }), EdFunlandInfo) : EdFunlandInfo)();
          this.funland.init(this.gameState); // 开始

          this.restartLevel();
        }
        /**
         * 重新开始当前关卡
         * 重置游戏状态、关卡数据，并重新初始化视图
         */


        restartLevel() {
          var _this = this;

          return _asyncToGenerator(function* () {
            // 重置游戏状态
            _this.gameState.reset(); // 重置关卡数据


            yield _this.funland.reset();

            _this.vwFunland.reset(_this.funland);

            _this.ui.reset(_this.gameState.info, _this.funland); // 开始游戏


            _this.vwFunland.playStart();
          })();
        }
        /**
         * 导出当前编辑的关卡数据
         * 收集所有激活的关卡列和杯子数据，保存为关卡配置
         */


        exportLevelData() {
          var glassInfos = []; // 遍历所有关卡列节点

          this.columnsNode.children.forEach(node => {
            // 跳过未激活的节点
            if (!node.active) {
              return;
            }

            var columnController = node.getComponent(_crd && UiEdColumn === void 0 ? (_reportPossibleCrUseOfUiEdColumn({
              error: Error()
            }), UiEdColumn) : UiEdColumn); // 收集该列中的所有杯子数据

            columnController.glassesNode.children.forEach(glassNode => {
              var glassController = glassNode.getComponent(_crd && EdGlass === void 0 ? (_reportPossibleCrUseOfEdGlass({
                error: Error()
              }), EdGlass) : EdGlass);
              var glassData = glassController.info; // 记录杯子的位置信息

              glassData.position = {
                x: node.x,
                y: glassNode.y
              };
              glassInfos.push(glassData);
            });
          }); // 对stageInfos进行排序，按y从大到小排，x从小到大排序

          glassInfos.sort((a, b) => {
            if (a.position.y != b.position.y) {
              return b.position.y - a.position.y;
            }

            return a.position.x - b.position.x;
          }); // 保存关卡数据到文件

          this.ui.saveLevelData(glassInfos);
        }

        openGame() {
          director.loadScene('game');
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "vwFunland", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "ui", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "columnsNode", [_dec5], {
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
//# sourceMappingURL=1b2f37b6ae07b31eaa47fc4683cb0d1dafe79d66.js.map