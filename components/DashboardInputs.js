import React from 'react';

function DashboardInputs({holder}) {
    return (
        <div className="tw-flex tw-flex-row tw-h-10 tw-bg-white tw-items-center tw-rounded tw-my-3 tw-shadow-xl tw-w-10/12 inp">
                <input
                type="text"
                className="tw-flex-shrink tw-flex-grow tw-flex-auto tw-text-gray-500  tw-leading-normal tw-border-0 tw-rounded tw-pl-5  tw-self-center tw-h-10  tw-text-md tw-outline-none"
                placeholder={holder}
                                    />
         </div>
    )
}

export default DashboardInputs;
