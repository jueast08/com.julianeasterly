<template>
    <div class="slider-item">
        <slot></slot>
    </div>
</template>

<script>
export default {
  name: 'SlideShow',
  methods: {
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  .slider-item {
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    padding: 0 10px;
    @include global.border-box;
  }

  // @include global.adapt-to-screen('m') {
  //   .slider-item {
  //     min-width: 50%;
  //     width: 50%;
  //   }
  // }

  // @include global.adapt-to-screen('l') {
  //   .slider-item {
  //     max-width: calc(100% / 3);
  //     width: calc(100% / 3);
  //   }
  // }
</style>
