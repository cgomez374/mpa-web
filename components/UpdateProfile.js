/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Form, Field } from 'formik';
import { AiFillHome } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router';
import DashboardInputs from './DashboardInputs';

const UpdateForm = ({ setOpen, setNotice, setLog }) => {

  const initialValues = {
    firstName: 'cedrick',
    lastName: 'mupenzi',
    email: 'mcstain1639',
    twitter: 'cerdo',
    facebook: 'cedrick',
    birthDate: '17/08/2001',
    phone: '088678765678',
    git: 'mupenzi',
    desc: 'prog',
    location: 'kigali',
  };
  const history = useHistory();

  const onSubmit = values => {
    const newInfo = new FormData();
    newInfo.append('profileImage', values.profileImage);
    newInfo.append('firstName', values.firstName);
    newInfo.append('lastName', values.lastName);
    newInfo.append('email', values.email);
    newInfo.append('location', values.location);
    newInfo.append('desc', values.desc);
    newInfo.append('desc', values.desc);
    newInfo.append('birthDate', values.birthDate);
    newInfo.append('phone', values.phone);
  };
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {formProps => (
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

              <Form className="tw-w-full  tw-pb-4">
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                  <DashboardInputs icon="fas fa-user-circle" holder="First name"/>
                  <DashboardInputs icon="fas fa-user-circle" holder="Last name"/>
                       
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs icon="fas fa-user-circle" holder="Your email"/>
                <DashboardInputs icon="fas fa-user-circle" holder="Phone number"/>
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs icon="fas fa-user-circle" holder="Location"/>
                <DashboardInputs icon="fas fa-user-circle" holder="Birth Date"/>
                </div>{' '}
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs icon="fas fa-user-circle" holder="Language"/>
                <DashboardInputs icon="fas fa-user-circle" holder="Ethnicity"/>
                </div>
                <div className="tw-grid  tw-grid-cols-1 md:tw-grid-cols-2 tw-w-full tw-justify-items-center">
                <DashboardInputs icon="fas fa-user-circle" holder="Github"/>
                <DashboardInputs icon="fas fa-user-circle" holder="Linkedin"/>
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
                    onChange={event =>
                      formProps.setFieldValue(
                        'profileImage',
                        event.target.files[0],
                      )
                    }
                  />
                </div>
                <div className="tw-flex tw-items-center  tw-w-5/12 md:tw-w-11/12 tw-ml-7 md:tw-ml-10 tw-my-10">
                  <button
                    type="submit"
                    className="tw-px-8 tw-py-1  tw-rounded-md tw-text-white tw-bg-hover"
                  >
                    Update
                  </button>
                </div>
              </Form>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export default UpdateForm;
