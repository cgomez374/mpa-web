import '../styles/Careers/CareersPage.css';
import CareersMainComponent from '../components/career-components/CareersMainComponent.js';
import React, {Component} from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Layout from "../components/Layout";
import NavOne from '../components/NavOne';
import Footer from '../components/Footer';


const CareersPage = () => {
    return (
       <Layout>
           <NavOne/>
           <div className="careers">
            <div className="careers-page wrapper">
                <CareersMainComponent/>
            </div>
        </div>
            <Footer/>
       </Layout>
        
        
    );
};

export default CareersPage;
