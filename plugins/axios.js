import { Message } from 'element-ui';
export default function ({$axios, redirect}) {
  // $axios.interceptors.request.use(function (config){
  //   // 处理请求之前的配置
  //   $axios.defaults.withCredentials = true;
  //   let token = sessionStorage.getItem('plSessionToken');
  //   if(token){
  //     $axios.defaults.headers["pl-token"] = token;
  //   }
  //   return config;
  // }, function (error){
  //   // 请求失败的处理
  //   return Promise.reject(error);
  // });
  $axios.onRequest(config => {
    console.log(config)
    let token = sessionStorage.getItem('SignSessionToken');
      if(token){
        config.headers["SignSessionToken"] = token;
      }
    if (config.method == 'get') {

    }
  });

  $axios.onResponse(function (response) {
  });

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    if (code == 401) {
      Message({
        message: error.response.data.errMsg,
        type: 'error'
      });
      setTimeout(() => {
        location.href = "/interview/admin/interviewer/login"
      }, 500)
    } else if (code >= 400 && code < 500) {
      Message({
        message: error.response.data.errMsg,
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
