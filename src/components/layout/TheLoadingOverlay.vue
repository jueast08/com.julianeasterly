<template>
  <div class="loading-overlay"></div>
</template>

<script>
export default {
  name: "PrimaryColorRoundButton",
  mounted() {
    window.addEventListener("load", () => {
      this.$el.classList.add("loading-overlay--no-show");
    });
  }
};
</script>


<style lang="scss" scoped>
@use 'global';

.loading-overlay {
  background: black;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;

  &--no-show {
    display: none;
  }
}
</style>
