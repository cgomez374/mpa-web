import React from 'react'
import MentorshipAppSideBarNavigation from "../components/MentorshipAppSideBarNavigation";

import "./MentorshipCSS/MentorshipAppSideBar.css"

function MentorshipAppSideBar(props) {
    return (
        <div className="tw-w-1/2 tw-h-600px tw-bg-white tw-rounded-r-3xl tw-flex tw-flex-col tw-z-10">
            <header className="tw-rounded-tr-3xl tw-select-none">
                <h2 className="tw-px-4 tw-pt-6 tw-text-lg tw-text-2xl tw-font-medium">New Matches ({props.values.length})</h2>
                <div className="matches tw-flex tw-py-4 tw-overflow-scroll">
                    {props.values.map((character, index) =>
                        <div id={"matched_id_" + index} key={"key_" + index}>
                            <div className="tw-w-full tw-h-full">
                                <div className="tw-w-full tw-px-4 tw-h-1/3 tw-cursor-pointer">
                                    <div className="img tw-w-20 tw-h-20">
                                        <img className="tw-object-cover
                                    tw-h-full tw-w-full tw-rounded-full" src={character.url} alt="avatar image" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </header>
            <MentorshipAppSideBarNavigation
                values={props.values}
                step={props.step}

                messagesStep={props.messagesStep}
                todoStep={props.todoStep}
            />
        </div>
    )
}

export default MentorshipAppSideBar


