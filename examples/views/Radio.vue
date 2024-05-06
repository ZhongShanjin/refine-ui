<template>
  <div>
    <r-radio-group v-model="group_sex">
      <r-radio label="男人"></r-radio>
      <r-radio label="女人"></r-radio>
      <r-radio label="人妖"></r-radio>
    </r-radio-group>
    <h1>{{ group_sex }}</h1>
    <r-radio label="单选" v-model="sex"></r-radio>
  </div>
</template>

<script>
export default {
  data() {
    return {
      group_sex: "",
      sex: false,
    };
  },
};
</script>

<style lang="scss" scoped></style>
