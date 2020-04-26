//插件模板
import axios from 'axios'
const MyPlugin = {}

MyPlugin.install =  (Vue) => {
    //基准地址
  axios.defaults.baseURL = 'http://localhost:13001'
    // 4. 添加实例方法
    Vue.prototype.$http = axios
  }

  export default MyPlugin