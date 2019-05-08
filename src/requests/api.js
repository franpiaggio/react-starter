import axios from 'axios';

const localUrl = '/data';
const serverUrl = "https://optiwe.com";
let api;

let localApi = {
    test() {
        return {
            test: (param) => axios.get(`${localUrl}/test.json?${param}`),
        }
    }
};

let productionApi = {
    // Production only requests
    test() {
        return {
            test: (param) => axios.get(`${serverUrl}/test.json?${param}`),
        }
    }
};

process.env.NODE_ENV === 'development' ? api = localApi : api = productionApi;

export default api;