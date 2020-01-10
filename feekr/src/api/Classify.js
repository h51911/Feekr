import axios from 'axios'

const Classify = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/product/'

})

export const gets = async (params, config = {}) => {
    let data = await Classify.get('search_item', {
        ...config,
        params
    })

    return data;
}

export const datas = async (params, config = {}) => {
    let data = await Classify.get('search', {
        ...config,
        params
    })

    return data;
}

export default {
    gets,
    datas
}