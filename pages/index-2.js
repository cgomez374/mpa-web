import React from 'react';
import Layout from "../components/Layout";
import NavTwo from "../components/NavTwo";
import NavThree from "../components/NavThree";

import SliderTwo from "../components/SliderTwo";
import Footer from "../components/Footer";
import CourseCatTwo from "../components/CourseCatTwo";
import AboutOne from "../components/AboutOne";
import CourseTwo from "../components/CourseTwo";
import TeamOne from "../components/TeamOne";
import Pricing from "../components/Pricing";
import MeetingOne from "../components/MeetingOne";
import CallToActionTwo from "../components/CallToActionTwo";
import BlogThree from "../components/BlogThree";

const HomePageTwo = () => {
    return (
        <Layout pageTitle="MPA | Home 2">
            <NavThree />
            <SliderTwo />
            <CourseCatTwo />
            <AboutOne />
            <CourseTwo />
            <TeamOne />
            <Pricing />
            <MeetingOne />
            <CallToActionTwo />
            <BlogThree />
            <Footer />
        </Layout>
    );
};

export default HomePageTwo;
