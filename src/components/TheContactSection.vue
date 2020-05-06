<template>
  <base-section id="contact" title="Send Me a Message" subtitle="Opportunity, idea for a project, or just want to say hi?">
    <div class="contact">
      <div class="contact__form">
        <section class="contact__form__section">
          <label for="name">Name</label>
          <input type="text" name="name"/>
        </section>
        <section class="contact__form__section">
          <label for="email">Email</label>
          <input type="text" name="email"/>
        </section>
        <section class="contact__form__section">
          <label for="subject">Subject</label>
          <input type="text" name="subject"/>
        </section>
        <div class="contact__form__section">
          <label for="message">Message</label>
          <textarea name="message"/>
        </div>
        <div class="contact__form__send">
          <primary-color-round-button>Send</primary-color-round-button>
        </div>
      </div>
    </div>
  </base-section>

</template>

<script>
import BaseSection from 'Components/BaseSection';
import PrimaryColorRoundButton from 'Components/PrimaryColorRoundButton';


export default {
  name: 'TheContactSection',
  components: {BaseSection, PrimaryColorRoundButton},

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

        &__section {
          margin: 25px 0;
          label {
            display: block;
            @include global.p-font($weight: 700);
            color: global.$primary-black;
          }
  
          input[type='text'], textarea {
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

          input[type='text'] {
            height: 30px;
          }

          textarea {
            height: 150px;
          }
        }
        &__send {
          text-align: center;
        }
      }
    }
  }
</style>
