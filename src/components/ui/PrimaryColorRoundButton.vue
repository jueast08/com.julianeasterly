<template>
  <base-round-button :class="disabled ? 'disabled': ''" :disabled="isMechanicallyDisabled">
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
    },
    allowClickOnDisabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  components: { BaseRoundButton },
  computed: {
    isMechanicallyDisabled() {
      if (this.disabled) {
        return this.allowClickOnDisabled ? false : true;
      }
      return false;
    }
  }
};
</script>


<style lang="scss" scoped>
@use 'global';

@mixin disabled {
  color: rgba(global.$primary-black, 0.5);
  border-color: rgba(global.$primary-black, 0.5);
}

.disabled {
  @include disabled;
}

button {
  color: global.$primary-color;
  border-color: global.$primary-color;
  transition: all 0.5s ease-in-out;
  &:disabled {
    @include disabled;
    cursor: initial;
  }
}
</style>
