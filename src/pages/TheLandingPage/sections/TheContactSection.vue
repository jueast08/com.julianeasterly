<template>
  <base-section
    id="contact"
    title="Send Me a Message"
    subtitle="Opportunity, idea for a project, or just want to say hi?"
  >
    <div class="contact">
      <!-- col-m-6 -->
      <form class="contact__form" @submit.prevent="onSubmit">
        <!-- @TODO change to a verification functionto be changed -->
        <section class="contact__form__section">
          <div
            class="contact__form__section__label"
            :class="addClassModifierIfStringNotEmpty(name)"
          >
            <label for="name">Name</label>
            <span>
              <font-awesome-icon :icon="['fas', 'check-circle']" fixed-width />
            </span>
          </div>
          <input type="text" name="name" v-model="name" required />
        </section>
        <section class="contact__form__section">
          <div
            class="contact__form__section__label"
            :class="addClassModifierIfStringNotEmpty(email)"
          >
            <label for="email">Email</label>
            <span>
              <font-awesome-icon :icon="['fas', 'check-circle']" fixed-width />
            </span>
          </div>
          <input type="email" name="email" v-model="email" required />
        </section>
        <section class="contact__form__section textarea">
          <div
            class="contact__form__section__label"
            :class="addClassModifierIfStringNotEmpty(message)"
          >
            <label for="message">Message</label>
            <span>
              <font-awesome-icon :icon="['fas', 'check-circle']" fixed-width />
            </span>
          </div>
          <textarea name="message" v-model="message" minlength="50" required />
        </section>
        <div class="contact__form__send">
          <primary-color-round-button>Send</primary-color-round-button>
        </div>
      </form>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import PrimaryColorRoundButton from "UI/PrimaryColorRoundButton";
import { IntersectObserverHelpersIterator } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheContactSection",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      scrollObserver: null
    };
  },
  components: { BaseSection, PrimaryColorRoundButton },
  methods: {
    addClassModifierIfStringNotEmpty(string) {
      return string.trim() !== "" && "contact__form__section__label--filled";
    },
    onSubmit() {
      // let message = {
      //     name: this.name,
      //     email: this.email,
      //     message: this.message,
      // };
      //@TODO send to a php script
    }
  },
  mounted() {
    let element = document.querySelector(".contact");
    this.observers = new IntersectObserverHelpersIterator(
      element,
      "--in-view",
      {},
      true,
      false,
      true
    );
  },
  beforeDestroy() {
    this.observers.disconnectAll();
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

#contact {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 100px 0 0;

  &:after {
    content: " ";
    position: absolute;
    z-index: 2;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(global.$primary-black, 0.8);
  }

  &:before {
    content: " ";
    z-index: 1;
    display: block;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    opacity: 1;
    background-image: url("~Assets/portrait_bridge_saint-entienne.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  ::v-deep .section {
    &__title,
    &__subtitle {
      position: relative;
      color: global.$primary-white;
      z-index: 3;
    }

    &__container {
      position: relative;
      flex-grow: 1;
      z-index: 3;
    }
  }

  .contact {
    flex-grow: 1;
    background-color: global.$primary-white;
    padding: 25px;
    margin: 0 auto;
    @include global.border-box;
    height: 100%;
    @include global.fade-in-from-bottom-class-modifier;

    &__form {
      height: 100%;
      max-width: 100%;
      width: 100%;
      display: grid;
      grid-gap: 10px;
      grid-template-areas:
        "name "
        "email "
        "message "
        "button ";

      &__section {
        &__label {
          display: flex;
          align-items: center;
          label {
            @include global.p-font($weight: 700);
            color: global.$primary-black;
            margin-right: 5px;
          }
          span {
            color: rgba(global.$primary-black, 0.25);
            font-size: 15px;
            transition: color 0.5s ease-in-out;
          }

          &--filled {
            svg {
              color: global.$primary-color;
            }
          }
        }

        input,
        textarea {
          width: 100%;
          border-width: 1px;
          border-radius: 2px;
          border-style: solid;
          border-color: rgba(global.$primary-black, 0.25);
          padding: 10px;
          @include global.border-box;
          @include global.p-font(
            $size-s: 12px,
            $size-m: 12px,
            $size-l: 12px,
            $size-xl: 12px
          );
          color: global.$primary-gray;
          transition: border 0.5s ease-in-out;

          &:focus {
            outline: none;
            border-color: global.$primary-color;
            border-width: 2px;
          }
        }

        input {
          height: 50px;
        }

        &:nth-child(1) {
          grid-area: name;
        }
        &:nth-child(2) {
          grid-area: email;
        }
        &:nth-child(3) {
          grid-area: message;
        }
      }

      .textarea {
        textarea {
          height: 150px;
        }
      }
      &__send {
        text-align: center;
        grid-area: button;
      }
    }
  }
}

@include global.adapt-to-screen("m") {
  #contact {
    padding: 0;
    display: flex;
    flex-direction: row;

    &:before {
      background-attachment: scroll;
    }

    ::v-deep .section__title-box {
      padding-top: 100px;
      width: 60%;
    }

    ::v-deep .section__container {
      min-height: 100%;
      padding: 0 50px;
    }

    .contact {
      width: 100%;

      &__form {
        grid-template-areas:
          "name name name email email email"
          "message message message message message message"
          "button button button button button button";

        &__section {
          &__label {
          }

          input,
          textarea {
          }

          input {
          }
        }

        .textarea {
          textarea {
            flex-grow: 1;
            max-height: 150px;
          }
        }
        &__send {
        }
      }
    }
  }
}
</style>
