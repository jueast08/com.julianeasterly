<template>
  <base-section id="hobbies" title="A Few of My Hobbies">
    <div class="hobbies">
      <hobby-content-with-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Coding and Design</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Sports</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Do-It-Yourself</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Gardening</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
          <template v-slot:icon><logo-icon/></template>
          <template v-slot:title>Cooking</template>
      </hobby-content-with-icon>
    </div>
  </base-section>

</template>

<script>
import BaseSection from 'Components/BaseSection';
import HobbyContentWithIcon from 'Components/HobbyContentWithIcon';
import LogoIcon from 'Icons/LogoIcon';

export default {
  name: 'TheHobbiesSection',
  components: {BaseSection, HobbyContentWithIcon, LogoIcon,},

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
