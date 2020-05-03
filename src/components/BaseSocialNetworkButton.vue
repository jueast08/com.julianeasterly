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
      if(this.isInternalPageElementWithId) {
        this.scrollToElement(this.href)
      }
      else{
        window.location.href = this.href;
      }
    },
    scrollToElement() {
        let id = this.href.substring(1);
        let target = document.getElementById(id);
        if(target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'center',
          });
        }
        else {
          console.warn('There is no element with the id '+id);
        }  
    }
  },
  computed: {
    isInternalPageElementWithId() {
      return this.href.indexOf('#') === 0;
    }
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  button {
    // width: 20px;
    // height: 20px;
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
