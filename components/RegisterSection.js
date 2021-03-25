import React from 'react';
import Link from 'next/link';
import RegisterInputs from './RegisterInputs';
import RegisterIcon from './RegisterIcon';

function RegisterSection() {
    return (
        <div className="tw-bg-gradient-to-r tw-from-pink-500 tw-to-yellow-500 tw-p-10">
            {/* main */}
            <div className="tw-flex tw-flex-row register__container">
                {/* form box */}
                <div className="tw-bg-primary-100  tw-w-1/2 tw-text-center  no-border1">
                    {/* left blue side */}
                    <div className="tw-text-gray-200 tw-m-5 tw-w-9/11">
                        {/* content container */}
                        <h2 className="tw-font-bold tw-text-4xl tw-my-4">Welcome Back!</h2>
                        <div className="tw-m-auto tw-text-center">
                        <p className="tw-font-normal tw-text-sm ">To keep connected with us please login with your personal info</p>
                        </div>
                        <Link href="/"><button type="button" className="tw-my-4 tw-border tw-border-gray-200 tw-w-1/4 tw-h-10 hover:tw-bg-gray-200 hover:tw-text-gray-700 tw-transition tw-duration-500 tw-ease-in-out tw-transform">SIGN IN</button></Link>
                    </div>
                </div>
                <div className="tw-bg-gray-100 tw-w-1/2 tw-text-center tw-place-items-center tw-items-center form__holder no-border2">
                    {/* right white side */}
                    <div className="tw-text-primary-100 tw-m-5 tw-flex tw-flex-col ">
                        {/* content container */}
                        <h2 className="tw-font-medium tw-text-5xl tw-my-4">Create Account</h2>
                        <div className="form__box">
                            {/* form */}
                            <form action="" class="tw-p-auto tw-m-auto">
                                <RegisterInputs icon="fas fa-user-circle" holder="Your name"/>
                                <RegisterInputs icon="fa fa-envelope" holder="Your Email"/>
                                <RegisterInputs icon="fas fa-lock" holder="Your password"/>
                                <RegisterInputs icon="fas fa-lock" holder="Confirm password"/>
                             <div className=" tw-w-2/3">
                            <button type="submit" className="tw-my-4 tw-m-auto tw-border tw-border-primary-100 tw-bg-primary-100 tw-text-gray-200 tw-w-full tw-h-10 hover:tw-bg-gray-200 hover:tw-text-gray-700 hover:tw-border-primary-100 tw-transition tw-duration-500 tw-ease-in-out tw-transform">SIGN UP</button>
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
                                <RegisterIcon icon="github" link="" />
                                <RegisterIcon icon="facebook" link="" />
                                <RegisterIcon icon="google" link="" />
                            </div>
                        </div>
                    </div>

                       
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RegisterSection;
