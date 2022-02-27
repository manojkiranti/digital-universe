import Repository from "./Repository";

const resource = "auth";

export default {
    getUserDetail() {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/profile/`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response);
            });
        });
    },
}