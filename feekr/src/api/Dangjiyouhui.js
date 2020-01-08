import axios from 'axios'

const Dangjiyouhui = axios.create({
    baseURL: 'https://wapi.feekr.com/product/module'
})
export const get = async (params, config = {}) => {
    let data=await Dangjiyouhui.get('', {
        ...config,
        params
    })
  
    return data;
}

export default {
    get
}