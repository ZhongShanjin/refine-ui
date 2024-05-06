// 从当前目录下的index.vue文件中导入Icon组件
import Icon from "./index.vue";

// 为Icon组件添加一个install方法，这使得Icon可以作为插件被Vue全局安装
Icon.install = function (Vue) {
  // 将Icon组件注册为全局组件，组件名为Icon.name
  Vue.component(Icon.name, Icon);
};

// 导出Icon组件，使其可以在其他文件中通过import语句引用
export default Icon;
