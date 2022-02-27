import axios from 'axios'
let baseEndpoint = process.env.VUE_APP_BASE_URL_DEV;
// if (process.env.NODE_ENV === 'development') {
//     baseEndpoint = process.env.VUE_APP_BASE_URL_DEV
// } else {
//     baseEndpoint = '/api'
// }
// baseEndpoint = "http://10.11.154.6/api/"

const { getTempToken } = require('../lib/storage');
const resource = '';

export default {
  login(payload) {      
    return new Promise((resolve, reject) => {
      axios.post(`${baseEndpoint}auth/login/`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  register(payload) {      
    return new Promise((resolve, reject) => {
      axios.post(`${baseEndpoint}auth/register/`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  verifyOtp(payload) {      
    return new Promise((resolve, reject) => {
      axios.post(`${baseEndpoint}auth/verify-otp/`, payload, {
        headers: {
          'Authorization': `Bearer ${getTempToken()}`
        }
      })
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  changePassword(payload) {
    return new Promise((resolve, reject) => {
      axios.post(`${baseEndpoint}${resource}change_password`, payload)
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  },
  logout() {
    return new Promise((resolve, reject) => {
      axios.post(`${resource}/logout`, {})
        .then(response => {
          resolve(response.data);
        })
        .catch(error => {
          reject(error.response);
        });
    });
  }
};
