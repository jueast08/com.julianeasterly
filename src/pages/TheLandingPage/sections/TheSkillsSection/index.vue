<template>
  <base-section id="skills" title="My Skills" subtitle="What I Offer">
    <div class="skills">
      <div class="skills__list">
        <skill-content-with-icon class="skills__list__skill">
          <template #icon>
            <font-awesome-icon :icon="['fas', 'terminal']" fixed-width />
          </template>
          <template #title>Development and Tech</template>
          <template #description>
            <p>
              As a software engineer, I have techinical experience in
              professional and education settings.
            </p>
            <div class="skills__list__skill__gauge-wrapper">
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="100"
                  goal-label="Comfortable ++"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Javascript (VueJS, ReactJS, Vanilla)</li>
                  <li>HTML/CSS/SCSS</li>
                  <li>Git & Git-flow</li>
                </ul>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="60"
                  goal-label="Comfortable +"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Python</li>
                  <li>Docker & Kubernetes</li>
                  <li>Git & Git-flow</li>
                </ul>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="25"
                  goal-label="Practice Needed"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>PHP</li>
                  <li>Java</li>
                  <li>C/C++</li>
                  <li>Golang</li>
                </ul>
              </div>
            </div>
          </template>
        </skill-content-with-icon>
        <skill-content-with-icon class="skills__list__skill">
          <template #icon>
            <font-awesome-icon :icon="['fas', 'tasks']" fixed-width />
          </template>
          <template #title>Project and Product Management</template>
          <template #description>
            <p>
              I've acquired skills to accurately assess needs and comunicate
              them to a team.
            </p>

            <div class="skills__list__skill__gauge-wrapper">
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="100"
                  goal-label="Comfortable ++"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Functional UML Diagrams</li>
                  <li>Database Conception techniques (Merize)</li>
                </ul>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="60"
                  goal-label="Comfortable +"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Design patterns</li>
                  <li>Project Management</li>
                  <li>Customer Need Analysis</li>
                  <li>Technical Analysis</li>
                </ul>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="25"
                  goal-label="Practice Needed"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Agile Method Theory</li>
                  <li>Risk Assessment</li>
                </ul>
              </div>
            </div>
          </template>
        </skill-content-with-icon>
        <skill-content-with-icon class="skills__list__skill">
          <template #icon>
            <font-awesome-icon :icon="['fas', 'globe-europe']" fixed-width />
          </template>
          <template #title>Soft Skills</template>
          <template #description>
            <p>
              As a literature student and tour guide, I'm confident in my
              communication and organisation skills. Check out my personality
              and soft skills according to Assess First,
            </p>
            <div class="skills__list__skill__gauge-wrapper">
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="100"
                  goal-label="Comfortable ++"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>English (Native)</li>
                  <li>French (Bilingual)</li>
                  <li>Public Speaking</li>
                </ul>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="60"
                  goal-label="Comfortable +"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Meeting Management</li>
                  <li>Organisation</li>
                </ul>
              </div>
              <div class="skills__list__skill__gauge-wrapper__group">
                <skill-gauge
                  class="skills__list__skill__gauge-wrapper__gauge"
                  percentage="25"
                  goal-label="Practice Needed"
                />
                <ul class="skills__list__skill__gauge-wrapper__group__list">
                  <li>Spanish</li>
                  <li>German (Self-Taught)</li>
                  <li>Time Management</li>
                </ul>
              </div>
            </div>
            <p>
              Check out what Assess First has to say about my soft skills
              <a
                href="https://app.assessfirst.com/_/profile/hnnndvm0-julian-easterly"
                target="__blank"
              >here.</a>
            </p>
          </template>
        </skill-content-with-icon>
      </div>
      <div ref="contact-me" class="skills__contact-me">
        <div>Want to work together on a project or opportunity?</div>
        <div class="skills__contact-me__button">
          <white-round-button @click="scrollToId('contact')">contact me</white-round-button>
        </div>
      </div>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import SkillContentWithIcon from "./SkillContentWithIcon";
import SkillGauge from "./SkillGauge";
import WhiteRoundButton from "UI/WhiteRoundButton";
import scrollToId from "Utility/ScrollHelper";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheSkillsSection",
  components: {
    BaseSection,
    SkillContentWithIcon,
    WhiteRoundButton,
    SkillGauge
  },
  methods: {
    scrollToId
  },
  mounted() {
    InViewportObserver.observe(
      this.$refs["contact-me"],
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

#skills {
  background-color: global.$primary-color;
  ::v-deep .section {
    &__title-box {
      &__subtitle,
      &__title {
        color: global.$primary-white;
      }
    }
  }
  ::v-deep .section__title,
  ::v-deep .section__subtitle {
    color: global.$primary-white;
  }
  @include global.fixed-background-overlay;

  .skills {
    &__list {
      &__skill {
        margin-top: 60px;
        &__title {
          font-weight: bold;
          margin: 25px 0;
        }

        &__gauge-wrapper {
          &__group {
            &__list {
              text-align: left;
            }
          }
        }
      }
    }

    &__contact-me {
      margin-top: 50px;
      text-align: center;
      @include global.subtitle-font;
      color: global.$primary-white;
      @include global.fade-in-class-modifier;

      &__button {
        margin-top: 25px;
      }
    }
  }
}

a {
  color: global.$primary-white;
  text-decoration: underline;
  transition: all 10s linear;
}

@include global.adapt-to-screen("m") {
  #skills {
    .skills {
      &__list {
        &__skill {
          &__gauge-wrapper {
            display: flex;
            justify-content: space-evenly;
            flex-wrap: wrap;
            &__group {
              width: 30%;
              &__gauge {
                margin: 10px 15px;
              }
            }
          }
        }
      }
    }
  }
}
</style>
