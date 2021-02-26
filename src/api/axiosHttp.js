import axios from "axios";
import queryString from "query-string";

const axiosHttp = axios.create({
        baseURL: "http://localhost:8080",
        headers: {
        "Content-type": "application/json",
    },
        paramsSerializer: param => queryString.stringify(param),
    }
)

export default axiosHttp;
