<template>
  <base-section id="contact" title="Send Me a Message" subtitle="Opportunity, idea for a project, or just want to say hi?">
    <div class="contact">
      <form class="contact__form" @submit.prevent="onSubmit"> <!-- @TODO change to a verification functionto be changed -->
        <section class="contact__form__section">
          <section class="contact__form__section__label">
            <label for="name">Name</label>
            <logo-icon/>
          </section>
          <input type="text" name="name" v-model="name" required/>
        </section>
        <section class="contact__form__section">
          <section class="contact__form__section__label">
          <label for="email">Email</label>
            <logo-icon/>
          </section>          
          <input type="email" name="email" v-model="email" required/>
        </section>
        <div class="contact__form__section textarea">
          <section class="contact__form__section__label">
            <label for="message">Message</label>
            <logo-icon/>
          </section>          
          <textarea name="message" v-model="message" required/>
        </div>
        <div class="contact__form__send">
          <primary-color-round-button>Send</primary-color-round-button>
        </div>
      </form>
    </div>
  </base-section>

</template>

<script>
import BaseSection from 'Components/BaseSection';
import PrimaryColorRoundButton from 'Components/PrimaryColorRoundButton';
import LogoIcon from 'Icons/LogoIcon'; //@TODO replace with a checkmark icon


export default {
  name: 'TheContactSection',
  data() {
    return {
      name: '',
      email: '',
      message: '',
    }
  },
  components: {BaseSection, PrimaryColorRoundButton, LogoIcon},
  methods: {
    onSubmit() {
      // let message = {
      //     name: this.name,
      //     email: this.email,
      //     message: this.message,
      // };

      //@TODO send to a php script
    },
  },

}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  #contact {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 100px 0 0;
    
    
    &:after {
      content: ' ';
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(global.$primary-black, 0.8);
    }

    &:before {
      content: ' ';
      z-index: 1;
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      opacity: 1;
      background-image: url('~Assets/portrait_bridge_saint-entienne.jpg');
      background-repeat: no-repeat;
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
    }

    ::v-deep .section {
      &__title, &__subtitle{
        position: relative;
        color: global.$primary-white; 
        z-index: 3;
      }

      &__container {
        position: relative;
        display: flex;
        flex-grow: 1;
        z-index: 3;
      }
    }

    .contact {
      width: 100%;
      flex-grow: 1;
      background-color: global.$primary-white;
      padding: 25px;
      @include global.border-box;

      &__form {
        display: flex;
        flex-direction: column;
        height: 100%;
        max-height: 100%;
       &__section {
          margin: 25px 0;

          &__label {
            display: flex;
            align-items: center;
            label {
              @include global.p-font($weight: 700);
              color: global.$primary-black;
              margin-right: 5px;
            }
            svg {
              fill: rgba(global.$primary-black, 0.25);
              height: 15px;
            }
          }
  
          input, textarea {
            //resize: none;
            width: 100%;
            max-width: 100%;
            border-width: 1px;
            border-radius: 2px;
            border-style: solid;
            border-color: rgba(global.$primary-black, 0.25);
            padding: 10px;
            @include global.border-box;
            @include global.p-font($size-s: 12px, $size-m: 12px, $size-l: 12px,  $size-xl: 12px);
            color: global.$primary-gray;
            transition: border 0.5s ease-in-out;
            
            &:focus {
              outline: none;
              border-color: global.$primary-color;
              border-width: 2px;
            }

          }

          input {
            height: 30px;
          }


        }
        
        .textarea {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          max-height: 175px;
          textarea {
            flex-grow: 1;
            max-height: 150px;
          }
        }
        &__send {
          text-align: center;
        }
      }
    }
  }
</style>
