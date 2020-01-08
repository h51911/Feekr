import axios from 'axios'

const Zixun = axios.create({
    baseURL: 'https://wapi.feekr.com/news/lists'
})

export const get = async (params, config = {}) => {
    let data=await Zixun.get('', {
        ...config,
        params
    })

    return data;
}

export default {
    get
}