import React from 'react';
// import Head from 'next/head';
import Link from 'next/link';

const AllyCard = (props) => {

    return (
      <div className="item">
                        <a href={props.item.allyLink} target="_blank">
                <img src={props.item.imgSrc} width="123px" alt="" />
              </a>
      </div>
    );
}

export default AllyCard;



            