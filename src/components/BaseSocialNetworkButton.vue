<template>
   <button @click="goToLink">
     <slot>
     </slot>
   </button>
</template>

<script>

export default {
  name: 'BaseSocialNetworkButton',
  props: {
      href: {
        type: String,
        required: true,
      }
  },
  methods: {
    goToLink() {
      window.location.href = this.href;
    }
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  button {
    width: 20px;
    height: 20px;
    margin: 5px 0;
    padding: 0;
    border: none;
    background: none;
    opacity: 0.6;
    cursor: pointer;

    svg, img {
        width: 100%;
    }
  }

  @include global.adapt-to-screen('l') {
    button {
      width: 24px;
      height: 24px;
      margin: 6px 0;
    }
  }

  @include global.adapt-to-screen('xl') {
    button {
      width: 24px;
      height: 24px;
      margin: 6px 0;
    }
  }

</style>
