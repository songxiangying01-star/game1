System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, WaterColor, WaterColors;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "137677xYOpFa4+KNdDykdAX", "CwgConstant", undefined);

      /**
       * @Descripttion:
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2025-07-20
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2025-07-22
       */
      _export("WaterColor", WaterColor = {
        None: 0,
        Red: 1,
        Orange: 2,
        Yellow: 3,
        Green: 4,
        Cya: 5,
        Blue: 6,
        Purple: 7,
        Silver: 8,
        Gold: 9,
        Gray: 10,
        Pink: 11,
        Black: 12,
        Count: 13
      });

      _export("WaterColors", WaterColors = {
        [WaterColor.None]: {
          base: '#00000000',
          surface: '#00000000'
        },
        [WaterColor.Red]: {
          base: '#FF0000',
          surface: '#FF6464'
        },
        [WaterColor.Orange]: {
          base: '#FF7F00',
          surface: '#FFAF5F'
        },
        [WaterColor.Yellow]: {
          base: '#EBEB00',
          surface: '#FFFF69'
        },
        [WaterColor.Green]: {
          base: '#00EE00',
          surface: '#00FF00'
        },
        [WaterColor.Cya]: {
          base: '#00E7E7',
          surface: '#00FFFF'
        },
        [WaterColor.Blue]: {
          base: '#0085FF',
          surface: '#359EFF'
        },
        [WaterColor.Purple]: {
          base: '#800080',
          surface: '#B900B9'
        },
        [WaterColor.Silver]: {
          base: '#C0C0C0',
          surface: '#E2E2E2'
        },
        [WaterColor.Gold]: {
          base: '#FFD700',
          surface: '#DFBC00'
        },
        [WaterColor.Gray]: {
          base: '#808080',
          surface: '#AAAAAA'
        },
        [WaterColor.Pink]: {
          base: '#FF7E94',
          surface: '#FFC0CB'
        },
        [WaterColor.Black]: {
          base: '#000000FF',
          surface: '#000000FF'
        },
        [WaterColor.Count]: {
          base: '#FFFFFFFF',
          surface: '#FFFFFFFF'
        }
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=484a4ac3eaca38830b60b3d3f9d11c75f81a27ff.js.map