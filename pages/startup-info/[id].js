import React from "react";
import { useRouter } from "next/router";
import Layout from "../../components/Layout";
import NavOne from "../../components/NavOne";
import StartupTopBar from "../../components/StartupTopBar";
import StartupMainBar from "../../components/StartupMainBar";
import Footer from "../../components/Footer";
import datas from '../../helpers/mockData'

const StartupInfoPage = () => {
    const router = useRouter();
    const data = datas[router.query.id - 1];
    //console.log('data from startup', data)
    if (!data) return <p></p>;

    return (
        <Layout pageTitle="Information">
            <NavOne />
            <section className="section__styles">
                <StartupTopBar data={data} />
                <StartupMainBar data={data} />
            </section>
            <Footer />
        </Layout >
    );
};
export default StartupInfoPage;

