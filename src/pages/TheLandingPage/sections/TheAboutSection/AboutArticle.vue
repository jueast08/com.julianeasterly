<template>
  <section class="about-article">
    <div class="about-article__titles">
      <div class="about-article__titles__subtitle">
        <slot name="subtitle" />
      </div>
      <h3 class="about-article__titles__title">
        <slot name="title" />
      </h3>
    </div>
    <div class="about-article__content">
      <slot name="content" />
    </div>
  </section>
</template>

<script>
import { InViewportObserver } from "Utility/IntersectObserverHelpers";
export default {
  name: "AboutArticle",
  mounted() {
    const selectors = "p, img, li, ul, ol, h1, h2,h3, h4, h5, h6";
    let elements = this.$el.querySelectorAll(selectors);
    const className = "about-article__content__elements";

    elements.forEach(el => {
      el.classList.add("about-article_elements");
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

<style lang="scss">
@use 'global';

.about-article__elements {
  @include global.fade-in-from-bottom-class-modifier;
}

.about-article {
  position: relative;
  margin-top: 50px;
  &__titles {
    &__subtitle {
      @include global.subtitle-font;
      color: global.$primary-black;
      text-align: center;
    }
    &__title {
      @include global.h3-font;
      color: global.$primary-color;
      text-align: center;
    }
    p {
      @include global.p-font;
      color: global.$primary-black;
      text-align: center;
    }
  }

  &__content {
    &__elements {
      @include global.fade-in-from-bottom-class-modifier;
    }
    img {
      max-width: 100%;
    }

    a {
      color: global.$primary-color;
      text-decoration: none;
    }
    p {
      @include global.p-font;
      color: global.$primary-black;
      text-align: center;
    }
  }
}
</style>
