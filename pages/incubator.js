import React from 'react';
import { useRouter } from "next/router";
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import IncubatorHero from '../components/IncubatorHero';
import FeaturedStartups from '../components/FeaturedStartups';
import FeaturedAdvice from '../components/FeaturedAdvice';
import FeaturedUpcoming from '../components/FeaturedUpcoming';
import FeaturedMyStartup from '../components/FeaturedMyStartup';
import Footer from "../components/Footer";
import datas from '../helpers/mockData'

const IncubatorPage = () => {
    const router = useRouter();
    const data = datas[router.query.id];
    // console.log('data from incubator', data)
    return (
        <Layout pageTitle="Incubator">
            <NavOne />
            <IncubatorHero />
            <section className="section__styles">
                <FeaturedMyStartup data={data} />
                <FeaturedStartups data={data} />
                <FeaturedAdvice />
                <FeaturedUpcoming data={data} />
            </section>
            <Footer />
        </Layout>
    );
};
export default IncubatorPage;
