import React from 'react';
import Layout from "../components/Layout";
import HomepageNav from "../components/HomepageNav";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import LoginSection from '../components/LoginSection';

function login() {
    return (
        <div>
            <Layout pageTitle="Login">
            <HomepageNav />
                <LoginSection />
                <Footer />
            </Layout>

        </div>
    )
}

export default login;
