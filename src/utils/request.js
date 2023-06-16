import axios from 'axios'


var request = axios.create({
    // 后台接口的基准地址
    baseURL: "http://localhost:3000",
    timeout: 5000
})

export default request