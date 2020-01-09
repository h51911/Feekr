import axios from 'axios'

const Goodlist = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/product/detail'
})

export const get = async (params, config = {}) => {
    let data=await Goodlist.get('', {
        ...config,
        params
    })

    return data;
}

export default {
    get
}