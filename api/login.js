import request from '@/utils/request'

export default {
    //登录的方法
  submitLoginUser(username,password) {
    return request({
      url: `/clms/login`,
      method: 'post',
      data: username,
            password
    })
  },

  //根据token获取用户信息
  getLoginUserInfo() {
    return request({
      url: '/acl/info',
      method: 'get'
    })
  }

}