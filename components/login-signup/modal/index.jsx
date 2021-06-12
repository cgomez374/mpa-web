import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/index'
import Styles from './modal.module.css'

export default function Index(){
    const [display, setDisplay] = useState(false);

    setTimeout(() => {

        if(display === false)
            setDisplay(true);

    }, 3000);

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