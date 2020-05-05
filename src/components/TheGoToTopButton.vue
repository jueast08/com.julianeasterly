<template>
  <div id="go-to-top-button" 
      class="go-to-top-button" 
      @click="scrollToTop">
    <div class="go-to-top-button__arrow"></div>
  </div>
</template>

<script>
import isIntersectionObserverAvailable from 'Source/utility';

export default {
  name: 'TheGoToTopButton',
  methods: {
    scrollToTop() {
      let target = document.getElementById('home');
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'center',
      });
    }
  },
    mounted() {
    if (isIntersectionObserverAvailable()) {
      this.aboutObserver = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
          console.log('about enter');
          document.getElementById('go-to-top-button').classList.add('go-to-top-button--visible');
        }
      }, {threshold: 0.25});
  
      this.homeObserver = new IntersectionObserver(entries => {
        if(entries[0].isIntersecting){
          console.log('about leave');
          document.getElementById('go-to-top-button').classList.remove('go-to-top-button--visible');
        }
      }, {threshold: 1});

      this.aboutObserver.observe(document.querySelector('#about'));
      this.homeObserver.observe(document.querySelector('#home'));
    }
  },
  beforeDestroy() {
    if(this.scrollObserver) {
      this.scrollObserver.disconnect();
    } 
  },
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  .go-to-top-button {
    position: fixed;
    right: 30px;
    z-index: 100;
    bottom: -50px;
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
    // opacity: 0;

    &--visible {
      bottom: 30px;
    }

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
    .go-to-top-button {
      right: 84px;
    }
  }
 
</style>
