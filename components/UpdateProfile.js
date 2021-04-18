/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import DashboardInputs from './DashboardInputs';
import Select from 'react-select';

const UpdateForm = ({ setOpen, setNotice, setLog, ProfilePic, firstName, lastName, email }) => {

  const eth = ["American Indian or Alaska Native", "Asian", "Black or African American", "Hispanic or Latino", "Native Hawaiian or Other Pacific Islander", "White"]
  const storethree = () => {
    const tempArray3 = [];
    eth.map((element) => {
      tempArray3.push({ label: `${element}`, value: element });
    });
    return tempArray3;
  }

  return (


        <>
          <div
            className={`
             tw-col-end-13 tw-bg-profileDark tw-col-start-1 lg:tw-col-start-3  tw-row-start-2  tw-row-end-4 tw-p-3`}
            onClick={() =>{ setOpen(false); setLog(false); setNotice(false)}}
          >
            <div className="tw-flex tw-justify-between">
              <div className="tw-text-gray-100">
                <h2 className="tw-font-bold tw-text-primary-200 tw-text-xl md:tw-text-2xl"> Profile</h2>
                <span className="tw-text-xs tw-font-light"> Student panel</span>
              </div>
              <div className="tw-flex tw-mt-6 tw-text-gray-100 ">
                <span>
                  <AiFillHome className="tw-text-primary-200 tw-mr-1" />
                </span>
                /<span className="tw-mx-1 tw-text-gray-100  tw-text-sm">User</span>/
                <span className="tw-mx-1 tw-text-gray-100  tw-text-sm ">
                  Update profile
                </span>
              </div>
            </div>

            <div
              className={`tw-rounded-md tw-bg-gray-100 tw-shadow-xl tw-w-full tw-my-4`}
            >
              <div className="tw-text-main tw-px-4 tw-py-4 tw-text-xl  ">
                <h2 className="tw-mx-5 tw-font-light"> Update profile</h2>
              </div>

              <form className="tw-w-full  tw-pb-4">
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                  <DashboardInputs holder={firstName}/>
                  <DashboardInputs holder={lastName}/>
                       
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs holder={email || "Your email"}/>
                <DashboardInputs  holder="Phone number"/>
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs  holder="Location"/>
                <DashboardInputs  holder="Birth Date"/>
                </div>{' '}
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs holder="Language"/>
                {/* <DashboardInputs icon="fas fa-user-circle" holder="Ethnicity"/> */}
              <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-border-white tw-rounded tw-my-3 tw-shadow-xl tw-w-10/12 inp">
                <Select
                      options={storethree()}
                      className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-text-gray-500 tw-border-white tw-rounded tw-self-center tw-h-10  tw-text-md tw-outline-none"
                      placeholder="Select your ethnicity"
                      isMulti={true}
                    />
              </div>
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs icon="fas fa-user-circle" holder="Github"/>
                <DashboardInputs icon="fas fa-user-circle" holder="Linkedin"/>
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <div className="tw-flex tw-flex-row  tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-10/12 inp">
                <textarea
                type="text"
                
                className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-p-5 tw-text-gray-500  tw-self-center tw-h-20  tw-text-md tw-outline-none"
                placeholder="Bio"
                                    ></textarea>
                </div>

                <div className="tw-flex  tw-flex-col   tw-w-5/12 md:tw-w-11/12 tw-ml-7  md:tw-ml-10 ">
                  <label htmlFor="image" className="tw-my-2 ">
                    {' '}
                    Profile Image
                  </label>
                  <input
                    type="file"
                    className="tw-py-4 tw-h-12 tw-mr-10 md:tw-m-0 focus:tw-border-none  tw-text-xs"
                    name="profileImage"
                  />
                </div>
                </div>
                
                <div className="tw-flex tw-items-center  tw-w-5/12 md:tw-w-11/12 tw-ml-7 md:tw-ml-10 tw-my-10">
                  <button
                    type="submit"
                    className="tw-px-8 tw-py-1  tw-text-white tw-bg-hover"
                  >
                    Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
  );
};

export default UpdateForm;
