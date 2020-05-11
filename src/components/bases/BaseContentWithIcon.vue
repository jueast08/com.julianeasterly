<template>
  <div class="base-content-with-icon">
    <div class="base-content-with-icon__icon">
      <slot name="icon" />
    </div>
    <div class="base-content-with-icon__title">
      <slot name="title" />
    </div>
    <div class="base-content-with-icon__description">
      <slot name="description" />
    </div>
  </div>
</template>

<script>
import { IntersectObserverHelpersIterator } from "Utility/IntersectObserverHelpers";

export default {
  name: "BaseContentWithIcon",
  data() {
    return {
      observerIterator: null
    };
  },
  mounted() {
    this.observerIterator = new IntersectObserverHelpersIterator(
      this.$el,
      "--in-view",
      {},
      true,
      false,
      true
    );
  },
  beforeDestroy() {
    this.observerIterator.disconectAll();
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.base-content-with-icon {
  @include global.fade-in-and-expand-class-modifier;
  &__icon {
    $size: 45px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: $size;
    height: $size;
    margin: 0 0 25px 0;
    font-size: $size;
    svg,
    img {
      width: 100%;
    }
  }

  &__title {
    margin: 0 0 10px 0;
    text-align: center;
    @include global.h4-font;
  }

  &__description {
    text-align: center;
    @include global.p-font;
  }
}
</style>
