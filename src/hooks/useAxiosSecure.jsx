import axios from "axios";
import useAuth from "./useAuth";
import { useEffect } from "react";
import { useNavigate } from "react-router";

const instance = axios.create({
  baseURL: 'http://localhost:3000'
 
}); 

const useAxiosSecure = () => {
const {user,signOutUser}=useAuth()
const navigate=useNavigate()
  useEffect(() => {

    // request interceptor 
  const requestInterceptor=instance.interceptors.request.use((config) => {
    console.log(config);
    const token = user.accessToken
    if (token) {
      
      config.headers.Authorization=`Bearer ${token}`
    }
        return config;
  })
    
    // response interceptors
  const responseInterceptor=  instance.interceptors.response.use(res => {
      return res;
    }, err => {
      const status = err.status;
      console.log(status);
      
      if (status === 303 || status ==401) {
        console.log('log out the user for bad request');
        signOutUser()
          .then(() => {
            // navigator user to the login page 
            navigate('/register')
        })
      }
      console.log('error inside the interceptor',err);
      
    })

    return () => {
      instance.interceptors.request.eject(requestInterceptor)
      instance.interceptors.response.eject(responseInterceptor)
    }
  },[user,signOutUser,navigate])

    return instance
}
export default useAxiosSecure