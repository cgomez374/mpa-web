import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";
import TeamOne from "../components/TeamOne";
import TeamTab from "../components/TeamTab";
import Onboarding from "../components/Onboarding";
import TeachersDetails from "../components/TeachersDetails";
import CallToActionOne from "../components/CallToActionOne";
import CallToActionTwo from "../components/CallToActionTwo";
import CallToActionThree from "../components/CallToActionThree";
import CallToActionFour from "../components/CallToActionFour";
import CallToActionFive from "../components/CallToActionFive";
import CallToActionSix from "../components/CallToActionSix";
import Services from "../components/Services";
import Consultancy from "../components/Consultancy";
import Educational from "../components/Educational";
import DiversityTraining from "../components/DiversityTraining";

import Events from "../components/Courses";

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <NavOne />
            {/* <PageHeader title="Services" /> */}
            {/* <SliderTwo/> */}
            {/* <TeamOne/> */}
            {/* <CallToActionFive/> */}
            {/* <CallToActionFour/> */}
            {/* <CallToActionOne/> */}
            <Services/>
            <Consultancy/>
            <Onboarding/>
            <Educational/>
            <DiversityTraining/>
            {/* <CallToActionSix/> */}
            {/* <CallToActionTwo/> */}

            {/* <TeamTab/> */}
            <Footer />
        </Layout>
    );
};

export default ServicesPage;
