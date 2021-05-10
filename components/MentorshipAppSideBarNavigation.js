import React from 'react'

function MentorshipAppSideBarNavigation(props) {

    let totalMessagesNumber = 0
    let totalToDoNumber = 0

    props.values.map(function (character, i) {
        totalMessagesNumber = totalMessagesNumber + character.messages.length
        totalToDoNumber = totalToDoNumber + character.toDo.length
    }
    )
    switch (props.step) {
        case 1:
            return (
                <div className="tw-flex tw-flex-1 tw-flex-col">
                    <nav className="tw-bg-white tw-text-2xl tw-font-medium tw-pb-4 tw-select-none">
                        <ul className="tw-flex tw-cursor-pointer">
                            <li className="tw-flex tw-w-200px tw-px-4 tw-py-2" onClick={props.messagesStep}>
                                <h3 className="tw-text-activeOrange tw-font-bold">Messages</h3>
                                <span className="tw-bg-activeOrange tw-text-white tw-rounded-full tw-flex tw-justify-center tw-items-center tw-w-8 tw-h-8 tw-ml-6">
                                    <div className="tw-text-sm tw-font-bold">
                                        {totalMessagesNumber < 99 ? totalMessagesNumber : "+99"}
                                    </div>
                                </span>
                            </li>
                            <li className="tw-flex tw-w-160px tw-px-4 tw-py-2" onClick={props.todoStep}>
                                <h3>To-Do</h3>
                                <span className="tw-bg-NavDark tw-text-white tw-rounded-full tw-flex tw-justify-center tw-items-center tw-w-8 tw-h-8 tw-ml-6">
                                    <div className="tw-text-sm tw-font-bold">
                                        {totalToDoNumber < 99 ? totalToDoNumber : "+99"}
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <div className="messages tw-bg-#F9F9F9 tw-w-full tw-flex-auto tw-rounded-br-3xl tw-shadow-mentorAppMessagesInner tw-overflow-y-scroll tw-h-140px">
                        {props.values.map((character, index) =>
                            <div id={"message_from_" + index} key={"key_" + index}>

                                {character.messages.map((msg, id) =>
                                    <div key={id} className="tw-relative tw-w-full tw-h-full">
                                        <div className="message tw-w-full tw-flex tw-justify-between tw-items-end tw-p-4 tw-h-1/3 tw-cursor-pointer hover:tw-bg-#F9F9F9 hover:tw-shadow-mentorAppMessagesOuter">
                                            <div className="active-bar tw-absolute tw-h-full tw-w-2 tw-top-0 tw-left-0 tw-bg-gradient-to-b tw-from-FF00B8 tw-to-FFC700 tw-hidden"></div>
                                            <div className="img tw-w-20 tw-h-20  tw-relative">
                                                <img className="tw-object-cover tw-rounded-full
                                    tw-h-full tw-w-full" src={character.url} alt="avatar image" />
                                                {msg.new ? (
                                                    <div className="tw-absolute tw-w-4 tw-h-4 tw-rounded-full tw-border-2 tw-border-white tw--right-2 tw-top-8 tw-bg-activeOrange tw-z-20"></div>
                                                ) : (
                                                    <div></div>
                                                )}
                                            </div>
                                            <div className="text tw-flex-1 tw-px-6 tw-pb-4">
                                                <h4 className="tw-font-medium tw-text-2xl">{character.name}</h4>
                                                <p>{msg.message}</p>
                                            </div>
                                            <div className="timestamp tw-text-gray-400 tw-pb-4">
                                                <p>{msg.messageTimeStamp}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
        case 2:
            return (
                <div className="tw-flex tw-flex-1 tw-flex-col">
                    <nav className="tw-bg-white tw-text-2xl tw-font-medium tw-pb-4 tw-select-none">
                        <ul className="tw-flex tw-cursor-pointer">
                            <li className="tw-flex tw-w-200px tw-px-4 tw-py-2" onClick={props.messagesStep}>
                                <h3>Messages</h3>
                                <span className="tw-bg-NavDark tw-text-white tw-rounded-full tw-flex tw-justify-center tw-items-center tw-w-8 tw-h-8 tw-ml-6">
                                    <div className="tw-text-sm tw-font-bold">
                                        {totalMessagesNumber < 99 ? totalMessagesNumber : "+99"}
                                    </div>
                                </span>
                            </li>
                            <li className="tw-flex tw-w-160px tw-px-4 tw-py-2" onClick={props.todoStep}>
                                <h3 className="tw-text-activeOrange tw-font-bold">To-Do</h3>
                                <span className="tw-bg-activeOrange tw-text-white tw-rounded-full tw-flex tw-justify-center tw-items-center tw-w-8 tw-h-8 tw-ml-6">
                                    <div className="tw-text-sm tw-font-bold">
                                        {totalToDoNumber < 99 ? totalToDoNumber : "+99"}
                                    </div>
                                </span>
                            </li>
                        </ul>
                    </nav>
                    <div className="messages tw-bg-#F9F9F9 tw-w-full tw-flex-auto tw-rounded-br-3xl tw-shadow-mentorAppMessagesInner tw-overflow-y-auto ">
                        {props.values.map((character, index) =>
                            <div id={"todo_from_" + index} key={"key_" + index}>

                                {character.toDo.map((task, id) =>
                                    <div key={id} className="tw-relative tw-w-full tw-h-full">
                                        <div className="message tw-w-full tw-flex tw-justify-between tw-items-end tw-p-4 tw-h-1/3 tw-cursor-pointer hover:tw-bg-#F9F9F9 hover:tw-shadow-mentorAppMessagesOuter">
                                            <div className="active-bar tw-absolute tw-h-full tw-w-2 tw-top-0 tw-left-0 tw-bg-gradient-to-b tw-from-FF00B8 tw-to-FFC700 tw-hidden"></div>
                                            <div className="img tw-w-20 tw-h-20">
                                                <img className="tw-object-cover tw-rounded-full tw-h-full tw-w-full" src={character.url} alt="avatar image" />
                                            </div>
                                            <div className="text tw-flex-1 tw-px-6 tw-pb-4">
                                                <h4 className="tw-font-medium tw-text-2xl">{character.name}</h4>
                                                <p>{task.message}</p>
                                            </div>
                                            <div className="timestamp tw-text-gray-400 tw-pb-4">
                                                <p>{task.messageTimeStamp}</p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            );
    }
}

export default MentorshipAppSideBarNavigation
