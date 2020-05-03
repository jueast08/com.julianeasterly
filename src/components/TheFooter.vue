<template>
  <section id="footer" class="footer">
  </section>
</template>

<script>

export default {
  name: 'TheFooter',
  data() {
    return {
      elementsToAnimateByClassName: ['skills__container',],
    }
  },
  components: {},
  methods: {},
}
</script>

<style lang="scss" scoped>
  @use 'global';
  
  $container-padding: 100px 25px;

  .footer {
    background: global.$primary-black;
    height: 100vh;
  }
 
</style>
