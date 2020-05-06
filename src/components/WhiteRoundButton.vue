<template>
  <base-round-button><slot/></base-round-button>
</template>

<script>
import BaseRoundButton from 'Components/BaseRoundButton';

export default {
  name: 'WhiteRoundButton',
  components: {BaseRoundButton,}
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  button {
    color: global.$primary-white;
    border-color: global.$primary-white;
  }

</style>
