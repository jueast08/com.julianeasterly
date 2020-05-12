<template>
  <base-round-button @click="$emit('click', $event)">
    <!-- TODO make this button work -->
    <slot />
  </base-round-button>
</template>

<script>
import BaseRoundButton from "Bases/BaseRoundButton";

export default {
  name: "WhiteRoundButton",
  components: { BaseRoundButton }
};
</script>


<style lang="scss" scoped>
@use 'global';

button {
  color: global.$primary-white;
  border-color: global.$primary-white;
}
</style>
