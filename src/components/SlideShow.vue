<template>
    <div class="slider">
        <div class="slider__container">
        <div class="slider__container__left-arrow">
            <div></div>
        </div>
        <div class="slider__container__content">
            <div class="slider__container__content__container">
                <slot></slot>
            </div>
        </div>
        <div class="slider__container__right-arrow">
            <div></div>
        </div>
        </div>
        <div class="slider__counter"></div> <!--@TODO finish-->
    </div>
</template>

<script>
export default {
  name: 'SlideShow',
  methods: {

  },
  mounted() {
      //if I know the number of children and their size, i should be able to do a scroll
      console.log(this.$children);
  }

}
</script>


<style lang="scss" scoped>
  @use 'global';
  
    .slider {
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;

        &__container {
            display: flex;
            flex-grow: 1;
            width: 100%;
            height: calc(100% - 25px);
            @mixin arrows {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 50px;
                
                div {
                    border-color: rgba(global.$primary-black, 0.6);
                    border-style: solid;
                    height: 20px;
                    width: 20px;
                }
            }
            $arrow-border-thickness: 5px;
            &__right-arrow {
                @include arrows;
                div {
                    border-width: $arrow-border-thickness  $arrow-border-thickness 0 0;
                    transform: rotate(45deg);
                }
            }
            
            &__left-arrow {
                @include arrows;
                div {
                    border-width: $arrow-border-thickness 0 0 $arrow-border-thickness;
                    transform: rotate(-45deg);
                }
            }

            &__content {
                flex-grow: 1;
                height: 100%;
                overflow: scroll;
                //overflow-y: hidden;
                &__container {
                    display: flex;
                    max-height: 100%;
                    height: 100%;
                    min-width: 100%;                    
                }
            }
        }

        &__counter {
            height: 25px;
            width: 100%;
            //background-color: yellow;
        }
    }

</style>
