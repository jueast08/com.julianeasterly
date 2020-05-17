<template>
  <div class="sn-bar">
    <div class="sn-bar__container">
      <social-network-button href="#contact">
        <font-awesome-icon :icon="['fas', 'envelope']" fixed-width />
      </social-network-button>
      <social-network-button href="https://www.linkedin.com/in/julianeasterly/">
        <font-awesome-icon :icon="['fab', 'linkedin']" fixed-width />
      </social-network-button>
      <social-network-button href="https://github.com/jueast08">
        <font-awesome-icon :icon="['fab', 'github']" fixed-width />
      </social-network-button>
      <social-network-button href="https://twitter.com/jueast08">
        <font-awesome-icon :icon="['fab', 'twitter']" fixed-width />
      </social-network-button>
    </div>
  </div>
</template>

<script>
import SocialNetworkButton from "Bases/BaseSocialNetworkButton";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheSocialNetworkBar",
  data() {
    return {
      exitObserver: null
    };
  },
  components: {
    SocialNetworkButton
  },
  mounted() {
    InViewportObserver.observe(
      document.querySelectorAll("#contact,#footer"),
      entry => {
        if (entry.isIntersecting) {
          this.$el.classList.remove("sn-bar--in-view");
        } else {
          this.$el.classList.add("sn-bar--in-view");
        }
      },
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.sn-bar {
  display: none;
}

@include global.adapt-to-screen("m") {
  .sn-bar {
    display: initial;
    position: fixed;
    z-index: 100;
    top: 50%;
    right: 30px;
    transform: translateY(-50%);

    @include global.fade-in-from-bottom-class-modifier;
    &__container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 50px;
      padding: 10px 0;

      border-radius: 3px;
      background: global.$primary-white;
      -webkit-box-shadow: -10px 0px 20px 2px rgba(0, 0, 0, 0.2);
      -moz-box-shadow: -10px 0px 20px 2px rgba(0, 0, 0, 0.2);
      box-shadow: -10px 0px 20px 2px rgba(0, 0, 0, 0.2);

      ::v-deep button {
        font-size: 25px;
        color: rgba(global.$primary-black, 0.6);
        transition: color 0.25s ease-in-out;

        &:hover {
          color: rgba(global.$primary-color, 1);
        }
      }
    }
  }
}

@include global.adapt-to-screen("l") {
  .sn-bar {
    right: 84px;
  }
}
</style>
