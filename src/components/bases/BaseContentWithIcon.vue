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
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "BaseContentWithIcon",
  data() {
    return {
      observerIterator: null
    };
  },
  mounted() {
    InViewportObserver.observe(
      [this.$el.childNodes, this.$el.childNodes[0].childNodes],
      InViewportObserver.addAnimationModifierOnEntry,
      this._uid
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this._uid);
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.base-content-with-icon {
  &__icon {
    $size: 45px;
    position: relative;
    left: 50%;
    transform: translateX(-50%);
    width: $size;
    height: $size;
    margin: 0 0 25px 0;
    font-size: $size;
    @include global.fade-in-class-modifier;

    svg,
    img {
      width: 100%;
    }
  }

  &__title {
    margin: 0 0 10px 0;
    text-align: center;
    @include global.h4-font;
    @include global.fade-in-and-expand-class-modifier;
  }

  &__description {
    text-align: center;
    @include global.p-font;
    @include global.fade-in-and-expand-class-modifier;
  }
}
</style>
