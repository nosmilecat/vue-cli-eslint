<template>
  <div id="app">
      <router-view></router-view>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$router.push('/');
    }
  }

};
</script>
<style scoped>
#app {
  height: 100%;
}
</style>
