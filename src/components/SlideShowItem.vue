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
    display:  inline-block;
    min-width: 100%;
    width: 100%;
    max-height: 100%;
    height: 100%;
    padding: 0 10px;
    @include global.border-box;
  }
</style>
