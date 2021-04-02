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
import PrincipleDiversity from "../components/PrincipleDiversity";
import DiversityTraining from "../components/DiversityTraining";

import Events from "../components/Courses";

const PrincipleDiversityPage = () => {
    return (
        <Layout pageTitle="Services">
            <NavOne />
            {/* <PageHeader title="Services" /> */}
            {/* <SliderTwo/> */}
            {/* <TeamOne/> */}
            {/* <CallToActionFive/> */}
            {/* <CallToActionFour/> */}
            {/* <CallToActionOne/> */}
            <PrincipleDiversity/>
            {/* <CallToActionSix/> */}
            {/* <CallToActionTwo/> */}

            {/* <TeamTab/> */}
            <Footer />
        </Layout>
    );
};

export default PrincipleDiversityPage;
