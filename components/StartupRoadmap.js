import React from 'react';

const StartupRoadmap = ({ item }) => {

    return (
        <>
            {(item.id % 2 !== 0) ? (
                <div className="tw-relative tw-z-10">
                    <div className="tw-w-12 tw-h-12 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-bg-profileDark tw-font-semibold tw-text-sm tw-text-white tw-shadow-md 2xl:tw-absolute 2xl:tw-mx-auto 2xl:tw-left-0 2xl:tw-right-0">
                        {item.year}
                    </div>
                    <div className="tw-relative tw-pt-2 tw-z-10 2xl:tw-pl-15 2xl:tw-pt-0 2xl:tw-w-1/2 2xl:tw-ml-auto 2xl:tw-pl-16">
                        <div className="tw-bg-white tw-p-3 tw-rounded-md tw-shadow-lg tw-border">
                            <span
                                className="tw-font-bold tw-z-10 tw-text-primary-200 tw-text-sm tw-tracking-wide">
                                {item.date}
                            </span>
                            <h1 className="tw-text-2xl tw-font-bold tw-pt-1">
                                {item.title}
                            </h1>
                            <p className="tw-pt-1 tw-leading-relaxed tw-tracking-wide">
                                {item.target}
                            </p>
                        </div>
                    </div>
                </div>

            ) : (
                <div className="tw-relative tw-z-10">
                    <div className="tw-w-12 tw-h-12 tw-rounded-full tw-flex tw-justify-center tw-items-center tw-bg-profileDark tw-font-semibold tw-text-sm tw-text-white tw-shadow-md 2xl:tw-absolute 2xl:tw-mx-auto 2xl:tw-left-0 2xl:tw-right-0">
                        {item.year}
                    </div>
                    <div className="tw-relative tw-pt-2 tw-z-10 2xl:tw-pl-15 2xl:tw-pt-0 2xl:tw-w-1/2 2xl:tw-ml-0 2xl:tw-mr-auto 2xl:tw-pl-0 2xl:tw-pr-16">
                        <div className="tw-bg-white tw-p-3 tw-rounded-md tw-shadow-lg tw-border">
                            <span
                                className="tw-font-bold tw-z-10 tw-text-primary-200 tw-text-sm tw-tracking-wide">
                                {item.date}
                            </span>
                            <h1 className="tw-text-2xl tw-font-bold tw-pt-1">
                                {item.title}
                            </h1>
                            <p className="tw-pt-1 tw-leading-relaxed tw-tracking-wide">
                                {item.target}
                            </p>
                        </div>
                    </div>
                </div>
            )}

        </>
    )
}
export default StartupRoadmap