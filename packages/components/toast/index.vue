<template>
  <div class="mask">
    <transition name="fade">
      <div class="r-toast" v-if="visible">
        <span class="r-toast-content">{{ message }}</span>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    };
  },
  props: {
    message: {
      type: String,
      default: "我是toast",
    },
    duration: {
      type: Number,
      default: 1500,
    },
  },
  mounted() {
    this.visible = true;
    document.body.appendChild(this.$el);
    this.startTimer();
  },
  methods: {
    startTimer() {
      let timer = setTimeout(() => {
        this.visible = false;
      }, this.duration);

      this.$once("hook:beforeDestroy", () => {
        clearTimeout(timer);
        timer = null;
      });
    },
    destroyElement() {
      this.$destroy();
    },
  },
  beforeDestroy() {
    this.$el.parentNode.removeChild(this.$el);
  },
  watch: {
    visible(newValue) {
      if (!newValue) {
        this.$el.addEventListener("transitionend", this.destroyElement, {
          once: true,
        });
        this.$emit("onClose");
        if (this.$el) {
          this.destroyElement();
        }
      }
    },
  },
};
</script>

<style scoped lang="scss">
@import "./style.scss";
</style>
