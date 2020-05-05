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
    background: blue;
    display: flex;
    &__vital-info {
      &__icon {
        background: green;
        width: 30px;
        svg, img {
          width: 100%;
        }
      }

      &__text {
        background: red;
        &__title {
  
        }
        &__subtitle {
          
        }
        &__subtitle-2 {
          
        }
        &__dates {
          
        }
        &__location {
          display: flex;
          svg {
            width: 16px;
          }
        }
      }
    }

    &__details{

    }
  }
 
</style>
