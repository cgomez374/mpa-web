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
        const { values, handleChange, handleDropDown, handleSelect } = this.props;
        this.props.values

        return (
            <div className="tw-flex tw-flex-col tw-justify-between tw-font-redhat tw-bg-white tw-h-660px md:tw-h-auto tw-w-950px tw-p-24 md:tw-p-10 tw-pb-10 md:tw-my-20 tw-rounded-3xl tw-shadow-mentor">
                <div>
                    <form>
                        <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-4 md:tw-text-center tw-select-none">Personal Details</h1>
                        <div className="tw-flex tw-flex-row md:tw-flex-col">
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="firstName">First Name</label>
                                <input
                                    id="date"
                                    className="tw-outline-none"
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
                                    className="tw-outline-none tw-font-bold tw-text-black tw-text-xl"
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

                                    className="tw-outline-none tw-font-bold tw-text-black tw-text-xl"
                                    type="text"
                                    // min="1000-01-01" max="2021-12-31"
                                    name="DOB"
                                    onChange={handleChange('DOB')}
                                    defaultValue={values.DOB}
                                    placeholder=""
                                    onFocus={(e) => e.target.placeholder = "mm/dd/yyyy"}
                                    onBlur={(e) => e.target.placeholder = ""}
                                />
                            </div>
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                                <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="DOBHometown">Hometown</label>
                                <input
                                    className="tw-outline-none tw-font-bold tw-text-black tw-text-xl" />
                                <input

                                    className="tw-outline-none"
                                    type="text"
                                    // min="1000-01-01" max="2021-12-31"
                                    name="DOB"
                                    onChange={handleChange('DOB')}
                                    defaultValue={values.DOB}
                                    placeholder=""
                                    onFocus={(e) => e.target.placeholder = "mm/dd/yyyy"}
                                    onBlur={(e) => e.target.placeholder = ""}
                                />
                            </div>
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="DOBHometown">Hometown</label>
                                <input
                                    className="tw-outline-none"
                                    type="text"
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
                                    className="tw-outline-none tw-font-bold tw-text-black tw-text-xl"
                                    name="levelOfEducation"
                                    handleSelect={handleSelect}
                                    values={values}
                                />
                            </div>
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                                <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="passions">Passions</label>
                                <MentorshipPersonalDetailsDropDown
                                    className="tw-outline-none tw-font-bold tw-text-black tw-text-xl"
                                    name="passions"
                                    handleChange={handleChange("passions")}
                                    handleDropDown={handleDropDown}
                                    values={values} />
                                <select
                                    className="tw-outline-none"
                                    type="text"
                                    name="levelOfEducation"
                                    onChange={handleChange('levelOfEducation')}
                                    defaultValue={values.levelOfEducation}
                                >
                                    <option value=""></option>
                                    <option value="Middle School">Middle School</option>
                                    <option value="Associate’s">Associate’s</option>
                                    <option value="Bachelor’s">Bachelor’s</option>
                                    <option value="Master’s">Master’s</option>
                                    <option value="PHD">PHD</option>
                                </select>
                            </div>
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="passions">Passions</label>
                                {/* {values.passions} */}
                                <MentorshipPersonalDetailsDropDown
                                    className="tw-outline-none"
                                    name="passions"
                                    handleChange={handleChange("passions")}
                                    values={values}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mx-auto tw-mt-24 sm:tw-mt-24 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-select-none" onClick={this.continue}><i className="fas fa-arrow-right tw-text-2xl tw-p-2"></i></button>
                <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mx-auto md:tw-mt-6 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-select-none" onClick={this.continue}><i class="fas fa-arrow-right tw-text-2xl tw-p-2"></i></button>
            </div>
        )
    }
}

export default MentorshipPersonalDetails