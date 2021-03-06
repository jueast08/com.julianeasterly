<template>
  <div :id="id" class="section col-12">
    <div ref="title-box" class="section__title-box col-s-12">
      <div
        ref="subtitle"
        class="section__title-box__subtitle col-10 col-s-10 col-m-10 col-l-8 col-xl-6"
      >
        <slot name="subtitle">{{ subtitle }}</slot>
      </div>
      <h2
        ref="title"
        class="section__title-box__title col-10 col-s-10 col-m-10 col-l-8 col-xl-6"
      >
        <slot name="title">{{ title }}</slot>
      </h2>
    </div>
    <div class="section__container col-12 col-s-10 col-m-10 col-l-8 col-xl-6">
      <slot />
    </div>
  </div>
</template>

<script>
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "BaseSection",
  data() {
    return {
      observerIterator: null,
    };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: "",
    },
    subtitle: {
      type: String,
      required: false,
      default: "",
    },
  },
  methods: {
    setTitleShadow() {
      const attr = this.title === "" ? this.$refs.title.innerHTML : this.title;
      this.$refs.title.setAttribute("data-content", attr);
    },
  },
  updated() {
    this.setTitleShadow();
  },
  mounted() {
    this.setTitleShadow();

    InViewportObserver.observe(
      this.$refs["title-box"],
      InViewportObserver.addAnimationModifierOnEntry,
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

.section {
  position: relative;
  padding: 100px 0 50px;
  @include global.border-box;

  &__title-box {
    position: relative;
    overflow: hidden;
    @include global.fade-in-class-modifier;

    &__subtitle {
      @include global.subtitle-font;
      @include global.border-box;
      text-align: center;
      padding: 0 25px;
      margin: 0 auto;
    }
    &__title {
      position: relative;
      @include global.h2-font;
      text-align: center;
      z-index: 2;
      padding: 0 25px;
      margin: 0 auto;
      margin-bottom: 50px;
      opacity: 1;
      @include global.border-box;

      &:before {
        content: attr(data-content);
        @include global.h2-font-shadow;
        position: absolute;
        left: 50%;
        transform-origin: center center;
        transform: translate(-50%, -10%);
        z-index: -1;
        opacity: 0.1;
        text-overflow: clip;
        white-space: nowrap;
        min-width: 100%;
      }
    }
  }

  &__container {
    position: relative;
    z-index: 2;
    min-height: 100%;
    padding: 0 25px;
    margin: 0 auto;
    @include global.border-box;
  }
}

@include global.adapt-to-screen("s") {
  .section {
    &__subtitle {
      padding: 0;
    }

    &__title {
      padding: 0;
    }

    &__container {
      padding: 0;
    }
  }
}
</style>
