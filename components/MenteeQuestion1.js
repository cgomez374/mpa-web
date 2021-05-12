import React, { Component } from 'react'

export class MenteeQuestion1 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, handleChange } = this.props;
        this.props.values
        return (
            <div className="tw-flex tw-flex-col tw-justify-between tw-font-redhat tw-bg-white tw-h-660px md:tw-h-auto tw-w-950px tw-p-24 md:tw-p-10  md:tw-my-20 tw-rounded-3xl tw-shadow-mentor tw-select-none">
                <div>
                    <form>
                        <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-16 md:tw-text-center">I am a</h1>
                        <div className="tw-flex tw-flex-row md:tw-flex-col">
                            <label className="tw-w-6/12 md:tw-w-full" htmlFor="FirstSelect">

                                <input
                                    id="FirstSelect"
                                    className="tw-outline-none tw-hidden"
                                    type="radio"
                                    name="iAMa"
                                    onChange={handleChange('iAMa')}
                                    defaultValue="Mentor"
                                    defaultChecked={values.iAMa === 'Mentor'}
                                />
                                <div className="tw-flex tw-flex-initial tw-flex-col tw-justify-center tw-text-gray-400 tw-text-opacity-70 tw-h-20 tw-text-center tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0 tw-text-3xl tw-cursor-pointer label-checked:tw-bg-NavDark label-checked:tw-font-bold label-checked:tw-text-white label-checked:tw-border-NavDark">Mentor</div>
                            </label>
                            <label className="tw-w-6/12 md:tw-w-full" htmlFor="SecondSelect">
                                <input
                                    id="SecondSelect"
                                    className="tw-outline-none tw-hidden"
                                    type="radio"
                                    name="iAMa"
                                    onChange={handleChange('iAMa')}
                                    defaultValue="Mentee"
                                    defaultChecked={values.iAMa === 'Mentee'}
                                />
                                <div className="tw-flex tw-flex-initial tw-flex-col tw-justify-center tw-text-gray-400 tw-text-opacity-70 tw-h-20 tw-text-center tw-bg-white input-area tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl tw-my-2 tw-ml-3 md:tw-ml-0 tw-text-3xl tw-cursor-pointer label-checked:tw-bg-NavDark label-checked:tw-font-bold label-checked:tw-text-white label-checked:tw-border-NavDark">Mentee</div>
                            </label>
                        </div>
                    </form>
                </div>
                <div className="tw-w-full tw-flex tw-flex-col tw-mt-44">
                    <div className="tw-w-140px tw-mx-auto tw-flex tw-justify-between">
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mb-8 sm:tw-mt-24 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-mx-auto" onClick={this.back}><i className="fas fa-arrow-left tw-text-2xl tw-p-2"></i></button>
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mb-8 sm:tw-mt-24 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-mx-auto" onClick={this.continue}><i className="fas fa-arrow-right tw-text-2xl tw-p-2"></i></button>
                    </div>

                    <span className="tw-block tw-text-center">{values.step}/4</span>
                    <div className="tw-w-full tw-bg-gradient-to-r tw-from-FFC700 tw-via-FF655B tw-to-FF00B8 tw-h-2 tw-rounded-2xl tw-relative">
                        <div className={`tw-bg-gray-300 tw-h-2 tw-rounded-2xl tw-absolute tw-right-0 tw-w-line-${values.step}/4`}></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MenteeQuestion1