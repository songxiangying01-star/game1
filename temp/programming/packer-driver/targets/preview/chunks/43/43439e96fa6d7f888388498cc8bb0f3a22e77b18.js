System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, Node, UiEdColumnCount, VwUi, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, menu, property, VwEdUi;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUiEdColumnCount(extras) {
    _reporterNs.report("UiEdColumnCount", "./UiEdColumnCount", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdFunlandInfo(extras) {
    _reporterNs.report("EdFunlandInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlassInfo(extras) {
    _reporterNs.report("EdGlassInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVwUi(extras) {
    _reporterNs.report("VwUi", "../core/VwUi", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCwgStateInfo(extras) {
    _reporterNs.report("CwgStateInfo", "../core/CwgState", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      UiEdColumnCount = _unresolved_2.default;
    }, function (_unresolved_3) {
      VwUi = _unresolved_3.VwUi;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a5acdMKev9Gv7wyj3xLQI9O", "VwEdUi", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-08
       */


      __checkObsolete__(['_decorator', 'EditBox', 'Node']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", VwEdUi = (_dec = ccclass('VwEdUi'), _dec2 = menu('cwg/VwEdUi'), _dec3 = property(_crd && UiEdColumnCount === void 0 ? (_reportPossibleCrUseOfUiEdColumnCount({
        error: Error()
      }), UiEdColumnCount) : UiEdColumnCount), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(EditBox), _dec(_class = _dec2(_class = (_class2 = class VwEdUi extends (_crd && VwUi === void 0 ? (_reportPossibleCrUseOfVwUi({
        error: Error()
      }), VwUi) : VwUi) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "colCnt", _descriptor, this);

          _initializerDefineProperty(this, "columnCtrlsContent", _descriptor2, this);

          _initializerDefineProperty(this, "columnsContent", _descriptor3, this);

          _initializerDefineProperty(this, "levelDataEditBox", _descriptor4, this);
        }

        reset(info, funlandInfo) {
          super.reset(info);
          this.levelDataEditBox.string = JSON.stringify(funlandInfo == null ? void 0 : funlandInfo.curLevelData);
        }

        saveLevelData(infos) {
          var level_str = JSON.stringify({
            level: infos
          });
          console.log(level_str);
          this.levelDataEditBox.string = level_str;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "colCnt", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "columnCtrlsContent", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "columnsContent", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "levelDataEditBox", [_dec6], {
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
//# sourceMappingURL=43439e96fa6d7f888388498cc8bb0f3a22e77b18.js.map