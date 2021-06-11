import React,{useEffect, useContext, useState} from 'react';
import Link from 'next/link';

import RegisterIcon from './RegisterIcon';
import { useRouter } from 'next/router';
import { GlobalContext } from "../contexts/provider";
import { login } from "../contexts/actions/auth/login";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function LoginSection() {

    const router = useRouter();

    const [loginSubmit, setLoginSubmit] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [spin, setSpin] = useState(false);

    // states from global context
    const {
        authDispatch,
        authState: {
          auth: { loading, error, data },
        },
      } = useContext(GlobalContext);

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    // the body to be sent to the api
    const body = {
        email: email,
        password: password,
    }

    


    // user redirect


        useEffect(() => {
            const token = window.localStorage.getItem('jwtToken');
            if (data || token !== null) {

                    window.location.href = '/dashboard/'

                setLoginSubmit(false)
            }
            else{
                // router.push('/login')
                // window.location.href = '/login'
                setLoginSubmit(false)
            }
        }, [data]);

1   // handling the form submission 

        const handleSubmit = async (e) => {


            e.preventDefault();  
            setLoginSubmit(true)
            
            // checking if fields are correct
    
             if(email == '' || password == ''){
                toast.error('All fields are required', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
            } 
    
            if((email !== '' || 
               password !== '') &&
               (email.length > 5  && regEmail.test(email)) &&
               ( password.length >= 6)){

                setSpin(true)
    
                login(body)(authDispatch);

                setLoginSubmit(false)
   
                // if(loading){
                //     // router.push('dashboard/user/updateProfile')
                // }
    
            }
                   
        }

    return (
        <div className="tw-bg-gradient-to-r tw-from-pink-500 tw-to-yellow-500 tw-p-10">
            {/* main */}
            <div className="tw-flex tw-flex-row register__container  tw-mt-20">
                {/* form box */}
                <div className="tw-bg-primary-100 tw-w-1/2 tw-text-center  no-border1">
                    {/* left blue side */}
                    <div className="tw-text-gray-200 tw-m-5 tw-w-9/11">
                        {/* content container */}
                        <h2 className="tw-font-bold tw-text-4xl tw-my-4">Welcome Back!</h2>
                        <div className="tw-m-auto tw-text-center md:tw-w-9/12 xl:tw-w-9/12 sm:tw-w-full my-4">
                        <p className="tw-font-normal tw-text-sm ">If you don't have an existing account with us, feel free to Register by clicking on the below Sign up button, You will be asked to fill in your detailed information</p>
                        </div>
                        <Link href="/register"><button type="button" className="tw-my-4 tw-border tw-border-gray-200 tw-w-1/2 tw-h-10 hover:tw-bg-gray-200 hover:tw-text-gray-700 tw-transition tw-duration-500 tw-ease-in-out tw-transform">SIGN UP</button></Link>
                    </div>
                </div>
                <div className="tw-bg-gray-100 tw-w-1/2 tw-p-3 tw-text-center tw-place-items-center tw-items-center form__holder no-border2">
                    {/* right white side */}
                    <div className="tw-text-primary-100 tw-m-5 tw-flex tw-flex-col ">
                        {/* content container */}
                        <h2 className="tw-font-medium tw-text-4xl tw-my-4">Log in</h2>
                        <div className="form__box">
                            {/* form */}
                            <form action="" onSubmit={handleSubmit} className="tw-p-auto tw-m-auto">
                                {/* <RegisterInputs icon="fas fa-user-circle" holder="Your name"/> */}
                                
                                 {/* user email */}

                                 <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-2/3 inp">
                                    <div className="tw-flex tw-justify-center tw-w-15 ">
                                        <span
                                            className="tw-flex tw-items-center tw-leading-normal tw-bg-white tw-px-3 tw-border-0 tw-rounded tw-rounded-r-none tw-text-md tw-text-gray-600"
                                        >
                                            <i className='fa fa-envelope'></i>
                                        </span>
                                    </div>
                                        <input
                                        type="text"
                                        className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                                        placeholder='Your Email'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value) }
                                                            />
                                </div>
                                {email.length > 1  && !regEmail.test(email) && loginSubmit && (<p className="tw-text-red-400 tw-text-left tw-justify-items-start tw-text-xs tw-ml-2">Email is invalid</p>)}

                                {/* user Password */}

                                <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-2/3 inp">
                                    <div className="tw-flex tw-justify-center tw-w-15 ">
                                        <span
                                            className="tw-flex tw-items-center tw-leading-normal tw-bg-white tw-px-3 tw-border-0 tw-rounded tw-rounded-r-none tw-text-md tw-text-gray-600"
                                        >
                                            <i className='fas fa-lock'></i>
                                        </span>
                                    </div>
                                        <input
                                        type="password"
                                        className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                                        placeholder='Your password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value) }
                                                            />
                                </div>

                                {password.length < 6 && loginSubmit && (<p className="tw-text-red-400 tw-text-left tw-justify-items-start tw-text-xs tw-ml-2">Password too short</p>)}


                                {/* <RegisterInputs icon="fas fa-lock" holder="Confirm password"/> */}
                             <div className=" tw-w-2/3">
                            <button type="submit" className="tw-animate-spin tw-my-4 tw-m-auto tw-border tw-border-primary-100 tw-bg-primary-100
                             tw-text-gray-200 tw-w-full tw-h-10 hover:tw-bg-gray-200 hover:tw-text-gray-700 
                             hover:tw-border-primary-100 tw-transition tw-duration-500 
                             tw-ease-in-out tw-transform tw-flex tw-flex-row tw-items-center tw-justify-even tw-justify-center">{spin && loading && (<img src="../../loader.svg" alt="Loader" className="tw-w-3 tw-h-3 mx-2 tw-animate-spin" />)} SIGN IN</button>
                            </div>
                        </form>

                        </div>
                        
                        <div>
                       <p className="tw-text-sm tw-font-light tw-my-4 tw-text-gray-700">Or you can use below social platforms to login</p>
                        
                        <div className="tw-justify-self-center tw-items-center icon__box">
                            {/* auth icons */}
                            <div className="tw-flex tw-flex-row">
                                {/* icon */}
                                <RegisterIcon icon="github" link="api/auth/signin" />
                                <RegisterIcon icon="facebook" link="" />
                                <RegisterIcon icon="google" link="" />
                            </div>
                        </div>
                        <Link href="/"><p className="tw-text-sm tw-font-light tw-my-4 tw-cursor-pointer tw-text-blue-900">forgot password?</p></Link>
                    </div>

                    <ToastContainer />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoginSection;
