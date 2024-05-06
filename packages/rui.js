import "animate.css";
import "./assets/style/common/reset.scss";
import Button from "./components/button";
import Icon from "./components/icon";
import Radio from "./components/radio";
import RadioGroup from "./components/radio-group";
import CheckBox from "./components/checkbox";
import CheckBoxGroup from "./components/checkbox-group";
import Input from "./components/input";
import InputNumber from "./components/input-number";
import Form from "./components/form";
import FormItem from "./components/form-item";
import Toast from "./components/toast";
import Message from "./components/message";
import Modal from "./components/modal";
import MessageBox from "./components/message-box";

// 定义组件列表
const componentsList = [
  Button,
  Icon,
  Radio,
  RadioGroup,
  CheckBox,
  CheckBoxGroup,
  Input,
  InputNumber,
  Form,
  FormItem,
  Toast,
  Message,
  Modal,
  MessageBox,
];

const install = function(Vue) {
  // 判断是否安装过
  if (install.installed) return;

  // 注册所有组件
  componentsList.map((component) => {
    Vue.use(component);
  });
};

export default {
  install,
  Button,
  Icon,
  Radio,
  RadioGroup,
  CheckBox,
  CheckBoxGroup,
  Input,
  InputNumber,
  Form,
  FormItem,
  Toast,
  Message,
  Modal,
  MessageBox,
};
