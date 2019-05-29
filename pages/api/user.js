import axios from './axios'
let baseUrl = '/api'
export const login = (params) => {
  return axios('post', '/login', params)  // 登录接口
}

export const getUserInfo = (params) => {
  return axios('get', '/user/info', params)  // 获取用户信息
}

export const register = (params) => {
  return axios('post', '/user/register', params)  // 用户注册
}

export const editPwd = (params) => {
  return axios('post', '/user/editPwd', params)  // 修改密码
}

export const sendSms = (params) => {
  return axios('get', '/sms/send', params)  // 发送验证码
}
