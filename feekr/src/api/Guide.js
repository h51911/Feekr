import axios from 'axios'
// import qs from 'qs'
const com = axios.create({
    baseURL: 'https://wapi.feekr.com/guide/'
});

export const detail = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('detail', {
        ...config,
        params
    })
    return data
}
export const guidecategory = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('guidecategory', {
        ...config,
        params
    })
    return data
}
export const themelist = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('themelist', {
        ...config,
        params
    })
    return data
}
export const pathlist = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('pathlist', {
        ...config,
        params
    })
    return data
}
export const articlelist = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('articlelist', {
        ...config,
        params
    })
    return data
}
export const shoplist = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('shoplist', {
        ...config,
        params
    })
    return data
}
export const nearby = async (params, config = {}) => {
    // console.log(params, config)
    let { data } = await com.get('nearby', {
        ...config,
        params
    })
    return data
}



export default {
    detail,
    guidecategory,
    themelist,
    pathlist,
    articlelist,
    shoplist,
    nearby
}