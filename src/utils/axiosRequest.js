import axios from "axios";

export const axiosRequest = (method, url, data, params, username) => {
    var request = axios.create({
        // 后台接口的基准地址
        baseURL: "http://localhost:8080"
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