<template>
  <section class="base-exp col-12">
    <div ref="vital-info" class="base-exp__vital-info">
      <div class="base-exp__vital-info__wrapper">
        <div class="base-exp__vital-info__wrapper__icon">
          <slot name="img" />
        </div>
        <div class="base-exp__vital-info__wrapper__text">
          <div class="base-exp__vital-info__wrapper__text__title">
            {{ title }}
            <slot name="title" />
          </div>
          <div class="base-exp__vital-info__wrapper__text__subtitle">
            <slot name="subtitle" />
            {{ subtitle }}
          </div>
          <div class="base-exp__vital-info__wrapper__text__subtitle-2">
            <slot name="subtitle-2" />
            {{ subtitle2 }}
          </div>
          <div class="base-exp__vital-info__wrapper__text__dates">
            <slot name="dates" />
            {{ dates }}
          </div>
          <div class="base-exp__vital-info__wrapper__text__location">
            <span class="base-exp__vital-info__wrapper__text__location__icon">
              <font-awesome-icon :icon="['fas', 'map-marker-alt']" fixed-width />
            </span>
            <span>
              {{ location }}
              <slot name="location" />
            </span>
          </div>
        </div>
      </div>
    </div>

    <div ref="details" class="base-exp__details">
      <slot name="details" />
    </div>
  </section>
</template>

<script>
import { InViewportObserver } from "Utility/IntersectObserverHelpers";
export default {
  name: "BaseSection",
  data() {
    return {
      vitalInfoObserverIterator: null,
      detailsObserver: null
    };
  },
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    subtitle2: {
      type: String
    },
    dates: {
      type: String
    },
    location: {
      type: String
    }
  },
  mounted() {
    InViewportObserver.observe(
      [this.$refs["vital-info"], this.$refs.details],
      InViewportObserver.animateAndStayOnEntry,
      this._uid
    );
  },
  beforeDestroy() {
    InViewportObserver.disconnect(this._uid);
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

.base-exp {
  &__vital-info {
    @include global.fade-in-from-bottom-class-modifier;
    &__wrapper {
      display: flex;

      &__icon {
        width: 50px;
        svg,
        img {
          width: 100%;
          fill: global.$primary-color;
          filter: grayscale(1);
        }
      }

      &__text {
        margin-left: 40px;
        flex-grow: 1;
        &__title {
          margin: 10px 0;
          @include global.xp-title-font;
        }
        &__subtitle {
          margin: 10px 0;
          @include global.xp-subtitle-font($weight: 700);
        }
        &__subtitle-2 {
          margin: 10px 0;
          @include global.xp-subtitle-font($weight: 700);
        }
        &__dates {
          margin: 10px 0;
          @include global.xp-subtitle-font;
        }
        &__location {
          display: flex;
          @include global.xp-subtitle-font;
          &__icon {
            font-size: 16px;
            color: global.$primary-color;
          }
        }
      }
    }
  }

  &__details {
    @include global.fade-in-from-top-class-modifier;

    display: none;
    @include global.p-font;
  }
}

@include global.adapt-to-screen("s") {
  .base-exp {
    &__vital-info {
      &__wrapper {
        &__icon {
          min-width: 50px;
          max-width: 50px;
          svg,
          img {
            width: 100%;
            fill: global.$primary-color;
            filter: grayscale(1);
          }
        }
      }
    }

    &__details {
      margin-top: 25px;
      display: block;
      width: 100%;
    }
  }
}

@include global.adapt-to-screen("xl") {
  .base-exp {
    &__vital-info {
      display: inline-block;
      vertical-align: top;
      &:before {
        //this makes the virtical align work without flex box
        content: "";
        display: inline-block;
        vertical-align: top;
        height: 100%;
      }
      &__wrapper {
        display: flex;
        width: 300px;
        &__icon {
          min-width: 75px;
          max-width: 75px;
          svg,
          img {
            width: 100%;
            fill: global.$primary-color;
            filter: grayscale(1);
          }
        }

        &__text {
          margin-left: 20px;
        }
      }
    }

    &__details {
      display: inline-block;
      width: calc(100% - 350px);
      margin-left: 25px;
    }
  }
}
</style>
