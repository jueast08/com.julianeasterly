<template>
  <button @click="$emit('click', $event)">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseRoundButton"
};
</script>


<style lang="scss" scoped>
@use 'global';

button {
  min-height: 40px;
  min-width: 125px;
  border: none;
  background: none;
  border-radius: 20px;
  border-width: 2px;
  border-style: solid;
  @include global.link-font;
  text-transform: uppercase;
  cursor: pointer;
}
</style>
