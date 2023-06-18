import axios from "axios";

export const axiosRequest = (method, url, data, params, username) => {
    var request = axios.create({
        // 后台接口的基准地址
        baseURL: "http://120.26.83.172:8080",
        timeout: 5000,
    })

    return request({
        method: method,
        url: url,
        data: data,
        params: {
            token: params,
            username: username
        }
    })
}