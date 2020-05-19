<template>
  <base-section ref="about" id="about" title="Hi. I'm Julian.">
    <div class="about">
      <section ref="section1" class="about__section">
        <div class="about__section__titles">
          <div class="about__section__titles__subtitle">To France from the USA</div>
          <h3 class="about__section__titles__title">Becoming a Citizen of the World</h3>
          <p>
            I am an American citizen, raised in Detroit, Michigan. In college, I
            studied abroad in Montpellier, France &mdash; trying to become
            fluent in French in under 6 months. Though I did not succeed, I was
            inspired to return to France and establish new and more ambitious
            goals for myself.
          </p>
          <p>
            I've lived in France since 2013. As a citizen of the world, I reside
            in
            <span
              class="bold-primary"
            >Strasbourg, Alsace, France.</span>
          </p>
        </div>
      </section>
      <div ref="photo" class="about__photo col-12">
        <div class="about__photo__wrapper col-12"></div>
      </div>
      <div class="about__spacer"></div>
      <section ref="section2" class="about__section">
        <div class="about__section__titles">
          <h3
            class="about__section__titles__title"
          >I have English Literature and Computer Science Degrees.</h3>
          <p>
            I recieved an Bachelor's degree in English in 2012, but decided to
            go back to school when arriving in France. This switch was motivated,
            not only by a need for fresh opportunities, but also a need to
            challenge myself and learn the language. I've since earned a Master's
            in Computer Science and have collaborated on various personal and professional IT projects.
            I have worked as a full-stack web developer, a DevOps engineer, and most recently, as an IT consultant
            and Business Analyst.
          </p>
        </div>
      </section>
      <section ref="section3" class="about__section">
        <div class="about__section__titles">
          <div class="about__section__titles__subtitle">Personality Test Results</div>
          <p>
            I'm a
            <a
              href="https://www.16personalities.com/enfj-personality"
              target="__blank"
            >Protagonist (ENFJ)</a>
            according to my MTBI Results.
          </p>
          <p>
            Check out my personality and soft skills according to Assess First
            <a
              href="https://app.assessfirst.com/_/profile/hnnndvm0-julian-easterly"
              target="__blank"
            >here.</a>
          </p>
        </div>
      </section>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheAboutSection",
  data() {
    return {
      observerIterator: null
    };
  },
  components: {
    BaseSection
  },
  methods: {},

  mounted() {
    InViewportObserver.observe(
      [
        this.$refs.section1,
        this.$refs.section2,
        this.$refs.section3,
        this.$refs.photo
      ],
      InViewportObserver.addAnimationModifierOnEntry,
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

  .about {
    &__section {
      margin-top: 50px;
      @include global.fade-in-from-bottom-class-modifier;

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
    }

    &__spacer {
      height: 200px;
      width: 100%;
    }

    &__photo {
      position: absolute;
      left: 0;
      height: 200px;
      @include global.fade-in-from-bottom-class-modifier;

      &__wrapper {
        position: relative;
        height: 100%;

        &:before {
          content: " ";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: url("~Assets/portrait_about.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
        }
      }
    }
  }
}

a {
  color: global.$primary-color;
  text-decoration: none;
  transition: all 10s linear;
}

@include global.adapt-to-screen("s") {
  #about {
    .about {
      &__spacer {
        display: none;
      }

      &__photo {
        position: relative;
        margin-bottom: 50px;
        height: 400px;
      }
    }
  }
}
</style>
