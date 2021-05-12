import React, { Component } from 'react'

export class MenteeQuestion4 extends Component {
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
                        <h1 className="tw-font-bold tw-text-black tw-text-5xl tw-mb-16 md:tw-text-center tw-select-none">What are your goals</h1>
                        <textarea
                            className="tw-w-full tw-text-textGray tw-bg-white tw-py-3 tw-px-3 tw-border-4 tw-border-gray-300 tw-border-opacity-50 tw-rounded-2xl resize-none tw-outline-none"
                            name="goals"
                            id="goals"
                            rows="9"

                            onChange={handleChange('goals')}
                        >
                            {values.goals}
                        </textarea>
                    </form>
                </div>
                <div className="tw-w-full tw-flex tw-flex-col tw-mt-4">
                    <div className="tw-w-140px tw-mx-auto tw-flex tw-justify-between">
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mb-8 sm:tw-mt-24 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-mx-auto tw-select-none" onClick={this.back}><i class="fas fa-arrow-left tw-text-2xl tw-p-2"></i></button>
                        <button className="tw-bg-NavDark tw-outline-none tw-rounded-md tw-w-14 tw-mb-8 sm:tw-mt-24 tw-text-white hover:tw-text-NavDark hover:tw-bg-white tw-duration-500 tw-mx-auto tw-select-none"><i class="fas fa-arrow-right tw-text-2xl tw-p-2"></i></button>
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

export default MenteeQuestion4