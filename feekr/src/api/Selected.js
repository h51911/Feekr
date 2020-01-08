import axios from 'axios'

const selected = axios.create({
    baseURL: 'https://wapi.feekr.com/editor/selected'
})

export const get = async (params, config = {}) => {
    let data=await selected.get('', {
        ...config,
        params
    })

    return data;
}

export default {
    get
}