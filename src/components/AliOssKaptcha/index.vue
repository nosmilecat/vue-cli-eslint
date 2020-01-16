<template>
  <div id="kaptcha">

  </div>
</template>
<script>
export default {
  data() {
    return {
      nc: null
    };
  },
  methods: {
    init() {
      var ncToken = ['FFFF0N00000000008075', (new Date()).getTime(), Math.random()].join(':');
      var NCOpt =
      {
        renderTo: '#kaptcha',
        appkey: 'FFFF0N00000000008075',
        scene: 'nc_login',
        token: ncToken,
        customWidth: 300,
        trans: {'key1': 'code0'},
        elementID: ['usernameID'],
        is_Opt: 0,
        language: 'cn',
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {
          // 'analyze': '//a.com/nocaptcha/analyze.jsonp',
          // 'get_captcha': '//b.com/get_captcha/ver3',
          // 'get_captcha': '//pin3.aliyun.com/get_captcha/ver3'
          // 'get_img': '//c.com/get_img',
          // 'checkcode': '//d.com/captcha/checkcode.jsonp',
          // 'umid_Url': '//e.com/security/umscript/3.2.1/um.js',
          // 'uab_Url': '//aeu.alicdn.com/js/uac/909.js',
          // 'umid_serUrl': 'https://g.com/service/um.json'
        },
        callback: (data) => {
          this.$emit('callback', {token: ncToken, sessionid: data.csessionid, sig: data.sig, scene: 'nc_login'});
        }
      };
      this.nc = new noCaptcha(NCOpt);
      this.nc.upLang('cn', {
        _startTEXT: '请按住滑块，拖动到最右边',
        _yesTEXT: '验证通过',
        _error300: '哎呀，出错了，点击<a href="javascript:__nc.reset()">刷新</a>再来一次',
        _errorNetwork: '网络不给力，请<a href="javascript:__nc.reset()">点击刷新</a>'
      });
    },
    reload() {
      this.nc.reload();
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss">
  .nc_scale {
    height: 40px;
  }
  .nc-container .nc_scale span {
    height: 40px;
    line-height:40px;
    box-sizing: border-box;
  }
  .nc-container .nc_scale .btn_ok {
    line-height: 40px;
  }
  .nc-container .nc_scale .nc_ok, .nc-container .nc_scale .nc_bg {
    background: $base-color;
  }
</style>
