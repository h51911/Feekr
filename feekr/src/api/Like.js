import axios from 'axios'

const Like = axios.create({
    baseURL: 'https://wapi.feekr.com/shop/home/'
})

export const get = async (params, config = {}) => {
    let data = await Like.get('guess_like', {
        ...config,
        params
    })

    return data;
}

// export const names = async (params, config = {}) => {
//     let data = await Like.get('index', {
//         ...config,
//         params
//     })

//     return data;
// }

export default {
    get,
    // names
}