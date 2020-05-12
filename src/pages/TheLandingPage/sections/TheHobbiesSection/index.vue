<template>
  <base-section id="hobbies" title="A Few of My Hobbies">
    <div class="hobbies">
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'laptop-code']" fixed-width />
        </template>
        <template #title>Coding and Design</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'dumbbell']" fixed-width />
        </template>
        <template #title>Sports</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'tools']" fixed-width />
        </template>
        <template #title>DIY</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'seedling']" fixed-width />
        </template>
        <template #title>Gardening</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <font-awesome-icon :icon="['fas', 'hamburger']" fixed-width />
        </template>
        <template #title>Cooking</template>
      </hobby-content-with-icon>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import HobbyContentWithIcon from "./HobbyContentWithIcon";
import { IntersectObserverHelpersIterator } from "Utility/IntersectObserverHelpers";

export default {
  name: "TheHobbiesSection",
  data() {
    return {
      observerIterator: null
    };
  },
  components: { BaseSection, HobbyContentWithIcon },
  mounted() {
    let elements = document.querySelectorAll(".hobbies__hobby");
    this.observerIterator = new IntersectObserverHelpersIterator(
      elements,
      "--in-view",
      {},
      true,
      false,
      true
    );
  },
  beforeDestroy() {
    this.observerIterator.disconnectAll();
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

#hobbies {
  padding-top: 50px;
  background-color: global.$primary-white;
  ::v-deep .section__title {
    color: global.$primary-color;
    @include global.subtitle-font($weight: 700);
    text-transform: uppercase;
    &:before {
      content: "";
    }
  }

  .hobbies {
    &__hobby {
      margin-top: 30px;
    }
  }
  ::v-deep .base-content-with-icon {
    @include global.fade-in-and-expand-class-modifier;
  }
}

@include global.adapt-to-screen("s") {
  #hobbies {
    .hobbies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__hobby {
        margin-top: 30px;
        width: calc(100% / 3);
      }
    }
  }
}

@include global.adapt-to-screen("xl") {
  #hobbies {
    .hobbies {
      display: flex;
      justify-content: space-between;

      &__hobby {
        margin-top: 10px;
        width: auto;
      }
    }
  }
}
</style>
