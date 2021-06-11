import JobsMain from '../../pages/careers/index.js';
import Link from 'next/link';
import Layout from '../Layout.js';
import NavOne from '../NavOne.js';
import Footer from '../Footer.js';
import {ApplyModal} from './ApplyModal.js';
import HomepageNav from '../HomepageNav'

const CareersMainComponent = (props) => {
    return (
        <Layout>
            <HomepageNav />
            <div className="careers-main">
                {props.jobsOn && <ApplyModal open={props.open} job={props.job} closeModal={props.closeModal}/>}
                <div className="careers-wrapper" style={{position:"relative"}}>
                
                    <div className="careers-main-container tw-mt-20">
                        <div className="careers-main-container-tabs">
                            <Link href="/careers/companies" as="/careers/companies"><button className="careers-main-container-tabs-tab">Companies</button></Link>
                            <Link href="/careers"><button className="careers-main-container-tabs-tab">Jobs</button></Link>
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