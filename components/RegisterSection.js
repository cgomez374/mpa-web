import React,{useEffect, useContext} from 'react';
import Link from 'next/link';
import RegisterIcon from './RegisterIcon';
import { useRouter } from 'next/router';
import { useState } from 'react';
import {authContext} from '../contexts/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function RegisterSection() {

    // all form states  
    const router = useRouter();
    const [name, setName] = useState('');
    let firstName = '';
    let lastName = '';

    // checking first name and lastname

    if((name.split(' ')).length < 2){
        firstName = name
        lastName = name
    }
    else{
     firstName = name.split(' ')[0];
     lastName = name.split(' ')[1];
    }

     
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
    const {loggedin, error, signup, message} = useContext(authContext)
    let errors = false;
    const valid = (password.length > 6) && (password === ConfirmPassword) && (email !== '' || name !== '' || password !== '' || ConfirmPassword !== ' ');

    let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    // the body to be sent to the api
    const body = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: ConfirmPassword
    }


    // handling the form submission 

    const handleSubmit = (e) => {

        e.preventDefault();       

        // checking if email is correct


        if(!regEmail.test(email)){

            errors = true

                toast.error('Email is Invalid', {
                    position: "top-right",
                    autoClose: 3000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                    
        }

         if(password.length < 6){

            errors = true

            toast.error('Password needs to be 6 characters long', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }   

         if(password !== ConfirmPassword){
            errors = true

            toast.error('Password needs to match', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
        }

         if(email == '' || name == '' || password == '' || ConfirmPassword == ' '){
            errors = true

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



            //passing in the body

            signup(body) 
            
            setTimeout(() => {
                if(error == false && valid) {
                    toast.success(message, {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                        setConfirmPassword('')
                        setEmail('')
                        setName('')
                        setPassword('')
                        setTimeout(() => {
                             router.push('/login')
                        }, 4000);
               
                }
    
                if(error == true && valid){
                    toast.error(message || 'some problem occured', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: true,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        });
                       
                }
           }, 4000);

            


        
    }

    return (
        <div className="tw-bg-gradient-to-r tw-from-pink-500 tw-to-yellow-500 tw-p-10">
            {/* main */}
            <div className="tw-flex tw-flex-row register__container">
                {/* form box */}
                <div className="image-bg  tw-w-1/2 tw-text-center  no-border1">
                    {/* left blue side */}
                    <div className="tw-text-gray-200 tw-m-5 tw-w-9/11">
                        {/* content container */}
                        <h2 className="tw-font-bold tw-text-4xl tw-my-4">Register Your interest!!</h2>
                        <div className="tw-m-auto tw-text-center md:tw-w-9/12 xl:tw-w-9/12 sm:tw-w-full my-4">
                        <p className="tw-font-normal tw-text-sm ">To keep connected with us please login with your personal info If you already have an account, You will be required to use your registered email and password </p>
                        </div>
                        <Link href="/login"><button type="button" className="tw-my-4 tw-border tw-border-gray-200 tw-w-1/2 tw-h-10 hover:tw-bg-gray-200 hover:tw-text-gray-700 tw-transition tw-duration-500 tw-ease-in-out tw-transform">SIGN IN</button></Link>
                    </div>
                </div>
                <div className="tw-bg-gray-100 tw-w-1/2 tw-text-center tw-place-items-center tw-items-center form__holder no-border2">
                    {/* right white side */}
                    <div className="tw-text-primary-100 tw-m-5 tw-flex tw-flex-col ">
                        {/* content container */}
                        <h2 className="tw-font-medium tw-text-4xl tw-my-4">Create Account</h2>
                        <div className="form__box">
                            {/* form */}
                            <form action="" onSubmit={handleSubmit} className="tw-p-auto tw-m-auto">

                                {/* user name */}

                                <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-2/3 inp">
                                    <div className="tw-flex tw-justify-center tw-w-15 ">
                                        <span
                                            className="tw-flex tw-items-center tw-leading-normal tw-bg-white tw-px-3 tw-border-0 tw-rounded tw-rounded-r-none tw-text-md tw-text-gray-600"
                                        >
                                            <i className='fas fa-user-circle'></i>
                                        </span>
                                    </div>
                                        <input
                                        type="text"
                                        className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                                        placeholder='Your name'
                                        value={name}
                                        onChange={(e) => setName(e.target.value) }
                                                            />
                                </div>

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
                                        type="text"
                                        className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                                        placeholder='Your password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value) }
                                                            />
                                </div>
                                {/* user confirm password */}

                                <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-2/3 inp">
                                    <div className="tw-flex tw-justify-center tw-w-15 ">
                                        <span
                                            className="tw-flex tw-items-center tw-leading-normal tw-bg-white tw-px-3 tw-border-0 tw-rounded tw-rounded-r-none tw-text-md tw-text-gray-600"
                                        >
                                            <i className='fas fa-lock'></i>
                                        </span>
                                    </div>
                                        <input
                                        type="text"
                                        className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                                        placeholder='Confirm password'
                                        value={ConfirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value) }
                                                            />
                                </div>
                                
                             <div className=" tw-w-2/3">
                            <button type="submit"  className="tw-my-4 tw-m-auto tw-border tw-border-primary-100 tw-bg-primary-100 tw-text-gray-200 tw-w-full tw-h-10 hover:tw-bg-gray-200 hover:tw-text-gray-700 hover:tw-border-primary-100 tw-transition tw-duration-500 tw-ease-in-out tw-transform">SIGN UP</button>
                            </div>
                        </form>

                        </div>
                        
                        <div>
                       <p className="tw-text-sm tw-font-light tw-my-4 tw-text-gray-700">Or you can use below social platforms for registration</p>
                        
                        <div className="tw-justify-self-center tw-items-center icon__box">
                            {/* auth icons */}
                            <div className="tw-flex tw-flex-row">
                                {/* icon */}
                                <RegisterIcon icon="linkedin" link="" />
                                <RegisterIcon icon="github" link="api/auth/signin" />
                                <RegisterIcon icon="facebook" link="" />
                                <RegisterIcon icon="google" link="" />
                            </div>
                        </div>
                    </div>

                       
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

export default RegisterSection;
