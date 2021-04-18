import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import RegisterSection from '../components/RegisterSection';

function register() {

    return (
        <div>
           <Layout pageTitle="Register">
            <NavOne />
            <RegisterSection />
            <Footer />
        </Layout>
            
        </div>
    )
}

export default register;
