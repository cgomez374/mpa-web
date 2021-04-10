import React from 'react'

import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";

import { MentorshipRegister } from "../components/MentorshipRegister";

import "../components/MentorshipCSS/mentorship.css"

function mentorship() {
    return (
        <div >
            <Layout pageTitle="MPA - Mentorship">
                <Topbar />
                <NavOne />
                <section className="home-section">
                    <MentorshipRegister />
                </section>
                <Footer />
            </Layout>
        </div>
    )
}

export default mentorship
