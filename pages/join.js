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
import Mentorship from "../components/Mentorship";

import Events from "../components/Courses";

const JoinPage = () => {
    return (
        <Layout pageTitle="Join">
            <NavOne />
            {/* <PageHeader title="Services" /> */}
            {/* <SliderTwo/> */}
            {/* <TeamOne/> */}
            <CallToActionFive/>
            <Mentorship/>
            <CallToActionFour/>
            <CallToActionThree/>
            <CallToActionTwo/>
            <CallToActionOne/>

            {/* <TeamTab/> */}
            <Onboarding/>
            <Footer />
        </Layout>
    );
};

export default JoinPage;
