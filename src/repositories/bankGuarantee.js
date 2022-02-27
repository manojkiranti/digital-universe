import Repository from "./Repository";

const resource = "online-service";

export default {
  getList(params) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/bank-guarantee-list/`,{params})
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  },
  postDetail(payload) {
    return new Promise((resolve, reject) => {
      Repository.post(`${resource}/bank-guarantee/`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
};
