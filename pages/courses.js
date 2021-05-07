import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Courses";
import CourseOne from "../components/CourseOne";
import CourseTwo from "../components/CourseTwo";
import CourseThree from "../components/CourseThree";

const CoursesPage = () => {
    return (
        <Layout pageTitle="Events">
            <NavOne />
            <PageHeader title="Events" />
            <Events />
            <Footer />
            <CourseOne />
            <CourseTwo />
            <CourseThree />
        </Layout>
    );
};

export default CoursesPage;
