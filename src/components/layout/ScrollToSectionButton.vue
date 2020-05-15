<template>
  <div class="scroll-to-section-button" @click="scrollToQuerySelector(querySelectorDestination)">
    <slot name="icon">
      <div class="scroll-to-section-button__arrow"></div>
    </slot>
  </div>
</template>

<script>
import { ScrollIntoViewObserver } from "Utility/IntersectObserverHelpers";
import { scrollToQuerySelector } from "Utility/ScrollHelper";

export default {
  name: "ScrollToSectionButton",
  props: {
    querySelectorThatTriggersShowButton: {
      type: String,
      required: false,
      validator(value) {
        return document.querySelector(value);
      }
    },
    showOnTriggerExit: {
      type: Boolean,
      default: true
    },
    hideOnTriggerEnter: {
      type: Boolean,
      default: true
    },
    querySelectorDestination: {
      type: String,
      required: false,
      default: "#app",
      validator(value) {
        return document.querySelector(value);
      }
    }
  },
  data() {
    return {
      scrollObserver: null
    };
  },
  computed: {
    target() {
      let target = document.querySelector(this.querySelectorDestination);
      target = typeof target === Array ? target[0] : target;

      return target;
    }
  },
  methods: {
    scrollToQuerySelector
  },
  mounted() {
    if (this.querySelectorThatTriggersShowButton) {
      try {
        this.scrollObserver = new ScrollIntoViewObserver(
          this.$el,
          //document.querySelector(".scroll-to-section-button"),
          "scroll-to-section-button--hidden"
        );

        this.scrollObserver.observe(
          document.querySelector(this.querySelectorThatTriggersShowButton),
          this.hideOnTriggerEnter,
          this.showOnTriggerExit
        );
      } catch (error) {
        console.error(error);
      }
    }
  },
  beforeDestroy() {
    if (this.scrollObserver) {
      this.scrollObserver.disconnect();
    }
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.scroll-to-section-button {
  position: fixed;
  right: 30px;
  z-index: 100;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  border-radius: 100%;
  background: global.$primary-white;
  -webkit-box-shadow: -10px 0px 20px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -10px 0px 20px 2px rgba(0, 0, 0, 0.1);
  box-shadow: -10px 0px 20px 2px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: (background ease-in-out 0.25s), (bottom ease-in-out 0.25s);
  bottom: 30px;

  &--hidden {
    bottom: -50px;
  }

  &__arrow {
    height: 10px;
    width: 10px;
    transform-origin: center;
    transform: translateY(20px) rotate(45deg);
    border-color: rgba(global.$primary-black, 0.6);
    border-style: solid;
    border-width: 3px 0 0 3px;
  }
}

@include global.adapt-to-screen("m") {
  .scroll-to-section-button {
    right: 84px;
    &:hover {
      background: global.$primary-color;
      bottom: 32px;
    }
    &:hover & {
      &__arrow {
        border-color: global.$primary-white;
      }
    }
  }
}
</style>
