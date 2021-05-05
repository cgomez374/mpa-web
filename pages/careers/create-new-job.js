import JobCreation from '../../components/career-components/JobCreation.js';
import '../../styles/Careers/JobCreation.css';
import Layout from '../../components/Layout.js';
import NavOne from '../../components/NavOne.js';
import Footer from '../../components/Footer.js';
import { useEffect } from 'react';

const CreateNewJob = () => {
    
    
    function getTodaysDate() {
        let todaysDate=new Date().toString().split(" ").slice(1,4).join(" ")
        return todaysDate
    }
    getTodaysDate()
    return (
        <div className="create-new-job">
            <Layout>
            <NavOne/>
            <div className="create-new-job-page tw-pb-20 tw-pt-2.5">
                <div className="tw-container tw-mx-auto">
                    <div className="tw-mt-2.5 tw-text-center sm:tw-text-right">
                        <div className="tw-inline-flex tw-flex-col tw-text-white tw-border-2 tw-p-2 tw-px-8 tw-rounded-lg tw-mb-20">
                            <div className="company-name tw-inline">COMPANY NAME FROM EMAIL</div>
                            <div>Todays Date: <span className="tw-font-bold">{getTodaysDate()}</span></div>
                        </div>
                    </div>
                    <JobCreation/>
                </div>
            </div>
            <Footer/>
            </Layout>
        </div>
    )
}

export default CreateNewJob;