import Repository from "./Repository";

const resource = "users";

export default {
    getDocuments() {
        return new Promise((resolve, reject) => {
            Repository.post(`${resource}/documents/`)
            .then((response) => {
                resolve(response.data);
            })
            .catch((error) => {
                reject(error.response);
            });
        });
    },
    uploadDocument(payload) {
        var config = {
            onUploadProgress: function(progressEvent) {
              var percentCompleted = Math.round( (progressEvent.loaded * 100) / progressEvent.total );
              console.log(percentCompleted)
            }
          };
        return new Promise((resolve, reject) => {
        Repository.post(`${resource}/documents/`, payload, config)
            .then((response) => {
            resolve(response.data);
            })
            .catch((error) => {
            reject(error.response);
            });
        });
    },
}