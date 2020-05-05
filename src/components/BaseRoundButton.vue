<template>
   <button @click="handleClick">
     <slot/>
   </button>
</template>

<script>

export default {
  name: 'BaseRoundButton',
  methods: {
    handleClick() {
      this.$emit('handle-click');
    }
  }
}
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
    cursor: pointer;
  }

</style>
