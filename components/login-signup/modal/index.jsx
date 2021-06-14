import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/index'
import Styles from './modal.module.css'

export default function Index({ displayModal }){
    const [display, setDisplay] = useState(displayModal);

    const closeModal = () => {
        if(display === true)
            setDisplay(false);
    }
    return(
        <div className={Styles.container} >
            { display === true ? <Card closeModal={ closeModal }/> : null }
        </div>
    )
}