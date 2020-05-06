<template>
  <base-section id="hobbies" title="A Few of My Hobbies">
    <div class="hobbies">
      <hobby-content-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Coding and Design</template>
      </hobby-content-icon>
      <hobby-content-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Sports</template>
      </hobby-content-icon>
      <hobby-content-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Do-It-Yourself</template>
      </hobby-content-icon>
      <hobby-content-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Gardening</template>
      </hobby-content-icon>
      <hobby-content-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Cooking</template>
      </hobby-content-icon>
    </div>
  </base-section>

</template>

<script>
import BaseSection from 'Components/BaseSection';
import HobbyContentIcon from 'Components/HobbyContentIcon';
import LogoIcon from 'Icons/LogoIcon';

export default {
  name: 'TheHobbiesSection',
  components: {BaseSection, HobbyContentIcon, LogoIcon,},

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
      &__hobby{
        margin-top: 60px;
      }
    
    }
  }
</style>
