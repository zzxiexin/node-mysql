import axios from 'axios';
console.log(process.env)
const instance = axios.create({
    baseURL: process.env.VUE_APP_API,
    timeout: 8000
})

export function get_qq(qq) {
    return instance.get(`/get/${qq}`)
}
export function add_qq({ qq, mima }) {
    return instance.post('/add_qq', {
        qq,
        mima
    })
}
export function del_qq(qq) {
    console.log(qq)
    return instance.post('/del_qq', {
        qq
    })
}
export function update_qq({qq, mima}) {
    return instance.put('/update_qq', {
        qq,
        mima
    })
}