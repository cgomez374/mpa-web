import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Courses";

import VideoThree from "../components/VideoThree";
import Faq from "../components/Faq";
import MeetingOne from "../components/MeetingOne";
import MPU from "../components/MPU";

import CodeCamp from "../components/CodeCamp";
const Learn = () => {
    return (
        <Layout pageTitle="Learn">
            <NavOne />
            <PageHeader title="Learn" />
            <CodeCamp/>
                <VideoThree/> 
                <MPU/>
                <Faq/>
            <Footer />
        </Layout>
    );
};

export default Learn;
