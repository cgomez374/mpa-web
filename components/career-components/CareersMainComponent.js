import JobsMain from '../../pages/careers/jobs.js';
import '../../styles/Careers/CareersMainComponent.css';
import Link from 'next/link';
import Layout from '../Layout.js';
import NavOne from '../NavOne.js';
import Footer from '../Footer.js';


const CareersMainComponent = (props) => {
    return (
        <Layout>
           <NavOne></NavOne>
            <div className="careers-wrapper">
                <div className="careers-main-container">
                    <div className="careers-main-container-tabs">
                        <Link href="/careers/companies"><button className="careers-main-container-tabs-tab">Companies</button></Link>
                        <Link href="/careers/jobs"><button className="careers-main-container-tabs-tab">Jobs</button></Link>
                    </div>
                    <div className="careers-main-container-all">
                        {props.children}
                    </div>
                </div>
            </div>
            <Footer/>
       </Layout>
    )
}

export default CareersMainComponent;