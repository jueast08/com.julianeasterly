<template>
  <section class="about col-12">
    <div class="about__container col-12">

    </div>
  </section>
</template>

<script>

export default {
  name: 'TheAboutSection',

}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  .about {
    height: 100vh;
    
    &__container {
      height: 100%;
      background: global.$background-gray;
    }
  }
 
</style>
