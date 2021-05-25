import React from 'react';
import { FaChevronRight } from "react-icons/fa";

function JoinBar(props) {
    return (
        <div className="bar-container">
            <div className="first"></div>
            <div className="second">
                <div className="image">
                    <img src={props.icon} alt="Join"/>
                </div>

                <div className="bar-content">
                    <div>
                        <h3 className="maintext">{props.maintext}</h3>
                        <span className="subtext">{props.subtext}</span>
                    </div>

                    <div className="icon">
                        <FaChevronRight />
                    </div>
                </div>
                
            </div>
            
        </div>
    )
};

export default JoinBar;