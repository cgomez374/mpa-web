import '../../styles/Careers/CareersPage.css';
import CareersMainComponent from '../../components/career-components/CareersMainComponent.js';
import React, {Component} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';


const CareersPage = () => {
    let router = useRouter();
    useEffect(()=>{
        console.log("push")
            router.push('/careers/companies')
        },
        [])
    return (
           <div className="careers">
                       Redirecting to Companies Section
                
            </div>
            
        
        
    );
};

export default CareersPage;
