<template>
  <base-section ref="about" id="about">
    <template #title v-if="content.title">{{ content.title }}</template>
    <div class="about" v-if="content.articles">
      <about-article
        v-for="(article, index) in content.articles"
        v-bind:key="index"
      >
        <template #title>{{ article.title }}</template>
        <template #subtitle>{{ article.subtitle }}</template>
        <template #content>
          <vue-markdown>{{ article.content }}</vue-markdown>
        </template>
      </about-article>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import AboutArticle from "./AboutArticle";
import VueMarkdown from "vue-markdown";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheAboutSection",
  data() {
    return {
      observerIterator: null,
    };
  },
  props: {
    content: {
      type: Object,
      required: true,
    },
  },
  components: {
    BaseSection,
    VueMarkdown,
    AboutArticle,
  },

  mounted() {
    InViewportObserver.observe(
      [
        this.$refs.section1,
        this.$refs.section2,
        this.$refs.section3,
        this.$refs.photo,
      ],
      InViewportObserver.addAnimationModifierOnEntry,
      this
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this);
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

#about {
  background-color: global.$background-gray;
  @include global.fixed-background-overlay;

  ::v-deep .section {
    &__title-box {
      display: flex;
      flex-direction: column-reverse;
      margin-bottom: 50px;
      color: global.$primary-color;

      &__title {
        color: global.$primary-black;

        &:before {
          color: global.$primary-black;
        }
      }
    }
  }
}
</style>
