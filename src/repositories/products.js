
import Repository from "./PublicRepository";
const resource = "product";

export default {
  getAllProduct() {
    return new Promise((resolve, reject) => {
      Repository.get(`${resource}/list/`)
        .then((response) => {
          resolve(response.data);
        })
        .catch((error) => {
          reject(error.response);
        });
    });
  }
  
};
