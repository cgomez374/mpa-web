import React from 'react';
import Layout from "../components/Layout";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import Mentorship from "../components/Mentorship";
import MapJoin from "../components/MapJoin";
import Chapter from "../components/Chapter";
import Career from "../components/Career";
import Partner from "../components/Partner";
import BrandsOne from "../components/BrandsOne";
import BrandsTwo from "../components/BrandsTwo";
import JoinForm from '../components/JoinForm';

const SignupPage = () => {
    return (
        <Layout pageTitle="Signup">
            <NavOne />
            <MapJoin/>
            <Chapter/>
            <Mentorship/>
            {/* <JoinForm/>
            <Career/>
            <BrandsOne/>
            <Partner/>
            <BrandsTwo/> */}
            <Footer />
        </Layout>
    );
};

export default SignupPage;
