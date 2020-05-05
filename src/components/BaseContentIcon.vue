<template>
   <div class="base-content-icon">
     <div class="base-content-icon__icon">
        <slot name="icon"/>
     </div>
     <div class="base-content-icon__title">
       <slot name="title"/>
     </div>
     <div class="base-content-icon__description">
        <slot name="description"/>
     </div>
   </div>
</template>

<script>

export default {
  name: 'BaseContentIcon',
}
</script>


<style lang="scss" scoped>
  @use 'global';

  .base-content-icon {
    
    &__icon {
      position: relative;
      left: 50%;
      transform: translateX(-50%);
      width:75px;
      height: 75px;
      margin: 0 0 25px 0;

      svg, img {
        width: 100%;
      }
    }

    &__title {
      //@include global.h3-font;
      text-align: center;
      margin: 0 0 10px 0;
    }

    &__description {
      //@include global.p-font;
      text-align: center;
    }
  }
</style>
