import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import Events from "../components/Courses";

const ServicesPage = () => {
    return (
        <Layout pageTitle="Services">
            <NavOne />
            <PageHeader title="Services" />
            <Events />
            <Footer />
        </Layout>
    );
};

export default ServicesPage;
