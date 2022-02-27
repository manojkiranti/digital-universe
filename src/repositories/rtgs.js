import Repository from "./Repository";

const resource = "online";

export default {
  getList(params) {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/rtgs-list/`,{params})
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
      Repository.post(`${resource}/rtgs/`, payload)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
};
