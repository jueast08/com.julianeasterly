<template>
  <base-section id="hobbies" title="A Few of My Hobbies">
    <div class="hobbies">
      <base-content-icon class="hobbies__hobby">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Coding and Design</template>
      </base-content-icon>
      <base-content-icon class="hobbies__hobby">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Sports</template>
      </base-content-icon>
      <base-content-icon class="hobbies__hobby">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Do-It-Yourself</template>
      </base-content-icon>
      <base-content-icon class="hobbies__hobby">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Gardening</template>
      </base-content-icon>
      <base-content-icon class="hobbies__hobby">
          <template v-slot:icon><base-logo/></template>
          <template v-slot:title>Cooking</template>
      </base-content-icon>
    </div>
  </base-section>

</template>

<script>
import BaseSection from 'Components/BaseSection';
import BaseContentIcon from 'Components/BaseContentIcon';
import BaseLogo from 'Icons/BaseLogo';

export default {
  name: 'TheHobbiesSection',
  components: {BaseSection, BaseContentIcon, BaseLogo,},

}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  #hobbies {
    padding-top: 50px;
    background-color: global.$primary-white;
    ::v-deep .section__title {
      color: global.$primary-color;
      @include global.h4-font;
      text-transform: uppercase;
      &:before {
        content: '';
      }
    }

    .hobbies {
      margin-top: 40px;
      &__hobby{
        margin-top: 60px;
        ::v-deep .base-content-icon {
          &__icon {
            fill: global.$primary-color;
          }
          &__title {
            @include global.h4-font($weight: 300);
          }  
        }
      }
    
    }
  }
</style>
