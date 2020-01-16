// import axios from 'axios'
import router from '../router';
// import Vue from 'vue'
// import store from '../store';
axios.defaults.baseURL = '/api'; // 本地
axios.defaults.headers['Content-Type'] = 'application/json;charset=UTF-8';
if (process.env.NODE_ENV === 'production') { axios.defaults.baseURL = '/api'; }

// 添加请求拦截器
axios.interceptors.request.use(function(config) {
  // 在发送请求之前做些什么
  // config.headers['Authorization'] = sessionStorage.getItem('token');
  // if(sessionStorage.getItem('userInfo'))
  //   config.headers['user'] = JSON.parse(sessionStorage.getItem('userInfo')).id;
  return config;
}, function(error) {
  return Promise.reject(error.data.error.message);
});

// 添加响应拦截器
axios.interceptors.response.use(function(response) {
  if (response.headers.sessionstatus === 'timeout') {
    localStorage.setItem('name', '');
    router.push('/login');
  }

  // 对响应数据做点什么
  // console.log(response.data)
  if (response.data.code === 200) {
    return response.data;
  } else if (!response.data.code) { // 处理blob数据返回
    return response.data;
  } else {
    if (response.data.message) Vue.prototype.$message({ message: response.data.message, type: 'error' });
  }
}, function(error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default axios;
