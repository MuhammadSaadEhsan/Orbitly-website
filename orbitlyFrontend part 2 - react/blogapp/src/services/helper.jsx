import axios from "axios";
import { getToken } from "../Auth";

export const Base_URL = "http://localhost:8090";

export const myAxios = axios.create({
    baseURL: Base_URL,
    headers: {
        'Content-Type': 'application/json',
      },
})

export const privateAxios = axios.create({
    baseURL: Base_URL,
})

privateAxios.interceptors.request.use(config=>{
  const token = getToken()
  if(token){config.headers.Authorization = 'Bearer ' + token
  }
  return config
},erorr=>Promise.reject("Error "+error))




// config.headers.common.Authorization = 'Bearer ' + token
    