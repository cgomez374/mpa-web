import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import CallToActionOne from "../components/CallToActionOne";
import CallToActionTwo from "../components/CallToActionTwo";
import CallToActionThree from "../components/CallToActionThree";
import CallToActionFour from "../components/CallToActionFour";
import CallToActionFive from "../components/CallToActionFive";
import CallToActionSix from "../components/CallToActionSix";
import PrincipleSoftware from "../components/PrincipleSoftware";


import Events from "../components/Courses";

const PrincipleSoftwarePage = () => {
    return (
        <Layout pageTitle="Services">
            <NavOne />
            {/* <PageHeader title="Services" /> */}
            {/* <SliderTwo/> */}
            {/* <TeamOne/> */}
            {/* <CallToActionFive/> */}
            {/* <CallToActionFour/> */}
            {/* <CallToActionOne/> */}
            <PrincipleSoftware/>
            {/* <CallToActionSix/> */}
            {/* <CallToActionTwo/> */}

            {/* <TeamTab/> */}
            <Footer />
        </Layout>
    );
};

export default PrincipleSoftwarePage;
