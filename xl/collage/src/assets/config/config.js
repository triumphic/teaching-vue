// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import { api } from './interface_api'
import VueAxios from 'vue-axios'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.min.css'
Vue.use(VueAxios,axios,Mint)
import { Lazyload,Toast } from 'mint-ui';
Vue.use(Lazyload);
// 添加请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
  //显示loding
  let token = window.localStorage.getItem('token')
  let sex = window.localStorage.getItem('sex')
   // 把source放到header里面
   config.headers['source'] = 6001
  return config
}, function (error) {
  // 对请求错误做些什么
  console.log('错误的传参')
  return Promise.reject(error)
})

//拦截相应response，并做一些错误处理
axios.interceptors.response.use((response) => {
  // 对响应数据做些事
//console.log(response)
  if (!response.data) {
    return Promise.reject(response)
  }
  return response
}, (error) => {
	//这里是返回状态码不为200时候的错误处理
	if (error.toString().indexOf("timeout") != -1) {
	    console.log('请求超时，请稍后再试')
	    Toast({
					  message: '请求超时，请稍后再试',
					  duration: 3000
					});
	 }
	if(error && error.response){
		switch(error.response.status) {
			case 400:
		    	error.message = '请求错误'
		        break
		
		    case 401:
		      	error.message = '未授权，请登录'
		        break
		
		    case 403:
		        error.message = '拒绝访问'
		        break
		
		    case 404:
//		        error.message = `请求地址出错: ${error.response.config.url}`
		        error.message = `请求地址出错404`
		        break
		        
		    case 405:
		        error.message = '请求不被允许，请检查接口调用方式'
		        break
		
		    case 408:
		        error.message = '请求超时'
		        break
		
		    case 500:
		        error.message = '服务器开个小差，请稍后再试'
		        break
		
		    case 501:
		        error.message = '服务器开个小差，请稍后再试'
		        break
		
		    case 502:
		        error.message = '服务器开个小差，请稍后再试'
		        break
		
		    case 503:
		        error.message = '服务器开个小差，请稍后再试'
		        break
		
		    case 504:
		        error.message = '服务器开个小差，请稍后再试'
		        break
		
		    case 505:
		        error.message = 'HTTP版本不受支持'
		        break
		
		    default:
		}
	}
	console.log(error.message)
	Toast({
				  message: error.message,
				  duration: 3000
				});
	return Promise.reject(error)
})

Vue.prototype.$axios = axios

//接口地址
Vue.prototype.URL = api
export{
	Vue
}

