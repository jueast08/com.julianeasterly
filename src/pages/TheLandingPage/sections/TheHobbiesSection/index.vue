<template>
  <base-section id="hobbies" title="A Few of My Hobbies">
    <div class="hobbies">
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <logo-icon />
        </template>
        <template #title>Coding and Design</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <logo-icon />
        </template>
        <template #title>Sports</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <logo-icon />
        </template>
        <template #title>DIY and Gardening</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <logo-icon />
        </template>
        <template #title>Gardening</template>
      </hobby-content-with-icon>
      <hobby-content-with-icon class="hobbies__hobby">
        <template #icon>
          <logo-icon />
        </template>
        <template #title>Cooking</template>
      </hobby-content-with-icon>
    </div>
  </base-section>
</template>

<script>
import BaseSection from "Bases/BaseSection";
import HobbyContentWithIcon from "./HobbyContentWithIcon";
import LogoIcon from "Icons/LogoIcon";

export default {
  name: "TheHobbiesSection",
  components: { BaseSection, HobbyContentWithIcon, LogoIcon }
};
</script>

<style lang="scss" scoped>
@use 'global';

#hobbies {
  padding-top: 50px;
  background-color: global.$primary-white;
  ::v-deep .section__title {
    color: global.$primary-color;
    @include global.h4-font;
    text-transform: uppercase;
    &:before {
      content: "";
    }
  }

  .hobbies {
    &__hobby {
      margin-top: 60px;
    }
  }
}

@include global.adapt-to-screen('s') {
  #hobbies {
    .hobbies {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      &__hobby {
        margin-top: 30px;
        width: 33%;
      }
    }
  }  
}

@include global.adapt-to-screen('xl') {
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
