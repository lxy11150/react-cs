import request from '../utils/request'


export const getNewsList = (url, method, data, parmas) => {
    return request({
        url: url,
        method: method,
        data: data,
        params: parmas
    })
}