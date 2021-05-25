import React from 'react';
import Layout from "../components/Layout";
import HomepageNav from '../components/HomepageNav';
import NavThree from "../components/NavThree";
import Footer from "../components/Footer";
import HomepageHeader from '../components/HomepageHeader';
import HomepageAbout from '../components/HomepageAbout';
import HomepageApp from '../components/HomepageApp';
import HomepageCore from '../components/HomepageCore';
import HomepageWave from '../components/HomepageWave';
import HomepageTeam from '../components/HomepageTeam';
import HomepageTestimonials from '../components/HomepageTestimonials';
import HomepageDonate from '../components/HomepageDonate';


const HomepageFour = () => {
    return (
        <Layout pageTitle="MPA | Home 4">
            {/* <NavThree /> */}
            <HomepageNav />
            <HomepageHeader />
            <HomepageAbout />
            <HomepageApp />
            <HomepageCore />
            <HomepageWave />
            <HomepageTeam />
            <HomepageTestimonials />
            <HomepageDonate />
            <Footer />
        </Layout>
    )
}

export default HomepageFour;