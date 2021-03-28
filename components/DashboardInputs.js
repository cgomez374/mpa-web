import React from 'react';

function DashboardInputs({holder, icon}) {
    return (
        <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-10/12 inp">
            <div className="tw-flex tw-justify-center tw-w-15 ">
                <span
                    className="tw-flex tw-items-center tw-leading-normal tw-bg-white tw-px-3 tw-border-0 tw-rounded tw-rounded-r-none tw-text-md tw-text-gray-600"
                >
                    <i className={icon}></i>
                </span>
            </div>
                <input
                type="text"
                className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-leading-normal tw-border-0 tw-rounded tw-rounded-l-none  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                placeholder={holder}
                                    />
         </div>
    )
}

export default DashboardInputs;
