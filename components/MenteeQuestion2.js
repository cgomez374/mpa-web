import React, { Component } from 'react'

import MenteeQuestion2DropDown1 from './MenteeQuestion2DropDown1'
import MenteeQuestion2DropDown2 from './MenteeQuestion2DropDown2'
import MenteeQuestion2DropDown3 from './MenteeQuestion2DropDown3'
import MenteeQuestion2DropDown4 from './MenteeQuestion2DropDown4'
import MenteeQuestion2DropDown5 from './MenteeQuestion2DropDown5'
import MenteeQuestion2DropDown6 from './MenteeQuestion2DropDown6'

export class MenteeQuestion2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { values, handleDropDown } = this.props;
        this.props.values
        return (
            <div className="tw-relative tw-font-redhat tw-bg-white tw-h-660px tw-w-950px tw-px-24 tw-pt-16 tw-pb-36 tw-rounded-3xl tw-shadow-mentor md:tw-h-auto md:tw-px-10 md:tw-py-30 tw-select-none">
                <form className="tw-pb-20">
                    <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-8 md:tw-text-center tw-select-none">Additional Details</h1>
                    <div className="tw-flex tw-flex-row md:tw-flex-col">
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-textGray tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="interest">My Interests</label>
                            <MenteeQuestion2DropDown1
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="interest"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="learningStyle">My learning style</label>
                            <MenteeQuestion2DropDown2
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="learningStyle"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                    </div>
                    <div className="tw-flex tw-flex-row md:tw-flex-col">
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-textGray tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="personlityType">My personality type</label>
                            <MenteeQuestion2DropDown3
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="personlityType"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="phoneUsage">How often do I use my phone</label>
                            <MenteeQuestion2DropDown4
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="phoneUsage"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                    </div>
                    {/* <div className="tw-flex tw-flex-row md:tw-flex-col">
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col tw-text-textGray tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-mr-3 md:tw-mr-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="?">?</label>
                            <MenteeQuestion2DropDown5
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="?"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                        <div className="tw-flex tw-w-6/12 md:tw-w-full tw-flex-initial tw-flex-col  tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0">
                            <label className="tw-text-md tw-select-none tw-mb-0.5" htmlFor="??">?</label>
                            <MenteeQuestion2DropDown6
                                className="tw-outline-none tw-text-darkGray tw-text-md"
                                name="??"
                                handleDropDown={handleDropDown}
                                values={values} />
                        </div>
                    </div> */}
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

export default MenteeQuestion2
