import '../../styles/Careers/CareersMainComponent.css';
import JobsMain from '../../pages/careers/jobs.js';
import Link from 'next/link';
import Layout from '../Layout.js';
import NavOne from '../NavOne.js';
import Footer from '../Footer.js';
import {ApplyModal} from './ApplyModal.js';

const CareersMainComponent = (props) => {
    return (
        <Layout>
            <NavOne/>
            <div className="careers-main">
                {props.jobsOn && <ApplyModal open={props.open} job={props.job} closeModal={props.closeModal}/>}
                <div className="careers-wrapper" style={{position:"relative"}}>
                
                    <div className="careers-main-container">
                        <div className="careers-main-container-tabs">
                            <Link href="/careers/companies" as="/careers/companies"><button className="careers-main-container-tabs-tab">Companies</button></Link>
                            <Link href="/careers/jobs"><button className="careers-main-container-tabs-tab">Jobs</button></Link>
                        </div>
                        <div className="careers-main-container-all">
                            {props.children}
                        </div>
                    </div>
                </div>
            </div>
            
            <Footer/>
       </Layout>
    )
}

export default CareersMainComponent;