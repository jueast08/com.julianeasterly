<template>
  <base-content-icon>
    <template v-slot:icon><slot name="icon"/></template>
    <template v-slot:title><slot name="title"/></template>
    <template v-slot:description><slot name="description"/></template>
  </base-content-icon>
</template>

<script>
import BaseContentIcon from 'Components/BaseContentIcon';

export default {
  name: 'HobbyContentIcon',
  components: {BaseContentIcon,}
}
</script>


<style lang="scss" scoped>
  @use 'global';

  ::v-deep .base-content-icon {
    
    &__icon {
      svg, img {
        fill: global.$primary-color;
      }
    }

    &__title {
      @include global.h4-font($weight: 300);
      color: global.$primary-black;
    }
    
    &__description {
      display: none;
    }
  }
</style>
