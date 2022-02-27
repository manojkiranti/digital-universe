import Repository from "./Repository";

const resource = "dashboard";

export default {
    getDashboardDetail() {
        return new Promise((resolve, reject) => {
            Repository.get(`${resource}/details/`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response);
            });
        });
    },
}