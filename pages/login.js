import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import LoginSection from '../components/LoginSection';

function login() {
    return (
        <div>
            <Layout pageTitle="Login">
                <NavOne />
                <LoginSection />
                <Footer />
            </Layout>

        </div>
    )
}

export default login;
