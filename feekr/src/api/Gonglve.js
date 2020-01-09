import axios from 'axios'
// import qs from 'qs'
const com = axios.create({
    baseURL: 'http://localhost:2020/'
});

export const citylist = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('gonglve', {
        ...config,
        params
    })
    return data
}
export const cityrecommend = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('frist', {
        ...config,
        params
    })
    return data
}


export default {
    citylist,
    cityrecommend
}