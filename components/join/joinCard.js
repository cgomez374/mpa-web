import React from 'react';
import JoinBar from './joinBar';

function JoinCard(props) {

    return (
        <div className="card-container">
            
            <div className="pb-4">
                <h1 className="card-head">HOW WOULD YOU LIKE TO JOIN ?</h1>
                <span className="card-desc">Please select the category that interests you.</span>
            </div>

            <JoinBar
            color="#ff00b8"
            icon="/assets/images/join/join.svg"
            maintext="Join the Minority Programmers Network"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/register"
             />
            <JoinBar
            color="#ffc700"
            icon="/assets/images/join/start.png"
            maintext="Start or Join a Chapter"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/chapter"
             />

            <JoinBar
            color="#ff00b8"
            icon="/assets/images/join/build.png"
            maintext="Build A Minority Startup"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
             />

            <JoinBar
            color="#ffc700"
            icon="/assets/images/join/apply.png"
            maintext="Apply to MPA Internship"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/jobs"
             />

            <JoinBar
            color="#ff00b8"
            icon="/assets/images/join/participate.png"
            maintext="Participate as a Mentor"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link="/mentorship"
             />

        </div>
    )
};

export default JoinCard;