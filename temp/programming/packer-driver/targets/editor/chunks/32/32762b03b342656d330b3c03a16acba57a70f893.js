System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, instantiate, NodePool, Pool, _crd;

  _export("default", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      instantiate = _cc.instantiate;
      NodePool = _cc.NodePool;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d827eGeTJZA3og8+7YvoHd5", "Pool", undefined);
      /**
       * @Descripttion:
       * @version: 1.0
       * @Author:
       * @Date: 2024-06-24
       * @LastEditors: Lioesquieu
       * @LastEditTime: 2024-08-06
       */


      __checkObsolete__(['instantiate', 'Node', 'NodePool', 'Prefab']);

      _export("default", Pool = class Pool {
        constructor() {
          this._prefab = null;
          this.pool = new NodePool();
        }

        static create(prefab, count = 0) {
          const pool = new Pool();
          pool.init(prefab, count);
          return pool;
        }

        destroy() {
          this.clear();
          this._prefab = null;
        }

        init(prefab, count = 0) {
          this._prefab = prefab;

          for (let i = 0; i < count; i++) {
            const node = instantiate(this._prefab);
            this.pool.put(node);
          }
        }

        clear() {
          this.pool.clear();
        }

        get() {
          let node = this.pool.get();

          if (!node) {
            node = instantiate(this._prefab);
          }

          node.active = true;
          return node;
        }

        put(node) {
          if (!node) {
            return;
          }

          node.active = false;
          node.parent = null;
          this.pool.put(node);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=32762b03b342656d330b3c03a16acba57a70f893.js.map