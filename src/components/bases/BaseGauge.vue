<template>
  <div class="base-gauge">
    <div class="base-gauge__title">{{ title }}</div>
    <div class="base-gauge__label-group" :style="masteryPercentageWidth">
      <span class="base-gauge__label-group__end">{{ goalLabel }}</span>
    </div>
    <div ref="container" class="base-gauge__container">
      <div ref="fluid" class="base-gauge__container__fluid" :style="masteryPercentageWidth"></div>
    </div>
  </div>
</template>

<script>
import { InViewportObserver } from "Utility/IntersectObserverHelpers";
export default {
  name: "BaseGauge",
  props: {
    percentage: {
      type: String,
      required: true,
      validator(value) {
        let possibleNumber = value;
        if (value.indexOf("%") === value.length - 1) {
          possibleNumber = possibleNumber.substring(
            0,
            possibleNumber.length - 1
          );
        }
        return (
          !isNaN(possibleNumber) && possibleNumber <= 100 && possibleNumber >= 0
        );
      }
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    goalLabel: {
      type: String,
      required: false,
      default: ""
    }
  },
  data() {
    return {
      observerIterator: null
    };
  },
  computed: {
    masteryPercentageWidth() {
      let width = this.percentage;
      if (width.indexOf("%")) {
        width += "%";
      }
      return { width: width };
    }
  },

  mounted() {
    InViewportObserver.observe(
      [this.$refs.container, this.$refs.fluid],
      InViewportObserver.addAnimationModifierOnEntry,
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.base-gauge {
  width: 100%;

  &__label-group {
    text-align: right;
    @include global.p-font($size-s: 11px);

    &__end {
      display: block;
      white-space: nowrap;
    }
  }

  &__container {
    height: 10px;
    width: 100%;
    border-radius: 7px;
    @include global.expand-from-left-class-modifier($transform-delay: 1s);

    &__fluid {
      height: 100%;
      border-radius: 7px;
      @include global.expand-from-left-class-modifier($transform-delay: 1.5s);
    }
  }
}
</style>
