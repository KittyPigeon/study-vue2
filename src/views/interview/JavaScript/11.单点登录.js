// 单点登录逻辑
// 单点登录实现方式
// 一、同域名下的单点登录
// a.利用cookie实现单点登录 主域名：baidu.com=>tieba.baidu.com ;map.baidu.com 
// 二、不同域名下的单点登录
// 1.部署一个认证中心 ；没有token，跳转至认证中心
// 2.将sessionid 存储在localStorage中 
