import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Card from '../card/index'
import Styles from './modal.module.css'

export default function Index({ closeModal }){
    return(
        <div className={Styles.container} >
            <Card closeModal={ closeModal } />
        </div>
    )
}