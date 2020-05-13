<template>
  <div class="the-header-logo">
    <span>JULIAN</span>
    <logo-icon />
    <span>EASTERLY</span>
  </div>
</template>

<script>
import LogoIcon from "UI/LogoIcon";

export default {
  name: "TheHeaderLogo",
  components: {
    LogoIcon,
  },
};
</script>

<style lang="scss" scoped>
@use 'global';

.the-header-logo {
  display: flex;
  align-items: center;
  height: 100%;

  span {
    @include global.logo-font;
  }

  svg {
    height: 25px;
    min-width: 25px;
    margin: 0 2px;
  }
}

@include global.adapt-to-screen("xl") {
  .the-header-logo {
    span {
      @include global.logo-font;
    }

    svg {
      height: 100%;
      margin: 0 5px;
    }
  }
}
</style>
