// 获取 token
export const getToken = () => {
    const savedData = localStorage.getItem('myData');
    if (savedData) {
        const { token, expirationTime } = JSON.parse(savedData);
        const currentTime = new Date().getTime();
        if (currentTime < expirationTime) {
            return token;
        } else {
            localStorage.removeItem('myData'); // 删除过期的 token
        }
    }
    return null;
};