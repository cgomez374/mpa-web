import React from 'react';
import JoinBar from './joinBar';

function JoinCard() {
    return (
        <div className="card-container">
            
            <div className="pb-4">
                <h1 className="card-head">HOW WOULD YOU LIKE TO JOIN ?</h1>
                <span className="card-desc">Please select the category that interests you.</span>
            </div>

            <JoinBar
            icon="/assets/images/join/join.png"
            maintext="Join the Minority Programmers Network"
            subtext="Lorem ipsum dolor sit amet, consectetur ."
            link=""
             />

        </div>
    )
};

export default JoinCard;