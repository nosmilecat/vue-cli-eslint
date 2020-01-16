<template>
  <div class="footer">
    <div class="w1100">
      <div class="jieshao">
        <span>平台交易全程透明</span>
        <span>融资服务为您解忧</span>
        <span>咨询，关心您所关心的所有</span>
      </div>
      <p class="dh">
        <router-link tag="a" target="_blank" class="about" :to="{path:'/about/us'}">关于我们</router-link>
        <router-link tag="a" target="_blank" :to="{path:'/about/contact'}">联系我们</router-link>
        <router-link tag="a" :to="{path:'/tender/index'}">魔毯招标</router-link>
        <router-link tag="a" :to="{path:'/buy/index'}">供求信息</router-link>
        <router-link tag="a" :to="{path:'/industryPrice'}">行业价格</router-link>
        <router-link tag="a" :to="{path:'/logistics/index'}">魔毯物流</router-link>
        <router-link tag="a" :to="{path:'/finance'}">魔毯金融</router-link>
        <router-link tag="a" :to="{path:'/information/index'}">魔毯资讯</router-link>
        <a target="_blank" href="http://bpm.ii-motan.com">魔毯后台</a>
      </p>
      <p style="margin-top:10px;">Copy@ 魔毯大宗（厦门）有限公司  2018-2019    <img style="margin-left:80px;width:12px;" src="../../assets/images/jh.png" alt=""> <a href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35020302033522" target="_blank">闽公网安备 35020302033522号</a> <i style="margin-left:80px;">闽ICP备19009543号-1</i></p>
    </div>
  </div>
</template>
<script>
export default {

};
</script>

<style scoped lang="scss">
 .footer {
    width: 100%;
    height: 200px;
    background: #141b21;
    text-align: center;
    .dh {
      // margin-top: 30px;
      margin-bottom: 10px;
      a {
        margin-right: 30px;
      }
    }
    .jieshao {
      padding: 50px 0 40px 20px;
      text-align: center;
      span {
        position: relative;
        font-size: 14px;
        color: #1da172;
        margin-right: 190px;
      }
      span:nth-child(3) {
        margin-right: 0;
      }
      span:nth-child(1):after {
        display: block;
        content:'';
        position: absolute;
        width: 30px;
        height: 27px;
        left: -40px;
        top: -5px;
        background: url('../../assets/images/icon1.png');
      }
      span:nth-child(2):after {
        display: block;
        content:'';
        position: absolute;
        width: 50px;
        height: 27px;
        left: -58px;
        top: -5px;
        background: url('../../assets/images/icon2.png');
      }
      span:nth-child(3):after {
        display: block;
        content:'';
        position: absolute;
        width: 30px;
        height: 27px;
        left: -40px;
        top: -5px;
        background: url('../../assets/images/icon3.png');
      }
    }
    .about {
      margin-right: 30px;
    }
    p {
      line-height: 30px;
    }
  }
</style>
