import axios from 'axios'
import router from '../router'
// import Toasted from 'vue-toasted'
// Vue.use(Toasted);

let baseEndpoint = process.env.VUE_APP_BASE_URL_DEV;
// if (process.env.NODE_ENV === 'development') {
//     baseEndpoint = process.env.VUE_APP_BASE_URL_DEV
// } else {
//     baseEndpoint = '/api'
// }
// baseEndpoint = "http://10.11.154.6/api/"
// const { getToken } = require('../lib/storage');

const instance = axios.create({
    baseURL: baseEndpoint,
    timeout: 50000 // request timeout
});





export default instance
