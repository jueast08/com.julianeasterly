<template>
  <section class="base-exp col-12">
    <div class="base-exp__vital-info__icon">
      <slot name="img"/>
    </div>
    <div class="base-exp__vital-info">
      <div class="base-exp__vital-info__text">
        <div class="base-exp__vital-info__text__title"><slot name="title"/></div>
        <div class="base-exp__vital-info__text__subtitle"><slot name="subtitle"/></div>
        <div class="base-exp__vital-info__text__subtitle-2"><slot name="subtitle-2"/></div>
        <div class="base-exp__vital-info__text__dates"><slot name="dates"/></div>
        <div class="base-exp__vital-info__text__location">
          <div><logo-icon/></div>
          <div><slot name="location"/></div>
        </div>
      </div>
    </div>
    <div class="base-exp__details">
      <slot name="details"/>
    </div>
  
  </section>
</template>

<script>
import LogoIcon from 'Icons/LogoIcon';

export default {
  name: 'BaseSection',
  components: {LogoIcon,},
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  
  .base-exp {
    display: flex;
    
    &__vital-info {
    
      &__icon {
        width: 50px;
        svg, img {
          width: 100%;
          fill: global.$primary-color;
          filter: grayscale(1);
        }
      }

      &__text {
        margin-left: 40px;
        &__title {
          margin: 10px 0;
          @include global.xp-title-font;
        }
        &__subtitle {
          margin: 10px 0;
          @include global.xp-subtitle-font($weight: 700);
        }
        &__subtitle-2 {
          margin: 10px 0;
          @include global.xp-subtitle-font;
        }
        &__dates {
          margin: 10px 0;
          @include global.xp-subtitle-font;
        }
        &__location {
          display: flex;
          @include global.xp-subtitle-font;
          svg {
            width: 16px;
            margin-right: 10px;
          }
        }
      }
    }

    &__details{
      display: none;
    }
  }
 
</style>
