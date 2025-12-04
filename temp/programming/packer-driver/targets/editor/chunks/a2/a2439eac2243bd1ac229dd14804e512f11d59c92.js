System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, ToggleContainer, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, menu, property, VwEdGlassSetting;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfEdGlassInfo(extras) {
    _reporterNs.report("EdGlassInfo", "./EdFunlandInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEdGlass(extras) {
    _reporterNs.report("EdGlass", "./EdGlass", _context.meta, extras);
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
      ToggleContainer = _cc.ToggleContainer;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cfeb1oZnIJJCLfajM9zf7M+", "VwEdGlassSetting", undefined);
      /**
       * @Descripttion: 玻璃杯设置界面组件 - 用于编辑单个玻璃杯的颜色数量和隐藏数量
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-20
       * 
       * 该组件提供以下功能：
       * 1. 设置玻璃杯中的颜色数量（0-4种颜色）
       * 2. 设置玻璃杯的隐藏数量（0-4层隐藏）
       * 3. 切换为广告模式（特殊状态）
       * 4. 保存设置并关闭界面
       */


      __checkObsolete__(['_decorator', 'Component', 'ToggleContainer']);

      ({
        ccclass,
        menu,
        property
      } = _decorator);

      _export("default", VwEdGlassSetting = (_dec = ccclass('VwEdGlassSetting'), _dec2 = menu('cwg/VwEdGlassSetting'), _dec3 = property(ToggleContainer), _dec4 = property(ToggleContainer), _dec5 = property(ToggleContainer), _dec(_class = _dec2(_class = (_class2 = class VwEdGlassSetting extends Component {
        constructor(...args) {
          super(...args);

          /** 模式选择开关容器 - 用于切换普通模式和广告模式 */
          _initializerDefineProperty(this, "modeToggleContainer", _descriptor, this);

          /** 颜色数量选择开关容器 - 用于选择玻璃杯中的颜色数量（0-4） */
          _initializerDefineProperty(this, "colorCountToggleContainer", _descriptor2, this);

          /** 隐藏数量选择开关容器 - 用于选择玻璃杯的隐藏层数（0-4） */
          _initializerDefineProperty(this, "hideCountToggleContainer", _descriptor3, this);
        }

        /** 关闭回调函数 - 当设置完成并关闭界面时调用，传递更新后的关卡信息 */

        /** 当前正在编辑的玻璃杯实例 */

        /**
         * 初始化设置界面
         * @param glass - 需要编辑的玻璃杯实例
         * 
         * 根据玻璃杯的当前状态初始化界面控件：
         * - 如果是广告模式，选中第二个开关
         * - 如果是普通模式，选中第一个开关，并设置对应的颜色数量和隐藏数量
         */
        init(glass) {
          this.currentGlass = glass;

          if (this.currentGlass.info.ad) {
            // 广告模式 - 选中第二个开关（索引1）
            this.modeToggleContainer.toggleItems[1].isChecked = true;
          } else {
            // 普通模式 - 选中第一个开关（索引0）
            this.modeToggleContainer.toggleItems[0].isChecked = true; // 根据当前颜色数量设置对应的开关状态

            this.colorCountToggleContainer.toggleItems.forEach((item, index) => {
              item.isChecked = index <= this.currentGlass.info.colorCnt;
            }); // 根据当前隐藏数量设置对应的开关状态

            this.hideCountToggleContainer.toggleItems.forEach((item, index) => {
              item.isChecked = index <= this.currentGlass.info.hideCnt;
            });
          }
        }
        /**
         * 关闭设置界面并保存设置
         * 
         * 处理逻辑：
         * 1. 隐藏设置界面
         * 2. 获取当前选中的设置值
         * 3. 更新玻璃杯的关卡信息
         * 4. 触发关闭回调函数
         */


        choseClose() {
          // 隐藏设置界面
          this.node.active = false;
          const updatedInfo = this.currentGlass.info;

          if (this.modeToggleContainer.toggleItems[0].isChecked) {
            // 普通模式 - 获取用户选择的颜色数量和隐藏数量
            // 获取选中的颜色数量（最后一个选中的开关索引）
            this.colorCountToggleContainer.toggleItems.forEach((item, index) => {
              if (item.isChecked) {
                updatedInfo.colorCnt = index;
              }
            }); // 获取选中的隐藏数量（最后一个选中的开关索引）

            this.hideCountToggleContainer.toggleItems.forEach((item, index) => {
              if (item.isChecked) {
                updatedInfo.hideCnt = index;
              }
            });
          } else {
            // 广告模式 - 设置为广告状态
            updatedInfo.ad = true;
          } // 触发关闭回调，传递更新后的关卡信息


          this.onClose && this.onClose(updatedInfo);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "modeToggleContainer", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "colorCountToggleContainer", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "hideCountToggleContainer", [_dec5], {
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
//# sourceMappingURL=a2439eac2243bd1ac229dd14804e512f11d59c92.js.map