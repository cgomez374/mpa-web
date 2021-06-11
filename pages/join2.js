import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import NavThree from "../components/NavThree";
import PageHeader from "../components/PageHeader";
import Footer from "../components/Footer";
import JoinCard from '../components/join/joinCard';

const JoinPage = () => {
    return (
        <Layout  pageTitle="Join">
            <NavOne />

            <div id="join">
                <div className="container">
                    <h1 className="title">MINORITY PROGRAMMERS ASSOCIATION</h1>
                    <span className="desc">Code, Culture, and Community.</span>

                    <JoinCard />
                </div>
 
            </div>
            

            <Footer />
        </Layout>
    );
};

export default JoinPage;
