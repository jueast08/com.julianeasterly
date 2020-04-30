<template>
  <div class="go-to-top">
    <div class="go-to-top__arrow"></div>
  </div>
</template>

<script>

export default {
  name: 'TheGoToTopButton',
  //@TODO code the scroll up action
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  .go-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    z-index: 100;
    height: 50px;
    width: 50px;
    display: flex;
    justify-content: center;
    border-radius: 100%;
    background: global.$primary-white;
    -webkit-box-shadow: -10px 0px 20px 2px rgba(0,0,0,0.1);
    -moz-box-shadow: -10px 0px 20px 2px rgba(0,0,0,0.1);
    box-shadow: -10px 0px 20px 2px rgba(0,0,0,0.1);
    cursor: pointer;
    transition: (background ease-in-out 0.25s), (bottom ease-in-out 0.25s);

    &__arrow {
      height: 10px;
      width: 10px;
      transform-origin: center;
      transform: translateY(20px) rotate(45deg);
      border-color: rgba(global.$primary-black,0.6);
      border-style: solid;
      border-width: 3px 0 0 3px;
    }

    &:hover {
      background: global.$primary-color;
      bottom: 32px;
    }
    &:hover & {
      &__arrow {
        border-color: global.$primary-white;
      }
    }
  }

  @include global.adapt-to-screen('l') {
    .go-to-top {
      right: 84px;
    }
  }
 
</style>
