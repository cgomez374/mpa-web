import React, { Component } from 'react'
import MentorshipPersonalDetailsDropDown from './MentorshipPersonalDetailsDropDown'
import MentorshipPersonalDetailsSelect from './MentorshipPersonalDetailsSelect'

import './MentorshipCSS/MentorshipPersonalDetails.css'


export class MentorshipPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }


    render() {
        const { values, handleChange, handleDropDown } = this.props;
        this.props.values

        return (
            <div className="tw-relative tw-font-redhat tw-bg-white tw-h-660px tw-w-950px tw-px-24 tw-pt-16 tw-pb-36 tw-rounded-3xl tw-shadow-mentor md:tw-h-auto md:tw-px-10 md:tw-py-30">
                <form className="tw-pb-6">
                    <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-8 md:tw-text-center tw-select-none">Personal Details</h1>
                    <div className="tw-flex tw-flex-row md:tw-flex-col">
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="firstName">First Name</label>
                            <input
                                id="date"
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                type="text"
                                name="firstName"
                                onChange={handleChange('firstName')}
                                defaultValue={values.firstName}
                                maxLength="16"
                            />
                        </div>
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="lastName">Last Name</label>
                            <input
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                type="text"
                                name="lastName"
                                onChange={handleChange('lastName')}
                                defaultValue={values.lastName}
                                maxLength="16"
                            />
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-row md:tw-flex-col">
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="DOB">Date of Birth</label>
                            <input

                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                type="date"
                                // min="1000-01-01" max="2021-12-31"
                                name="DOB"
                                onChange={handleChange('DOB')}
                                defaultValue={values.DOB}
                                placeholder=""
                            // onFocus={(e) => e.target.placeholder = "mm/dd/yyyy"}
                            // onBlur={(e) => e.target.placeholder = ""}
                            />
                        </div>
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="DOBHometown">Hometown</label>
                            <input

                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                type="text"
                                // min="1000-01-01" max="2021-12-31"
                                name="DOBHometown"
                                onChange={handleChange('DOBHometown')}
                                defaultValue={values.DOBHometown}
                            />
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-row md:tw-flex-col">
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-textGray tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="levelOfEducation">Level of Education</label>
                            <MentorshipPersonalDetailsSelect
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="levelOfEducation"
                                handleDropDown={handleDropDown}
                                values={values}
                            />
                        </div>
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="passions">Passions</label>
                            <MentorshipPersonalDetailsDropDown
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="passions"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                    </div>
                </form>
                <div className="tw-absolute tw-w-full tw-bottom-12 tw-pr-48 md:tw-pr-20 md:tw-bottom-7 tw-text-center">
                    <div className="tw-w-140px tw-mx-auto tw-flex tw-justify-between">
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mb-8 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-mx-auto" onClick={this.back}><i className="fas fa-arrow-left tw-text-2xl tw-p-2"></i></button>
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mb-8 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-mx-auto" onClick={this.continue}><i className="fas fa-arrow-right tw-text-2xl tw-p-2"></i></button>
                    </div>

                    <span className="tw-block tw-text-center">{values.step}/6</span>
                    <div className="tw-w-full tw-bg-gradient-to-r tw-from-FFC700 tw-via-FF655B tw-to-FF00B8 tw-h-2 tw-rounded-2xl tw-relative">
                        <div className={`tw-bg-gray-300 tw-h-2 tw-rounded-2xl tw-absolute tw-right-0 tw-w-line-${values.step}/6`}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MentorshipPersonalDetails