import { Message } from 'element-ui';
export default function ({$axios, redirect}) {
  $axios.interceptors.request.use(function (config){
    // 处理请求之前的配置
    config.timeout = 10 * 1000 //请求响应时间
    return config;
  }, function (error){
    // 请求失败的处理
    return Promise.reject(error);
  });
  $axios.onRequest(config => {
    let token = sessionStorage.getItem('token');
      if(token){
        token = 'Bearer ' + token
        config.headers["Authorization"] = token;
      }
    if (config.method == 'get') {

    }
  });

  $axios.onResponse(function (response) {
    console.log(111)
    if ((response.config.url.indexOf('/login') != -1) && (response.data.code == 200)) {
      console.log(222)
      let token = response.headers['authentication-info']
      console.log(token)
      sessionStorage.setItem('token', token)
    }
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code == 401) {
      Message({
        message: error.response.data.errMsg,
        type: 'error'
      });
    } else if (code >= 400 && code < 500) {
      Message({
        message: error.response.data.msg,
        type: 'error'
      });
    } else if (code == 500) {
      Message({
        message: '服务器内部错误',
        type: 'error'
      });
    }

    // if (code === 400) {
    //   redirect('/400')
    // }
  })
}
