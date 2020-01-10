import axios from 'axios'

const Classify = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/product/search_item?style[]=0&city[]=&keyword=&shopid=FK'
    
})

export const get = async (params, config = {}) => {
    let data = await Classify.get('', {
        ...config,
        params
    })

    return data;
}

export default {
    get
}