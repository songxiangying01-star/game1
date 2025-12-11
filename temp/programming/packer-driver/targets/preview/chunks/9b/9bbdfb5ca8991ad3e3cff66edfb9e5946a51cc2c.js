System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, assetManager, ResLoader, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      assetManager = _cc.assetManager;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7eb3Wsi+VGkautwq1JwUDz", "ResLoader", undefined);
      /**
       * @Descripttion: 资源加载器 - 统一管理游戏资源加载
       * @version: 1.0
       * @Author: Lioesquieu
       * @Date: 2024-05-09
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-13
       */


      __checkObsolete__(['assetManager', 'JsonAsset']);

      _export("default", ResLoader = class ResLoader {
        static loadBundle(bundle) {
          return new Promise((resolve, reject) => {
            console.log("loadBundle", bundle);
            assetManager.loadBundle(bundle, (err, assets) => {
              resolve(true);
            });
          });
        }

        static loadJson(bundleName, paths) {
          return new Promise((resolve, reject) => {
            assetManager.loadBundle(bundleName, (err, bundle) => {
              if (err) {
                console.error(err);
                reject(err.message);
                return;
              }

              bundle.load(paths, (err, jsonAsset) => {
                if (err) {
                  console.error(err);
                  reject(err.message);
                  return;
                }

                resolve(jsonAsset.json);
              });
            });
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9bbdfb5ca8991ad3e3cff66edfb9e5946a51cc2c.js.map