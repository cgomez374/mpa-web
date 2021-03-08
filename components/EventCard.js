import React from 'react';
// import Head from 'next/head';
import Link from 'next/link';


const EventCard = (props) => {

    return (
        <div className="col-lg-4">
        <div className="course-one__single">
            <div className="course-one__image">
                <img src={props.imgSrc} width="370px" height="243px" alt="" />
                    <i className="far fa-heart"></i>
            </div>
            <div className="course-one__content">
                <a href="#" target="_blank" className="course-one__category">{props.catName}</a>
                <h2 className="course-one__title"><Link href={props.eventLink}><a>{props.eventName}</a></Link>
                </h2>
                <div className="course-one__meta">
                    <a href={props.eventLink}><i className="far fa-clock"></i>{props.time}</a>
                </div>
                <a href={props.actionLink} target="_blank" className="course-one__link">{props.callToAction}</a>
            </div>
        </div>
    </div>
    );
}

export default EventCard;