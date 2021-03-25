import React from 'react';
// import Head from 'next/head';
import Link from 'next/link';

const BrandCard = (props) => {

    return (
       <div className="item">
            <a href={props.item.brandLink} target="_blank">
                <img src={props.item.imgSrc} padding="1em" width="123px" alt="" />
            </a>
        </div>
    );
}

export default BrandCard;
