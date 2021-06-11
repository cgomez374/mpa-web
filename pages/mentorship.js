import React from 'react'
import HomepageNav from "../components/HomepageNav";
import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";

import { MentorshipRegister } from "../components/MentorshipRegister";

function mentorship() {
    return (
        <div >
            <Layout pageTitle="MPA - Mentorship">
            <HomepageNav />
                <section className="home-section">
                    <MentorshipRegister />
                </section>
                <Footer />
            </Layout>
        </div>
    )
}

export default mentorship