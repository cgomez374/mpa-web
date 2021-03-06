import Link from 'next/link';
import Router from 'next/router';
import React from 'react';
import { FaChevronRight } from "react-icons/fa";
import ApplyIcon from './svg/icons';

function JoinBar(props) {

    const buildMinorityHandler = () => {
        Router.push('/register?redirect=startups');
    }

    return (
        <div>
            {props.link ?
            <Link href={props.link}>
                <div className="bar-container">
                    <div className="first" style={{ backgroundColor: props.color }}></div>
                    <div className="second">
                        <div className="image">
                            {/* <img classname="svg" src={props.icon} alt="Join"/> */}
                            <a class="roundedArea">
                            <props.icon />
                            </a>
                        </div>

                        <div className="bar-content">
                            <div className="card-text">
                                <h3 className="maintext">{props.maintext}</h3>
                                <span className="subtext">{props.subtext}</span>
                            </div>

                            <div className="icon">
                                <FaChevronRight />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </Link>
            :

            <div className="bar-container" onClick={buildMinorityHandler}>
                    <div className="first" style={{ backgroundColor: props.color }}></div>
                    <div className="second">
                        <div className="image">
                        
                            <a class="roundedArea">
                                <props.icon />
                            </a>

                        </div>

                        <div className="bar-content">
                            <div className="card-text">
                                <h3 className="maintext">{props.maintext}</h3>
                                <span className="subtext">{props.subtext}</span>
                            </div>

                            <div className="icon">
                                <FaChevronRight />
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                }
        </div>
    )
};

export default JoinBar;