<template>
   <div class="skill-gauge">
     <div class="skill-gauge__title">{{ skillTitle }}</div>
     <div class="skill-gauge__label-group" :style="masteryPercentageWidth">
       <span class="skill-gauge__label-group__end" >{{ goalLabel }}</span>
     </div>
     <div class="skill-gauge__container">
       <div class="skill-gauge__container__fluid" :style="masteryPercentageWidth"></div>
     </div>
   </div>
</template>

<script>

export default {
  name: 'SkillGuauge',
  props: {
    percentage: {
      type: String,
      required: true,
      validator(value) {
        let possibleNumber = value;
        if(value.indexOf('%') === value.length - 1) {
          possibleNumber = possibleNumber.substring(0, possibleNumber.length - 1);
        }
        return !isNaN(possibleNumber) && possibleNumber <= 100 && possibleNumber >= 0;
      },
    },
    skillTitle: {
      type: String,
      required: false,
      default: '',
    },
    goalLabel: {
      type: String,
      required: false,
      default: '',
    }
  },
  computed: {
    masteryPercentageWidth() {
      return {width: this.percentage}; 
    }
  }
}
</script>


<style lang="scss" scoped>
  @use 'global';
  
  .skill-gauge {
    width: 100%;

    &__label-group {
      text-align: right;
      @include global.p-font($size-s: 11px);

    }

    &__container {
      height: 10px;
      width: 100%;
      background: lighten(global.$primary-gray, 35%);
      border-radius: 7px;

      &__fluid {
        height: 100%;
        border-radius: 7px;
        background: global.$primary-color;
        transition: width ease-in-out 0.5s;
      }
    }
  }

</style>
