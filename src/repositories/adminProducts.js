import Repository from "./Repository";

const resource = "product/admin";

export default {
    getProducts() {
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

}