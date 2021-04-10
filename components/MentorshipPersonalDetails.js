import React, { Component } from 'react'

export class MentorshipPersonalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, handleChange } = this.props;
        this.props.values
        return (
            <div className="tw-flex tw-flex-col tw-justify-between tw-font-redhat tw-bg-white tw-h-5/6  tw-w-950px tw-p-24 md:tw-p-10 tw-pb-5 md:tw-my-20 tw-rounded-3xl tw-shadow-2xl">
                <div>
                    <form>
                        <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-4 md:tw-text-center tw-select-none">Personal Details</h1>
                        <div className="tw-flex tw-flex-row md:tw-flex-col">
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="firstName">First Name</label>
                                <input
                                    className="tw-outline-none"
                                    type="text"
                                    name="firstName"
                                    onChange={handleChange('firstName')}
                                    defaultValue={values.firstName}
                                />
                            </div>
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="lastName">Last Name</label>
                                <input
                                    className="tw-outline-none"
                                    type="text"
                                    name="lastName"
                                    onChange={handleChange('lastName')}
                                    defaultValue={values.lastName}
                                />
                            </div>
                        </div>
                        <div className="tw-flex tw-flex-row md:tw-flex-col">
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="DOB">Date of Birth</label>
                                <input
                                    className="tw-outline-none"
                                    type="text"
                                    name="DOB"
                                    onChange={handleChange('DOB')}
                                    defaultValue={values.DOB}
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
                                <label className="tw-text-xs tw-select-none" htmlFor="levelOfEducation">Level of Education</label>
                                <input
                                    className="tw-outline-none"
                                    type="text"
                                    name="levelOfEducation"
                                    onChange={handleChange('levelOfEducation')}
                                    defaultValue={values.levelOfEducation}
                                />
                            </div>
                            <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-#676565 tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                                <label className="tw-text-xs tw-select-none" htmlFor="levelOfEducationHometown">Education Hometown</label>
                                <input
                                    className="tw-outline-none"
                                    type="text"
                                    name="levelOfEducationHometown"
                                    onChange={handleChange('levelOfEducationHometown')}
                                    defaultValue={values.levelOfEducationHometown}
                                />
                            </div>
                        </div>
                    </form>
                </div>
                <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mx-auto tw-mt-36 sm:tw-mt-24 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-select-none" onClick={this.continue}><i class="fas fa-arrow-right tw-text-2xl tw-p-2"></i></button>
            </div>
        )
    }
}

export default MentorshipPersonalDetails