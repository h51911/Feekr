import axios from 'axios'

const Like = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/home/guess_like'
})

export const get = async (params, config = {}) => {
    let data = await Like.get('', {
        ...config,
        params
    })

    return data;
}

export default {
    get
}