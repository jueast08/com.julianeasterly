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
            <p>As a software engineer, I have experience in a multitude of technologies shown below.</p>
            <div class="skills__list__skill__gauge-wrapper">
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Javascript (VueJS, ReactJS, Vanilla)"
                percentage="70"
                goal-label="Upper Intermediate (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="HTML/CSS/SCSS"
                percentage="70"
                goal-label="Upper Intermediate (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Git & Git-flow"
                percentage="70"
                goal-label="Upper Intermediate (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Python"
                percentage="50"
                goal-label="Independent. (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Docker & Kubernetes"
                percentage="40"
                goal-label="Independent. (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="PHP (Laravel, Vanilla)"
                percentage="40"
                goal-label="Independent. (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Java (Java EE, Vanilla)"
                percentage="30"
                goal-label="Course Experience"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="C/C++"
                percentage="30"
                goal-label="Course Experience"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Golang"
                percentage="15"
                goal-label="Beginner. (Pro Exp)"
              />
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
              For a project leader and analyst, it's critical to accurately analyse and communicate a client's
              needs to technical teams.
              <br />To do this efficiently, I rely on tools such as UML and techical analysis of potentially interesting technology.
            </p>
            <div class="skills__list__skill__gauge-wrapper">
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="UML & Merise"
                percentage="70"
                goal-label="Upper Intermediate. (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Design Patterns (Gang of Four)"
                percentage="50"
                goal-label="Independent. (Pro Exp)"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Agile Methods"
                percentage="40"
                goal-label="Theoretical Knowledge"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Project Management"
                percentage="40"
                goal-label="Professional Experience"
              />
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
              As a ex-literature student and bilingual tour guide, I have great communication skills and feel at ease addressing a diverse public.
              These aptitudes translate into the ability to lead meetings, present ideas, and exchange with individuals from various backgrounds.
            </p>
            <div class="skills__list__skill__title">Languages</div>
            <div class="skills__list__skill__gauge-wrapper">
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="English"
                percentage="100"
                goal-label="Native"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="French"
                percentage="90"
                goal-label="Fluent"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="German (Self-Learning)"
                percentage="10"
                goal-label="Beginner"
              />
              <skill-gauge
                class="skills__list__skill__gauge-wrapper__gauge"
                skill-title="Spanish (Courses Taken)"
                percentage="20"
                goal-label="Beginner"
              />
            </div>
          </template>
        </skill-content-with-icon>
      </div>
      <div class="skills__contact-me">
        <div>Want to work together on a project or opportunity?</div>
        <div class="skills__contact-me__button">
          <!-- TODO make the button work -->
          <white-round-button>contact me</white-round-button>
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
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

#skills {
  background-color: global.$primary-color;
  ::v-deep .section__title,
  ::v-deep .section__subtitle {
    color: global.$primary-white;
  }
  .skills {
    &__list {
      &__skill {
        margin-top: 60px;
        &__title {
          font-weight: bold;
          margin: 25px 0;
        }
      }
    }

    &__contact-me {
      margin-top: 50px;
      text-align: center;
      @include global.subtitle-font;
      color: global.$primary-white;

      &__button {
        margin-top: 25px;
      }
    }
  }
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
            &__gauge {
              max-width: 45%;
              margin: 10px 15px;
            }
          }
        }
      }
    }
  }
}
</style>
