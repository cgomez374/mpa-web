import React,{useEffect, useContext} from 'react';
import Link from 'next/link';
import RegisterIcon from './RegisterIcon';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { GlobalContext } from "../contexts/provider";
import { register } from "../contexts/actions/auth/register";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGoogleLogin } from 'react-google-login';
import { useFacebookLogin } from "react-use-fb-login";
import { login } from '../contexts/actions/auth/login';


function RegisterSection() {

    // client ids
    const clientId =
  '560139434715-36o7v8kif9lfp2s7sc99o6cfmtshrpre.apps.googleusercontent.com';

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

    const [submit, setSubmit] = useState(false)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('');
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
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password,
        confirmPassword: ConfirmPassword
    }

    // redirecting the user

    useEffect(() => {
        if (data && submit) {
            toast.success('successfull registered', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
                setTimeout(() => {
                    window.location.href = '/login'
                    setSubmit(false)
                }, 3000);
            
        }
      }, [data]);
    

    // handling the form submission 

    const handleSubmit = async (e) => {


        e.preventDefault();  
        setSubmit(true)

        
        // checking if fields are correct

         if(email == '' || name == '' || password == '' || ConfirmPassword == ' '){
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
           name !== '' || 
           password !== '' || 
           ConfirmPassword !== ' ') &&
           (email.length > 5  && regEmail.test(email)) &&
           ( password.length >= 6) && 
           (password === ConfirmPassword)){

            setSpin(true)

            register(body)(authDispatch);
            

        }
               
    }

    const onSuccess = (res) => {
        console.log('social auth Login Success: currentUser:', res.profileObj);
        
        // refreshTokenSetup(res);
      };
    
      const onFailure = (res) => {
        console.log('social auth Login failed: res:', res);
      };
    
      const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
      });



      // facebook

      const facebookProps = {
        appId: "460712018474173",
        language: "EN",
        version: "3.1",
        fields: ["id", "email", "name"],
        onFailure: error => {
          console.log(error);
        }
      };
      const [{ loaded, currentUser, isLoggedIn }, login, logout] = useFacebookLogin(
        facebookProps
      );

    //   const onSuccess = response => console.log(response);
    //   const onFailure = response => console.error(response);

      
      
     


    return (
        <div className="tw-bg-gradient-to-r tw-from-pink-500 tw-to-yellow-500 tw-p-10">
            {/* main */}
            <div className="tw-flex tw-flex-row register__container">
                {/* form box */}
                <div className="tw-bg-primary-100  tw-w-1/2 tw-text-center  no-border1">
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

                                {email.length > 1  && !regEmail.test(email) && submit && (<p className="tw-text-red-400 tw-text-left tw-justify-items-start tw-text-xs tw-ml-2">Email is invalid</p>)}

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

                                {password.length < 6 && submit && (<p className="tw-text-red-400 tw-text-left tw-justify-items-start tw-text-xs tw-ml-2">Password too short</p>)}

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
                                        type="password"
                                        className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                                        placeholder='Confirm password'
                                        value={ConfirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value) }
                                                            />
                                </div>
                                {(password !== ConfirmPassword) && submit && (<p className="tw-text-red-400 tw-text-left tw-justify-items-start tw-text-xs tw-ml-2">Password don't match</p>)}
                                
                             <div className=" tw-w-2/3">
                            <button type="submit"  className="tw-my-4 tw-m-auto tw-border tw-border-primary-100
                             tw-bg-primary-100 tw-text-gray-200 tw-w-full tw-h-10 hover:tw-bg-gray-200
                              hover:tw-text-gray-700 hover:tw-border-primary-100 tw-transition tw-duration-500 
                              tw-ease-in-out tw-transform tw-flex tw-flex-row tw-items-center tw-justify-even tw-justify-center">{spin && loading && (<img src="../../loader.svg" alt="Loader" className="tw-w-3 tw-h-3 mx-2 tw-animate-spin" />)}SIGN UP</button>
                            </div>
                        </form>

                        </div>
                        
                        <div>
                       <p className="tw-text-sm tw-font-light tw-my-4 tw-text-gray-700">Or you can use below social platforms for registration</p>
                        
                        <div className="tw-justify-self-center tw-items-center icon__box">
                            {/* auth icons */}
                            <div className="tw-flex tw-flex-row">
                                {/* icon */}

                                <div className="social-auth" onClick={signIn}>
                                    <img src={`./assets/images/favicons/google.svg`} className="tw-w-4 tw-h-4" />
                                </div>

                                <div className="social-auth " onClick={login}>
                                    <img src={`./assets/images/favicons/facebook.svg`} className="tw-w-4 tw-h-4" />
                                </div>

                                <div className="social-auth ">
                                    <Link href=''><img src={`./assets/images/favicons/github.svg`} className="tw-w-4 tw-h-4" /></Link>
                                </div>
                
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
