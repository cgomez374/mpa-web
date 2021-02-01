import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Courses";
import EventTypes from "../components/EventTypes";
import CourseOne from "../components/CourseOne";
import UpcomingEvents from "../components/UpcomingEvents";

import PastEvents from "../components/PastEvents";

import CourseTwo from "../components/CourseTwo";
import CourseThree from "../components/CourseThree";
const EventsPage = () => {
    return (
        <Layout pageTitle="Events">
            <NavOne />
            {/* <PageHeader title="Events" /> */}
            <EventTypes/>
            <UpcomingEvents/>

            <PastEvents/>
            
            <Footer />
        </Layout>
    );
};

export default EventsPage;
