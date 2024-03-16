import axios from "axios";


//Creamos nuestra instancia de axios 
const authApi = axios.create({
  baseURL: 'http://localhost:3000/api'
});

authApi.interceptors.request.use((config:any)=>{

    config.headers = {
      'Authorization' : localStorage.getItem('token')
    };

    return config
});

export default authApi;