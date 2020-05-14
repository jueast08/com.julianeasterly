<template>
  <base-round-button :disabled="disabled">
    <slot />
  </base-round-button>
</template>

<script>
import BaseRoundButton from "Bases/BaseRoundButton";

export default {
  name: "PrimaryColorRoundButton",
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: { BaseRoundButton }
};
</script>


<style lang="scss" scoped>
@use 'global';

button {
  color: global.$primary-color;
  border-color: global.$primary-color;
  transition: all 0.5s ease-in-out;
  &:disabled {
    color: rgba(global.$primary-black, 0.5);
    border-color: rgba(global.$primary-black, 0.5);
    cursor: initial;
  }
}
</style>
