import Vue from "vue";
import App from "./App.vue";
import router from "./router/router.js";

import "animate.css";
import "normalize.css";
//全局导入
import rui from "../packages/rui.js";
//按需导入
import Button from "UI/button";
import Icon from "UI/icon";
import Input from "UI/input";
import InputNumber from "UI/input-number";
import Radio from "UI/radio";
import RadioGroup from "UI/radio-group";
import CheckBox from "UI/checkbox";
import CheckBoxGroup from "UI/checkbox-group";
import Form from "UI/form";
import FormItem from "UI/form-item";
import Toast from "UI/toast";
import Modal from "UI/modal";
import MessageBox from "UI/message-box";
import Message from "UI/message";

Vue.use(Icon)
  .use(Button)
  .use(Input)
  .use(InputNumber)
  .use(Radio)
  .use(RadioGroup)
  .use(CheckBox)
  .use(CheckBoxGroup)
  .use(Form)
  .use(FormItem)
  .use(Toast)
  .use(Modal)
  .use(MessageBox)
  .use(Message);
Vue.use(rui);
new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
