<template>
  <base-section
    id="about"
    title="Hi. I'm Julian."
    subtitle="Business Analyst - IT Consultant"
  >
    <div class="about">
      <section class="about__section">
        <!-- @TODO add something about my MBTI tests like "I'm a Protagonist !!! with a link and another to my personality file https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=1&cad=rja&uact=8&ved=2ahUKEwig9LXJ4q7pAhWrDmMBHcAqCggQFjAAegQIBRAB&url=https%3A%2F%2Fapp.assessfirst.com%2F_%2Fprofile%2Fhnnndvm0-julian-easterly&usg=AOvVaw3he2NfdS3npV7hKbdGTTFu" -->
        <div class="about__section__titles">
          <div class="about__section__titles__subtitle">
            Made in the
            <span class="bold-primary">U.S.A</span>
            &#8226; Living in
            <span class="bold-primary">Alsace, France</span>
          </div>
          <h3 class="about__section__titles__title">
            From Detroit to Strasbourg
          </h3>
          <p>
            I am an American citizen - born, raised, and, for the most part,
            educated in the U.S.A. I played (American) football at the Indiana
            State University where I completed a degree in English. My last
            semester of college, I studied abroad in Montpellier, France. My
            goal was to become fluent in French. I did not completely achieve
            this goal during my trip, but it inspired me to return to France and
            establish new and more ambitious goals for myself.
          </p>
          <p>
            I've lived in France since 2013 and I currently reside in
            <span class="bold-primary">Strasbourg, Alsace, France.</span>
          </p>
        </div>
      </section>
      <div class="about__photo col-12">
        <div class="about__photo__wrapper col-12"></div>
      </div>
      <div class="about__spacer"></div>
      <section class="about__section">
        <div class="about__section__titles">
          <div class="about__section__titles__subtitle">
            <span class="bold-primary">Books</span>
            and
            <span class="bold-primary">Computers</span>
          </div>
          <h3 class="about__section__titles__title">
            From Literature Student to Software Engineer
          </h3>
          <p>
            Despite a Literature degree, I decided to switch to Computer Science
            in France as a way to acquire new skills, discover new challenges,
            and rapidly improve my language skills. I've since obtained a
            Master's degree and have collaborated on various IT projects
            privately and with professionally. I have worked as a full-stack web
            developer, a DevOps engineer, and most recently, as an IT consultant
            and Business Analyst.
          </p>
        </div>
      </section>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import { IntersectObserverHelpersIterator } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheAboutSection",
  data() {
    return {
      observerIterator: null,
    };
  },
  components: {
    BaseSection,
  },
  methods: {},
  mounted() {
    let elements = document.querySelectorAll(
      ".about__section, .about__photo, #about .section__title"
    );
    this.observerIterator = new IntersectObserverHelpersIterator(
      elements,
      "--in-view",
      {},
      true,
      false,
      true
    );
  },
  beforeDestroy() {
    this.observerIterator.disconnectAll();
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

#about {
  background-color: global.$background-gray;

  ::v-deep .section__title-box {
    display: flex;
    flex-direction: column-reverse;
    margin-bottom: 50px;
    color: global.$primary-color;
  }

  ::v-deep .section__title {
    color: global.$primary-black;

    &:before {
      color: global.$primary-black;
    }
  }

  .about {
    &__section {
      @include global.fade-in-from-bottom-class-modifier;

      &__titles {
        &__subtitle {
          @include global.subtitle-font;
          color: global.$primary-black;
          text-align: center;
        }
        &__title {
          @include global.h3-font;
          color: global.$primary-black;
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
      height: 250px;
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
          /** @TODO Don't attach this background on tarting on small screens 's' (maybe base this choice on the picture chosen*/
          content: " ";
          display: block;
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          height: 100%;
          background-image: url("~Assets/portrait_about.jpg");
          background-repeat: no-repeat;
          background-attachment: fixed;
          background-size: cover;
          background-position: center;
        }
      }
    }
  }
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
      }
    }
  }
}
</style>
