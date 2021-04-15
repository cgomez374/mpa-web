import React, {useState, useEffect, useContext, createContext} from 'react'
import axios from 'axios';
import { useRouter } from 'next/router';
export const authContext = createContext();

export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}



function useProvideAuth() {

    const router = useRouter();

    const [user, setUser] = useState({});
    const [message, setMessage] = useState('')
    const [token, setToken] = useState('')
    const [loggedin, setLoggedin] = useState(false)
    const [error, setError] = useState(true);


    // signin 

    // const signin = (body) => {
    //     axios.post('https://koinstreet-learn-api.herokuapp.com/api/v1/user/signup', body).then((response)=>{
    //         console.log(response)
    //     })
    //  };

    // signup

    const signup = (body) => {
       axios.post(`https://koinstreet-learn-api.herokuapp.com/api/v1/user/signup`, body).then((response)=>{

            setUser(response.data)
            setMessage(response.message)
            
           setError(false)
           setMessage(response.data.message)
           
           return response.data
        
            

       }).catch((res)=>{
           setMessage(res.response.data.data.message.msg);
           setError(true)
           setTimeout(() => {
            router.push('/register')
       }, 10);
       return res
       })


    };


    // const signup = (email, password) => {
    //    setUser()
    // };


    return {
        loggedin,
        user,
        error,
        message,
        signup,
    };
}