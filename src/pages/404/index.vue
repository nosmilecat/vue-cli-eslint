<template>
  <div class="notFound">
    <div class="text">
       <img src="../../assets/images/notfound.gif" alt="">
    </div>
    <div>
      <el-button  class="back" @click="$router.go(-1);">返回</el-button>
      <router-link :to="{path:'/'}">
        <el-button class="next">首页</el-button>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {}
};
</script>

<style scoped lang="scss">
  .notFound {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text {
      font-size: 30px;
      color: $base-color;
      font-weight: 700;
    }
  }
  .next {
    width: 150px;
    height: 46px;
    color: #fff;
    background: $base-color;
    margin-top: 40px;
  }
  .back {
    width: 150px;
    height: 46px;
    color: $base-color;
    background: #fff;
    margin-top: 40px;
    margin-right: 20px;
  }
</style>
