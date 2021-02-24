import { initState } from "./init";
function Vue(options) {
  this._init(options);
}
// 初始化vue的实例
Vue.prototype._init = function (options) {
  var vm = this;
  vm.$options = options;

  initState(vm);
};
export default Vue;
