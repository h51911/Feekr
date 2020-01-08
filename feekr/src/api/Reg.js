import axios from 'axios'
import qs from 'qs'
const reg = axios.create({
    baseURL: 'http://localhost:2020/user/reg'
});

export const post = async (params, config = {}) => {
    console.log(params, config)
    let dataobj = qs.stringify({
        params
    })
    let { data } = await reg.post('', {
        ...config,
        dataobj
    })
    return data
}


export default {
    post
}