<template>
  <div id="home">
    <div class="main">
      <router-view></router-view>
    </div>
    <mt-footer></mt-footer>
  </div>
</template>
<script>
import mtFooter from './footer';
export default {
  components: {mtFooter},
  data() {
    return {
    };
  },
  created() {

  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.$nextTick(function() { // 页面加载完成后执行

        });
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {

  },
  mounted() {

  }
};
</script>

<style src="./index.scss"  lang="scss" scoped></style>
