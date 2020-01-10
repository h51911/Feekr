import axios from 'axios'

const Goodlist = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/product/'
})

export const get = async (params, config = {}) => {
    let data=await Goodlist.get('detail', {
        ...config,
        params
    })

    return data;
}
export const getlike = async (params, config = {}) => {
    let data=await Goodlist.get('like', {
        ...config,
        params
    })

    return data;
}

export default {
    get,
    getlike
}