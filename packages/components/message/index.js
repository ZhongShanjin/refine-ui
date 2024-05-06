import Message from "./index.vue"; //导入Message组件，这是你想要动态创建的Vue组件。
let instances = []; //定义instances数组，用于存储当前活动的消息实例。
let verticalTop = 16; //定义verticalTop变量，设定消息组件之间的垂直间距。
let index = 0; //定义index变量，用于生成唯一的id，以区分不同的消息实例。
export default {
  //默认导出对象，包含install方法，使其可以作为Vue插件使用。
  install(Vue) {
    //install方法，Vue调用此方法来安装插件。它接收Vue构造函数作为参数。
    function computedVerticalTop(position) {
      //定义computedVerticalTop函数，用于计算新消息应该出现的垂直位置。
      let filterInstances = instances.filter(
        //筛选出与新消息相同位置（position）的实例。
        (instance) => instance.position === position
      );
      //使用reduce方法累加筛选出的实例高度，计算新消息的verticalTop。
      //acc（累加器）：在每次迭代中累积的返回值.它的初始值是reduce方法第二个参数提供的verticalTop。
      //cul（当前元素）：当前正在处理的数组元素
      //offsetHeight是该元素的高度，包括垂直边框和滚动条（如果可见），但不包括外边距（margin）。
      return filterInstances.reduce((acc, cul) => {
        return cul.$el.offsetHeight + acc + verticalTop;
      }, verticalTop);
    }
    //定义updateVerticalTop函数，用于在消息关闭时更新其余消息的位置。
    function updateVerticalTop(instance) {
      let removeTop = instance.verticalTop;
      //保存被移除实例的verticalTop。
      let index = 0;
      //重新定义局部index变量，用于遍历instances数组。
      for (; index < instances.length; index++) {
        //查找并定位被移除实例在instances数组中的索引。
        if (instances[index].id === instance.id) {
          break;
        }
      }
      //index位置删除一个元素，这个操作会直接修改原数组。
      instances.splice(index, 1);
      //更新后面实例的verticalTop，使它们向上移动。
      for (; index < instances.length; index++) {
        if (instances[index].position === instance.position) {
          [instances[index].verticalTop, removeTop] = [
            removeTop,
            instances[index].verticalTop,
          ];
        }
      }
    }
    //定义generateInstance函数，用于根据提供的选项生成新的消息实例。
    function generateInstance(options) {
      //使用Vue.extend创建Message组件的构造函数。
      //创建了Ctor构造函数后，你可以通过new Ctor()来创建Message组件的实例
      const Ctor = Vue.extend(Message);
      //创建并挂载新实例到一个新的div元素上。
      let instance = new Ctor({
        propsData: options,
      }).$mount(document.createElement("div"));
      //为新实例计算verticalTop。
      instance.verticalTop = computedVerticalTop(instance.position);
      //为新实例分配唯一id。
      instance.id = "message-" + index++;
      //监听新实例的close事件，一旦触发，更新剩余实例的verticalTop。
      instance.$once("close", function () {
        updateVerticalTop(instance);
      });

      return instance;
    }
    //在Vue原型上定义$message方法，使其在Vue实例中可用。
    Vue.prototype.$message = function (options) {
      //生成新的消息实例。
      let instance = generateInstance(options);
      //将新实例添加到instances数组中，以管理它。
      instances.push(instance);
    };
  },
};
