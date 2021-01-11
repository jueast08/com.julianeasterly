<template>
  <div class="other-exp">
    <slot name="content">{{ content }}</slot>
  </div>
</template>

<script>
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "OtherExperience",
  props: {
    content: {
      type: Object
    }
  },
  data() {
    return {
      observerIterator: null
    };
  },
  mounted() {
    const selectors = "p, img, li, ul, ol, h1, h2,h3, h4, h5, h6";
    let elements = this.$el.querySelectorAll(selectors);
    const className = "other-exp__elements";

    elements.forEach(el => {
      el.classList.add(className);
    });
    InViewportObserver.observe(
      elements,
      entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(className + "--in-view");
        } else {
          entry.target.classList.remove(className + "--in-view");
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

<style lang="scss" >
@use 'global';

.other-exp {
  &__elements {
    @include global.fade-in-from-bottom-class-modifier;
  }

  h3 {
    @include global.h3-font;
    color: global.$primary-color;
  }

  h4 {
    @include global.subtitle-font;
    color: global.$primary-white;
  }

  p {
    @include global.p-font;
    color: global.$primary-white;
  }

  a {
    color: global.$primary-color;
    text-decoration: underline;
  }
}

@include global.adapt-to-screen("s") {
  .other-exp {
    text-align: center;
  }
}
</style>
