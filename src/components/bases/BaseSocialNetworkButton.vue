<template>
  <button @click="goToLink">
    <slot />
  </button>
</template>

<script>
import scrollToId from "Utility/ScrollHelper";

export default {
  name: "BaseSocialNetworkButton",
  props: {
    href: {
      type: String,
      required: true
    }
  },
  methods: {
    goToLink() {
      if (this.isInternalPageElementWithId) {
        scrollToId(this.href.substring(1));
      } else {
        window.open(this.href, "_blank");
      }
    }
  },
  computed: {
    isInternalPageElementWithId() {
      return this.href.indexOf("#") === 0;
    }
  }
};
</script>

<style lang="scss" scoped>
@use 'global';

button {
  margin: 5px 0;
  padding: 0;
  border: none;
  background: none;
  display: flex;
  cursor: pointer;

  svg,
  img {
    width: 100%;
  }
}
</style>
