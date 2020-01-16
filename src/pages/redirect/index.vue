<template>
  <div>
      <!-- 重定向模拟刷新当前页 -->
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  created() {
    this.$router.go(-1);
  }
};
</script>

<style scoped lang="scss">
</style>
