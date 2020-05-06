<template>
  <base-section id="about" title="Hi. I'm Julian.">
    <div class="about">
      <section class="about__section">
        <div class="about__section__titles">
          <div class="about__section__titles__subtitle">
            Made in the <span class="primary-font-color"><b>U.S.A </b></span>&#8226; Living in  <span class="primary-font-color"><b>Alsace, France</b></span>
            </div>
          <h3 class="about__section__titles__title">From Detroit to Strasbourg</h3>
          <p>
            As an American, I'm often asked "Why
            France?" Here's the short answer: I played
            football for Indiana State University and my
            team graciously paid for a study abroad
            program in Montpellier, France in 2012. I
            returned to the US, but it didn't last. In 2013, I
            took a teaching job in Normandy, France
            and six years I ended up in Strasbourg. If you
            need the long version, maybe we can
            discuss it more in a meetup! 
          </p>
        </div>
      </section>
      <div class="about__photo">
        <div class="about__photo__wrapper"></div>
      </div>
      <section class="about__section">
        <div class="about__section__titles">
          <div class="about__section__titles__subtitle">
            <span class="primary-font-color"><b>Books</b></span> and <span class="primary-font-color"><b>Computers</b></span>
          </div>
          <h3 class="about__section__titles__title">From Literature Student to Software Engineer</h3>
          <p>
            While I have a B.A. in Literature, I decided to
            switch to Computer Science after moving to
            France in order to challenge myself and
            learn learn new skills.
            Since embarking on this journey, I've worked
            with both small and large companies as a
            full-stack developer, a devops engineer and
            IT Buiness Analyst.
          </p>
        </div>
      </section>
    </div>
  </base-section>
</template>

<script>
import BaseSection from 'Components/BaseSection';


export default {
  name: 'TheAboutSection',
  components: {
    BaseSection,
  }
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  #about {
    background-color: global.$background-gray;

    ::v-deep .section__title {
      color: global.$primary-black;
      &:before {
        color: global.$primary-black;
      }
    }
    
    .about {
      &__section {
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
        &:nth-of-type(2) {
          margin-top: 250px;
        }
      }

      &__photo {
        position: absolute;
        left: 0;
        height: 200px;
        width: 100%;

        &__wrapper {
          position: relative;
          width: 100%;
          height: 100%;
  
          &:before {
            content: ' ';
            display: block;
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            opacity: 0.8;
            background-image: url('~Assets/portrait_bridge_saint-entienne.jpg');
            background-repeat: no-repeat;
            background-attachment: fixed;
            background-size: cover;
            background-position: center;
         } 
        }
      }
    }

  }
</style>
