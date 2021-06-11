import React from 'react';
import Layout from "../components/Layout";
import HomepageNav from "../components/HomepageNav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import RegisterSection from '../components/RegisterSection';

function register() {

    return (
        <div>
            <Layout pageTitle="Register">
            <HomepageNav />
                <RegisterSection />
                <Footer />
            </Layout>

        </div>
    )
}

export default register;
