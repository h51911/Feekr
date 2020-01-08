import axios from 'axios'

const Mudidi = axios.create({
    baseURL: 'https://wapi.feekr.com/guide/cityrecommend'
})
export const get = async (params, config = {}) => {
    let data=await Mudidi.get('', {
        ...config,
        params
    })
  
    return data;
}

export default {
    get
}