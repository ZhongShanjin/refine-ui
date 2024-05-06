<template>
  <div class="r-form-container">
    <r-form ref="form" :model="formdata" :rules="rules" label-width="80px">
      <r-form-item label="活动名称" prop="name">
        <r-input
          placeholder="请输入活动名称"
          v-model="formdata.name"
          clearable
        ></r-input>
      </r-form-item>

      <r-form-item label="活动人数" prop="count">
        <r-inputnumber
          v-model="formdata.count"
          :min="1"
          :max="100"
        ></r-inputnumber>
      </r-form-item>
      <r-form-item label="活动性质" prop="type">
        <r-checkbox-group v-model="formdata.type">
          <r-checkbox label="美食餐厅线上活动"></r-checkbox>
          <r-checkbox label="地推活动"></r-checkbox>
          <r-checkbox label="线下主题活动"></r-checkbox>
        </r-checkbox-group>
      </r-form-item>
      <r-form-item label="特殊资源" prop="resource">
        <r-radio-group v-model="formdata.resource">
          <r-radio label="线上品牌商赞助"></r-radio>
          <r-radio label="线下场地免费"></r-radio>
        </r-radio-group>
      </r-form-item>
      <r-form-item label="活动形式" prop="desc">
        <r-input
          type="textarea"
          v-model="formdata.desc"
          placeholder="请输入活动形式"
        ></r-input>
      </r-form-item>

      <r-form-item>
        <r-button type="primary" @click="submit">立即创建</r-button>
        <r-button>取消</r-button>
      </r-form-item>
    </r-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formdata: {
        name: "",
        type: [],
        resource: "",
        desc: "",
        count: 1,
        pics: [],
      },
      rules: {
        name: [
          { required: true, message: "请输入活动名称"},
        ],
        desc: [
          { required: true, message: "请填写活动形式"},
        ],
        type: [
          {
            type: "array",
            required: true,
            message: "请至少选择一个活动性质",
          },
        ],
        resource: [
          {
            required: true,
            message: "请至少选择一个活动资源",
          },
        ],
      },
    };
  },
  methods: {
    submit() {
      // 表单校验
      this.$refs.form.validate((valid) => {
        if (valid) {
          alert("校验成功");
        } else {
          alert("校验失败");
        }
      });
    },
  },
};
</script>

<style scoped>
.r-form-container {
  width: 480px;
  margin: 20px;
}
</style>
