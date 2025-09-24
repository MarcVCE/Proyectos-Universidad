import axios from "axios";

function axiosRequest(method: string, urlPath: string, data?:unknown) {

    return axios({
      method,
      url:urlPath,
      data
    })
} 

export default axiosRequest;