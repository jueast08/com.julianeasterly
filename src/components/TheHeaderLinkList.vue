<template>
  
  <div class="the-header-link-list">
    <slot></slot>
  </div>

</template>

<script>

export default {
  name: 'TheHeaderLogo',
}
</script>

<style lang="scss" scoped>
  @use 'global';

  .the-header-link-list {
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    margin: 0 10px;
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 700;
    color: global.$primary-white;
    
    &:hover {
      cursor: pointer;
    }
    
    &.active {
      font-size: 20px;
    }
  }
}
</style>
