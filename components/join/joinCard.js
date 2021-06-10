import React from 'react';
import JoinBar from './joinBar';
import ApplyIcon, { BuildIcon, JoinIcon, MentorIcon, StartIcon } from './svg/icons';

function JoinCard(props) {

    return (
        <div className="card-container">
            
            <div className="bar-head pb-4">
                <h1 className="card-head">HOW WOULD YOU LIKE TO JOIN ?</h1>
                <span className="card-desc">Please select the category that interests you.</span>
            </div>

            <JoinBar
            color="#ff00b8"
            icon={JoinIcon}
            maintext="Join the Minority Programmers Network"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/register"
             />
            <JoinBar
            color="#ffc700"
            icon={StartIcon}
            maintext="Start or Join a Chapter"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/chapter"
             />

            <JoinBar
            color="#ff00b8"
            icon={BuildIcon}
            maintext="Build A Minority Startup"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
             />

            <JoinBar
            color="#ffc700"
            icon={ApplyIcon}
            maintext="Apply to MPA Internship"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/jobs"
             />

            <JoinBar
            color="#ff00b8"
            icon={MentorIcon}
            maintext="Participate as a Mentor"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/mentorship"
             />

        </div>
    )
};

export default JoinCard;