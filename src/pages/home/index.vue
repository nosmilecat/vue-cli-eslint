<template>
  <div id="home">
    <div class="header">
      <div class="top">
        <div class="w1100">
          <div style="height:30px;overflow:hidden;position:relative;">
            <span class="gglb"></span>
            <ul class="notice iconfont">
              <li class="noticeLi" v-for="(item,index) in noticeList" :key="index"><router-link tag="a" target="_blank" :to="{path:'/notice'}">{{item.title}}</router-link></li>
            </ul>
          </div>
          <ul class="user-info">
            <li class="tel"><i class="iconfont icon-iconfontdianhua1" style="margin-right:10px;"></i> 服务热线：400-991-9859</li>
            <li class="line">|</li>
            <li v-if="!isLogin"><router-link :to="{path:'/login'}">请先登入</router-link></li>
            <li v-if="!isLogin" class="line">|</li>
            <li v-if="!isLogin"><router-link :to="{path:'/login/register'}">免费注册</router-link></li>
            <li v-if="isLogin" class="user">
              <a class="aa" href="javascript:;">{{name}} <i class="el-icon-arrow-down"></i> </a>
              <ul>
                <li><router-link :to="{path:'/personal/index'}">个人中心</router-link></li>
                <li><router-link :to="{path:'/personal/safe'}">安全设置</router-link></li>
                <li @click="layout" style="cursor:pointer;"><a href="javascript:;">退出登录</a></li>
              </ul>
            </li>
            <li class="line">|</li>
            <li><router-link :to="{path:'/personal/myOrder/index'}"><i class="iconfont icon-daohang"  style="margin-right:6px;"></i>&nbsp;我的订单</router-link></li>
            <li class="line">|</li>
            <li><router-link to="/help/index">帮助中心</router-link></li>
            <li v-if="isLogin" class="line">|</li>
            <li><router-link v-if="isLogin" :to="{path:'/personal/notification'}">我的消息</router-link></li>
            <li v-if="isLogin" class="line">|</li>
            <li><router-link v-if="isLogin" :to="{path:'/personal/index'}">个人中心</router-link></li>
          </ul>
        </div>
      </div>
      <div class="nav">
        <div class="w1100">
          <div class="logo">
            <router-link :to="{path:'/'}"><img src="../../assets/images/logo.png" alt=""></router-link>
          </div>
          <ul>
            <li><router-link :class="{active:path == '/index'}" :to="{path:'/'}">首页</router-link></li>
            <li><router-link :class="{active:path == '/tender'}" :to="{path:'/tender'}">魔毯招标</router-link></li>
            <li class="gongqiu">
              <a :class="{active:path == '/gongqiu'}" href="javascript:;">供求信息</a>
              <div class="second-nav">
                <router-link :to="{path:'/buy'}">
                  <span class="buy">买煤需求</span>
                </router-link>
                <router-link :to="{path:'/sell'}">
                  <span class="sell">卖煤需求</span>
                </router-link>
              </div>
            </li>
            <li class="price">
              <router-link :class="{active:path == '/industryPrice'}" :to="{path:'/industryPrice'}">行业价格</router-link>
              <!-- <div class="second-nav">
                <router-link :to="{path:'/industryPrice/CCTD'}">
                  <span>● CCTD</span>
                </router-link>
                <router-link :to="{path:'/industryPrice/CCI'}">
                  <span>● CCI</span>
                </router-link>
                <router-link :to="{path:'/industryPrice/BSPI'}">
                  <span>● BSPI</span>
                </router-link>
              </div> -->
            </li>
            <li><router-link :class="{active:path == '/logistics'}" :to="{path:'/logistics'}">魔毯物流</router-link></li>
            <li><router-link :class="{active:path == '/finance'}" :to="{path:'/finance'}">魔毯金融</router-link></li>
            <li><router-link :class="{active:path == '/information'}" :to="{path:'/information'}">魔毯资讯</router-link></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
    <mt-footer></mt-footer>
    <div class="float-box" :class="{ show }">
      <div class="btn scrollTop" @click="goTop"></div>
      <div class="btn wechat">
        <div class="qr">
          <img src="../../assets/images/qr.jpg" alt="">
          <p>关注“魔毯大宗”</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import mtFooter from './footer';
export default {
  components: {mtFooter},
  data() {
    return {
      path: '',
      show: false,
      isLogin: false,
      name: '',
      noticeList: []
    };
  },
  created() {
    this.path = this.$route.meta.nav;
    let name = localStorage.getItem('name');
    if (name) {
      this.name = name;
      this.isLogin = true;
    }
    this.getSystemNotice();
  },
  watch: {
    $route: {
      handler: function(val, oldVal) {
        this.$nextTick(function() { // 页面加载完成后执行
          this.path = this.$route.meta.nav;
        });
      },
      // 深度观察监听
      deep: true
    }
  },
  methods: {
    goTop() {
      window.scrollTo(0, 0);
    },
    async getSystemNotice() {
      let { result } = await this.$axios.post(this.$api.systemNotice, {current: 1, size: 5});
      if (result.rows.length < 5) {
        let arr = [];
        let noticeList = arr.concat(result.rows).concat(result.rows).concat(result.rows).concat(result.rows).concat(result.rows);
        this.noticeList = noticeList.slice(0, 5);
      } else {
        this.noticeList = result.rows;
      }
    },
    layout() {
      this.$axios.get(this.$api.logout).then(res => {
        localStorage.setItem('name', '');
        this.$router.push('/redirect');
      });
    }
  },
  mounted() {
    let self = this;
    window.addEventListener('scroll', function(e) {
      let scrollTop = document.body.scrollTop + document.documentElement.scrollTop;
      if (scrollTop > 500) {
        self.show = true;
      } else {
        self.show = false;
      }
    });
  }
};
</script>

<style src="./index.scss"  lang="scss" scoped></style>
