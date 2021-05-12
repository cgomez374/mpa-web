import React, { Component } from 'react'

import Link from 'next/link';

export class MenteeQuestion5 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values } = this.props;
        this.props.values
        return (
            <div className="tw-relative tw-font-redhat tw-bg-white tw-h-660px tw-w-950px tw-px-24 tw-pt-16 tw-pb-36 tw-rounded-3xl tw-shadow-mentor md:tw-h-auto md:tw-px-10 md:tw-py-30 tw-select-none">
                <form className="tw-pb-20">
                    <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-8 md:tw-text-center tw-select-none">Preview</h1>
                    <div className="tw-h-330px tw-overflow-y-scroll tw-border-4 tw-p-2">
                        <h2 className="tw-text-center tw-text-3xl tw-pb-4">{values.iAMa} Registration</h2>
                        <h4>Personal Details</h4>
                        <hr />
                        <div className="tw-flex tw-justify-between tw-flex-row tw-py-2 md:tw-flex-col">
                            <div>
                                <h5 className="tw-font-bold">Full Name</h5>
                                <p className="tw-m-0">{values.firstName} {values.lastName}</p>
                            </div>
                            <div className="tw-text-center md:tw-text-left">
                                <h5 className="tw-font-bold">Level of Education</h5>
                                <p className="tw-m-0">{values.levelOfEducation[0].label}</p>
                            </div>
                            <div className="tw-text-right md:tw-text-left">
                                <h5 className="tw-font-bold">Date of Birth</h5>
                                <p className="tw-m-0">{values.DOB}</p>
                            </div>

                        </div>
                        <div className="tw-flex tw-flex-col tw-pb-4">
                            <h5 className="tw-font-bold">Passions:</h5>
                            <p className="tw-m-0">
                                {values.passions.map((passion) => (
                                    <span>{passion.label} </span>
                                ))}
                            </p>
                        </div>
                        <div className="tw-flex tw-flex-col tw-pb-4">
                            <h5 className="tw-font-bold">Interest:</h5>
                            <p className="tw-m-0">
                                {values.interest.map((item) => (
                                    <span>{item.label} </span>
                                ))}
                            </p>
                        </div>
                        <div className="tw-flex tw-justify-between tw-flex-row tw-pb-4 md:tw-flex-col">
                            <div>
                                <h5 className="tw-font-bold">Learning Style</h5>
                                <p className="tw-m-0">
                                    {values.learningStyle.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                            <div className="tw-text-center md:tw-text-left">
                                <h5 className="tw-font-bold">Personality Type</h5>
                                <p className="tw-m-0">
                                    {values.personlityType.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                            <div className="tw-text-right md:tw-text-left">
                                <h5 className="tw-font-bold">Phone Usage</h5>
                                <p className="tw-m-0">
                                    {values.phoneUsage.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className="tw-flex tw-justify-between tw-flex-row tw-pb-4 md:tw-flex-col">
                            <div>
                                <h5 className="tw-font-bold">My Goals</h5>
                                <p className="tw-m-0">
                                    {values.goals}
                                </p>
                            </div>
                        </div>

                        <h4>I am looking for</h4>
                        <hr />
                        <div className="tw-flex tw-justify-between tw-flex-row tw-py-4 md:tw-flex-col">
                            <div>
                                <h5 className="tw-font-bold">Mentor's Education</h5>
                                <p className="tw-m-0">
                                    {values.lookingForEdu.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                            <div className="tw-text-center md:tw-text-left">
                                <h5 className="tw-font-bold">Mentor's Experience</h5>
                                <p className="tw-m-0">
                                    {values.lookingForExp.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                            <div className="tw-text-right md:tw-text-left">
                                <h5 className="tw-font-bold">Mentor's Availability</h5>
                                <p className="tw-m-0">
                                    {values.lookingForAvailability.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                        </div>
                        <div className="tw-flex tw-justify-between tw-flex-row md:tw-flex-col">
                            <div>
                                <h5 className="tw-font-bold">Mentor's Gender</h5>
                                <p className="tw-m-0">
                                    {values.lookingForGender.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                            <div className="tw-text-center md:tw-text-left">
                                <h5 className="tw-font-bold">Mentor's Language</h5>
                                <p className="tw-m-0">
                                    {values.lookingForLang.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                            <div className="tw-text-right md:tw-text-left">
                                <h5 className="tw-font-bold">Mentor's Ethnicity</h5>
                                <p className="tw-m-0">
                                    {values.lookingForEthnicity.map((item) => (
                                        <p className="tw-m-0">{item.label} </p>
                                    ))}
                                </p>
                            </div>
                        </div>
                    </div>
                </form>
                <div className="tw-absolute tw-w-full tw-bottom-12 tw-pr-48 md:tw-pr-20 md:tw-bottom-7 tw-text-center">
                    <div className="tw-w-280px tw-mx-auto tw-flex tw-justify-between">
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-32 tw-py-2 tw-mb-6 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500" onClick={this.back}>Edit</button>
                        <Link href="/mentorshipApp">
                            <button className="tw-bg-activeOrange tw-outline-none tw-rounded-md tw-w-32 tw-py-2 tw-mb-6 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500">Complete</button>

                        </Link>
                    </div>

                    <p className="tw-block tw-text-center">{values.step}/6</p>
                    <div className="tw-w-full tw-bg-gradient-to-r tw-from-FFC700 tw-via-FF655B tw-to-FF00B8 tw-h-2 tw-rounded-2xl tw-relative">
                        <div className={`tw-bg-gray-300 tw-h-2 tw-rounded-2xl tw-absolute tw-right-0 tw-w-line-${values.step}/6`}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenteeQuestion5
