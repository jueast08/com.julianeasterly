<template>
  <div :id="id" 
    class="section col-12">
    <div class="section__subtitle">{{ subtitle }}</div>
    <h2 class="section__title">
      {{ title }}
    </h2>
    <div class="section__container">
      <slot/>
    </div>
  </div>
</template>

<script>


export default {
  name: 'BaseSection',
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: '',
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    }
  },
  mounted() {
    document.querySelector('#'+this.id+' .section__title').setAttribute('data-content', this.title);
  }
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  .section {
    position: relative;
    min-height: 100vh;
    padding: 100px 0 50px;
    @include global.border-box;
    
    &__subtitle {
      @include global.subtitle-font;
      text-align: center;
      padding: 0 25px; 
    }

    &__title {
      position: relative;
      @include global.h2-font;
      text-align: center;
      z-index: 2;
      padding: 0 25px; 

      &:before {
        content: attr(data-content);
        @include global.h2-font-shadow;
        position: absolute;
        top: -50%;
        left: 50%;
        transform: translateX(-50%);
        z-index: 1;
        opacity: 0.15;
        width: 100%;
        overflow: hidden;
        text-overflow: clip;
        white-space: nowrap;
      }
    }

    &__container {
      min-height: 100%;
      padding: 0 25px; 
    }
  }
 
</style>
