import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import SliderOne from "../components/SliderOne";
import SliderTwo from "../components/SliderTwo";
import SliderThree from "../components/SliderThree";
import Footer from "../components/Footer";
import AboutTwo from "../components/AboutTwo";
import CourseOne from "../components/CourseOne";
import VideoTwo from "../components/VideoTwo";
import CountdownKipso from "../components/CountdownKipso";
import CourseCatOne from "../components/CourseCatOne";
import CourseCatTwo from "../components/CourseCatTwo";
import CourseCatThree from "../components/CourseCatThree";

import CallToActionThree from "../components/CallToActionThree";
import BrandsTwo from "../components/BrandsTwo";
import BrandsOne from "../components/BrandsOne";
import BlogTwo from "../components/BlogTwo";
import CallToActionFour from "../components/CallToActionFour";
import SubscribeOne from "../components/SubscribeOne";
import TestimonialOne from "../components/TestimonialOne";
import Testimonials from "../components/Testimonials";
import HomeBanner from "../components/HomeBanner";
import Principles from "../components/Principles";
import Services from "../components/Services";
import ServicesTiles from "../components/ServicesTiles";
import MembersWorldwide from "../components/MembersWorldwide";
import Mission from "../components/Mission";
import OnMedia from "../components/OnMedia";


const HomePage = () => (

    <Layout pageTitle="Minority Programmers Associations - Connecting programmers">
      <Topbar />
      <NavOne />
      {/* <SliderTwo /> */}
      <HomeBanner/>
      {/* <AboutTwo /> */}
      <MembersWorldwide/>
      <Mission/>
      {/* <VideoTwo /> */}
      <Principles/>
      <CountdownKipso />
      <BrandsTwo />
      {/* <Services/> */}
      {/* <CallToActionThree /> */}
      {/* <CourseCatTwo/> */}
      <ServicesTiles/>
      <BrandsOne />
      <Testimonials/>
      <OnMedia/>
      <CallToActionFour />
      <SubscribeOne />
      <Footer />
    </Layout>

)

export default HomePage;