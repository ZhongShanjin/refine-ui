// 导入Button组件
import Button from "./index.vue";

// 为Button组件添加install方法，用于在Vue中安装Button组件
Button.install = function (Vue) {
  // 注册Button组件到Vue全局，使其可以在其他Vue组件中通过标签形式使用
  Vue.component(Button.name, Button);
};

// 导出Button组件，以便在Vue应用中引入并使用
export default Button;
