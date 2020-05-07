<template>
  <div :id="id" class="section col-12">
    <div class="section__subtitle col-10 col-s-10 col-m-10 col-l-8 col-xl-8">{{ subtitle }}</div>
    <div class="section__title-box col-12">
      <h2 class="section__title col-12 col-s-10 col-m-10 col-l-8 col-xl-8">{{ title }}</h2>
    </div>
    <div class="section__container col-12 col-s-10 col-m-10 col-l-8 col-xl-8">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseSection",
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: false,
      default: ""
    },
    subtitle: {
      type: String,
      required: false,
      default: ""
    }
  },
  mounted() {
    document
      .querySelector("#" + this.id + " .section__title")
      .setAttribute("data-content", this.title);
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.section {
  position: relative;
  //min-height: 100vh;
  padding: 100px 0 50px;
  @include global.border-box;

  &__subtitle {
    @include global.subtitle-font;
    @include global.border-box;
    text-align: center;
    padding: 0 25px;
    margin: 0 auto;
  }

  &__title-box {
    overflow: hidden;
  }

  &__title {
    position: relative;
    @include global.h2-font;
    text-align: center;
    z-index: 2;
    padding: 0 25px;
    margin: 0 auto;
    margin-bottom: 50px;
    @include global.border-box;

    &:before {
      content: attr(data-content);
      @include global.h2-font-shadow;
      position: absolute;
      //top: -50%;
      left: 50%;
      transform-origin: center center;
      transform: translate(-50%, -10%);
      z-index: 1;
      opacity: 0.1;
      text-overflow: clip;
      white-space: nowrap;
      min-width: 100%;
    }
  }

  &__container {
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
