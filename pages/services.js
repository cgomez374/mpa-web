import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import SliderTwo from "../components/SliderTwo";
import TeamOne from "../components/TeamOne";
import TeamTab from "../components/TeamTab";
import Onboarding from "../components/Onboarding";

import Events from "../components/Courses";

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <NavOne />
            {/* <PageHeader title="Services" /> */}
            <SliderTwo/>
            <TeamOne/>
            <TeamTab/>
            <Onboarding/>
            <Footer />
        </Layout>
    );
};

export default ServicesPage;
