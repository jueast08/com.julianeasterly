<template>
  <base-section
    id="contact"
    title="Send Me a Message"
    subtitle="Opportunity, idea for a project, or just want to say hi?"
  >
    <div ref="contact" class="contact">
      <form class="contact__form" @submit.prevent="onSubmit">
        <section class="contact__form__section">
          <div
            class="contact__form__section__label"
            :class="addValidationModifier(this.formHelpMessages.name.status)"
          >
            <label for="name">Name</label>
            <span>
              <font-awesome-icon :icon="['fas', 'check-circle']" fixed-width />
            </span>
            <span>{{ this.formHelpMessages.name.message}}</span>
          </div>
          <input type="text" name="name" @input="validateName()" v-model="form.name" />
        </section>
        <section class="contact__form__section">
          <div
            class="contact__form__section__label"
            :class="addValidationModifier(this.formHelpMessages.email.status)"
          >
            <label for="email">Email</label>
            <span>
              <font-awesome-icon
                v-if="isIncorrect(formHelpMessages.email.status)"
                :icon="['fas', 'exclamation-circle']"
                fixed-width
              />
              <font-awesome-icon v-else :icon="['fas', 'check-circle']" fixed-width />
            </span>
            <span>{{ this.formHelpMessages.email.message}}</span>
          </div>
          <input type="text" name="email" @input="validateEmail()" v-model="form.email" />
        </section>
        <section class="contact__form__section textarea">
          <div
            class="contact__form__section__label"
            :class="addValidationModifier(this.formHelpMessages.message.status)"
          >
            <label for="message">Message</label>
            <span>
              <font-awesome-icon :icon="['fas', 'check-circle']" fixed-width />
            </span>
            <span>{{ this.formHelpMessages.message.message}}</span>
          </div>
          <textarea name="message" @input="validateMessage()" v-model="form.message" />
        </section>
        <div class="contact__form__send">
          <vue-recaptcha
            :sitekey="recaptchaKey"
            size="invisible"
            @verify="onVerifyCapctha"
            @expired="onCaptchaExpired"
            :loadRecaptchaScript="true"
            ref="recaptcha"
          />
          <primary-color-round-button :disabled="!isValidForm" :allowClickOnDisabled="true">Send</primary-color-round-button>
        </div>
      </form>
      <transition name="fade">
        <div
          v-if="showLoaderOverlay"
          class="contact__form-overlay"
          :class="!sendSuccess && 'contact__form-overlay--failure'"
        >
          <div class="contact__form-overlay__wrapper" ref="contact__form-overlay__wrapper">
            <div class="contact__form-overlay__wrapper__finished-messsage">
              <div
                v-if="sendSuccess"
                class="contact__form-overlay__wrapper__finished-messsage__content"
              >
                <div class="contact__form-overlay__wrapper__finished-messsage__content__icon">
                  <font-awesome-icon :icon="['fas', 'check-circle']" fixed-width />
                </div>
                <br />Message Sent!
              </div>
              <div
                v-else
                class="contact__form-overlay__wrapper__finished-messsage__content contact__form-overlay__wrapper__finished-messsage__content--failure"
              >
                <div class="contact__form-overlay__wrapper__finished-messsage__content__icon">
                  <font-awesome-icon :icon="['fas', 'exclamation-circle']" fixed-width />
                </div>
                <br />Message Not Sent!
                <div
                  class="contact__form-overlay__wrapper__finished-messsage__content__retry"
                  @click="hideShowLowerOverlay()"
                >Try Again?</div>
              </div>
            </div>
            <div class="contact__form-overlay__wrapper__loader">
              <div class="contact__form-overlay__wrapper__loader__animation">
                <div class="contact__form-overlay__wrapper__loader__animation__wind">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
                <font-awesome-icon :icon="['fas', 'envelope']" fixed-width />
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import PrimaryColorRoundButton from "UI/PrimaryColorRoundButton";
import VueRecaptcha from "vue-recaptcha";
import querystring from "querystring";
import axios from "axios";
import { InViewportObserver } from "Utility/IntersectObserverHelpers";

const inputStatusCodes = {
  EMPTY: 1,
  INCORRECT: 2,
  CORRECT: 3
};
export default {
  name: "TheContactSection",
  data() {
    return {
      recaptchaKey: process.env.VUE_APP_RECAPTCHA,
      showLoaderOverlay: false,
      sendSuccess: true,
      form: {
        name: "",
        email: "",
        message: "",
        recaptcha: null
      },
      formHelpMessages: {
        name: {
          status: inputStatusCodes.EMPTY,
          message: "Be sure to add your name"
        },
        email: {
          status: inputStatusCodes.EMPTY,
          message: "Make sure to double check your email"
        },
        message: {
          status: inputStatusCodes.EMPTY,
          message: "Let me know what you want to say!"
        }
      },
      scrollObserver: null
    };
  },
  components: { BaseSection, PrimaryColorRoundButton, VueRecaptcha },
  methods: {
    addValidationModifier(code) {
      let root = "contact__form__section__label";
      if (code === inputStatusCodes.INCORRECT) {
        return root + "--invalid";
      }
      if (code === inputStatusCodes.CORRECT) {
        return root + "--valid";
      }
      return "";
    },
    isIncorrect(code) {
      return code === inputStatusCodes.INCORRECT;
    },
    validateName(errorOnEmpty = false) {
      if (this.form.name.trim() === "") {
        this.formHelpMessages.name.message = "Be sure to add your name";
        this.formHelpMessages.name.status = errorOnEmpty
          ? inputStatusCodes.INCORRECT
          : inputStatusCodes.EMPTY;
      } else {
        this.formHelpMessages.name.message = "Name looks good!";
        this.formHelpMessages.name.status = inputStatusCodes.CORRECT;
      }
    },
    validateMessage(errorOnEmpty = false) {
      if (this.form.message.trim() === "") {
        this.formHelpMessages.message.message =
          "Let me know what you want to say!";
        this.formHelpMessages.message.status = errorOnEmpty
          ? inputStatusCodes.INCORRECT
          : inputStatusCodes.EMPTY;
      } else if (this.form.message.trim().length < 50) {
        this.formHelpMessages.message.message =
          "Write " +
          (50 - this.form.message.trim().length) +
          " more characters!";
        this.formHelpMessages.message.status = errorOnEmpty
          ? inputStatusCodes.INCORRECT
          : inputStatusCodes.EMPTY;
      } else {
        this.formHelpMessages.message.message = "Message looks good!";
        this.formHelpMessages.message.status = inputStatusCodes.CORRECT;
      }
    },
    validateEmail(errorOnEmpty = false) {
      var re = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (this.form.email.trim() === "") {
        this.formHelpMessages.email.message =
          "Make sure to double check your email";
        this.formHelpMessages.email.status = errorOnEmpty
          ? inputStatusCodes.INCORRECT
          : inputStatusCodes.EMPTY;
      } else if (!re.test(this.form.email.trim())) {
        this.formHelpMessages.email.message =
          "Oh, oh. Be sure to check your email.";
        this.formHelpMessages.email.status = inputStatusCodes.INCORRECT;
      } else {
        this.formHelpMessages.email.message = "Email looks good!";
        this.formHelpMessages.email.status = inputStatusCodes.CORRECT;
      }
    },
    onVerifyCapctha(response) {
      this.form.recaptcha = response;

      if (!this.isValidForm) {
        for (let field in this.formHelpMessages) {
          this.changeToErrorStatusIfNotCorrect(field);
        }
        this.$refs.recaptcha.reset();
        return;
      }

      this.showLoaderOverlay = true;

      axios
        .post(
          process.env.VUE_APP_API + "/send",
          querystring.stringify(this.form)
        )
        .then(res => {
          if (process.env.NODE_ENV === "development") {
            console.log(res);
          }
          this.sendSuccess = true;
        })
        .catch(error => {
          if (process.env.NODE_ENV === "development") {
            console.log(error);
          }
          this.sendSuccess = false;
          this.$refs["contact__form-overlay__wrapper"].classList.add(
            "contact__form-overlay__wrapper--finished"
          );
        })
        .then(() => {
          this.$refs.recaptcha.reset();
          this.$refs["contact__form-overlay__wrapper"].classList.add(
            "contact__form-overlay__wrapper--finished"
          );
        });
    },
    onCaptchaExpired() {
      this.$refs.recaptcha.reset();
    },
    changeToErrorStatusIfNotCorrect(field) {
      this.formHelpMessages[field].status =
        this.formHelpMessages[field].status === inputStatusCodes.CORRECT
          ? inputStatusCodes.CORRECT
          : inputStatusCodes.INCORRECT;
    },
    onSubmit() {
      this.$refs.recaptcha.execute();
    },
    hideShowLowerOverlay() {
      this.showLoaderOverlay = false;
      this.resetOverlayBackgroundColor();
    },
    resetOverlayBackgroundColor() {
      this.sendSuccess = true;
    }
  },
  computed: {
    isValidForm() {
      return (
        this.formHelpMessages.name.status === inputStatusCodes.CORRECT &&
        this.formHelpMessages.email.status === inputStatusCodes.CORRECT &&
        this.formHelpMessages.message.status === inputStatusCodes.CORRECT
      );
    }
  },
  mounted() {
    InViewportObserver.observe(
      this.$refs.contact,
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
    background-image: url("~Assets/contact_background.jpg");
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
  }

  ::v-deep .section {
    &__title-box {
      &__title,
      &__subtitle {
        position: relative;
        color: global.$primary-white;
        z-index: 3;
      }
    }

    &__container {
      position: relative;
      flex-grow: 1;
      z-index: 3;
    }
  }
}

.contact {
  flex-grow: 1;
  background-color: global.$primary-white;
  padding: 25px;
  margin: 0 auto;
  overflow-x: hidden;
  @include global.border-box;
  height: 100%;
  @include global.fade-in-from-bottom-class-modifier;

  &__form {
    position: relative;
    display: grid;
    grid-gap: 10px;
    grid-template-areas:
      "name "
      "email "
      "message "
      "button ";
    height: 100%;
    max-width: 100%;
    width: 100%;

    &__section {
      &__label {
        display: flex;
        align-items: center;
        flex-wrap: wrap;
        label {
          @include global.p-font($weight: 700);
          color: global.$primary-black;
          margin-right: 5px;
        }
        span {
          color: rgba(global.$primary-black, 0.25);
          font-size: 15px;
          transition: color 0.5s ease-in-out;
          &:last-child {
            @include global.p-font($weight: 500);
          }
        }

        &--invalid {
          span {
            color: global.$error-color;
          }
        }

        &--valid {
          span {
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

  //@TODO refactor
  &__form-overlay {
    position: absolute;
    z-index: 98;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    background: global.$primary-color;
    transition: background 0.5s ease-in-out;
    overflow: hidden;

    &--failure {
      background: global.$error-color;
    }
    &__wrapper {
      position: relative;
      height: 100%;
      width: 100%;
      white-space: nowrap;
      @include global.border-box;
      transition: transform 1s ease-in-out;
      transform: translateX(-100%);

      &__finished-messsage {
        display: inline-block;
        height: 100%;
        width: 100%;
        vertical-align: top;
        opacity: 0;
        transform: translateY(100px);
        transition: transform 1s ease-in-out, opacity 2s ease-in-out;
        transition-delay: 1s;
        &__content {
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          text-align: center;
          @include global.h3-font;
          color: global.$primary-white;

          &__icon {
            font-size: 2em;
          }
          &__retry {
            margin-top: 50px;
            cursor: pointer;
            @include global.p-font;
          }
        }
      }

      &__loader {
        display: inline-block;
        height: 100%;
        width: 100%;
        transition: opacity 1s ease-in-out;

        &__animation {
          position: relative;
          top: 50%;
          transform: translateY(-50%);
          width: 100%;
          height: 80px;
          font-size: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: global.$primary-white;

          &__wind {
            width: 50px;
            height: 50%;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-end;
            div {
              height: 5px;
              background: white;
              width: 25px;
              border-radius: 5px;
              animation: flying-email_outer-wind 0.75s linear infinite alternate;
              &:nth-child(2) {
                animation-direction: alternate-reverse;
                width: 50px;
                background: white;
              }
            }
          }
          @include global.keyframes(flying-email_outer-wind) {
            0% {
              width: 25px;
            }
            100% {
              width: 100%;
            }
          }
        }
      }

      &--finished {
        transform: translateX(0);
      }
      &--finished & {
        &__finished-messsage {
          opacity: 1;
          transform: translateY(0);
        }
        &__loader {
          opacity: 0;
        }
      }
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

@include global.adapt-to-screen("l") {
  #contact {
    padding: 0;
    display: flex;
    flex-direction: row;

    &:before,
    &:after {
      display: none;
    }

    ::v-deep .section__title-box {
      padding-top: 100px;
      width: 60%;
      background-image: url("~Assets/contact_background.jpg");
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center 40%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
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
    }

    ::v-deep .section__container {
      min-height: 100%;
    }

    .contact {
      width: 100%;
      padding: 25px 75px;
    }
  }
}
</style>
