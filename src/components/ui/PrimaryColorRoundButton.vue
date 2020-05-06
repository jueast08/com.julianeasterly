<template>
  <base-round-button><slot/></base-round-button>
</template>

<script>
import BaseRoundButton from 'Bases/BaseRoundButton';

export default {
  name: 'PrimaryColorRoundButton',
  components: {BaseRoundButton,}
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  button {
    color: global.$primary-color;
    border-color: global.$primary-color;
  }

</style>
