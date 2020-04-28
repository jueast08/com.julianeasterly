<template>
  <div class="burger"
      :class="this.open ? 'burger--open' :''" 
      @click="onClick()">
    <div v-for="index in [1,2,3]" :key="'burger-bar-'+index"></div>
  </div>
</template>

<script>

export default {
  name: 'BaseBurger',
  props: {
    open: {
      type: Boolean,
      required: true, 
    }
  },
  methods: {
    onClick(){
      this.$emit('onBurgerClick');
    }
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  .burger {  
    display: inline-block;
    width: 20px;
    cursor: pointer;

    div {
      height: 2px;
      width: 100%;
      margin: 6px 0;
      background: global.$primary-color;
      transform-origin: center;
      transition: all 0.5s ease-in;
    }

    &--open {
      div:nth-child(2){
        transform: translate(-25px);
        opacity: 0;
      }

      div:nth-child(1) {
        transform: translateY(8px) rotate(-45deg);
      }
      
      div:nth-child(3) {
        transform: translateY(-8px) rotate(45deg);
      }
    }
  }

</style>
