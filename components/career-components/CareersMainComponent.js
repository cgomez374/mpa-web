import JobsMain from './JobsMain.js';
import '../../styles/Careers/CareersMainComponent.css';
import {useState} from 'react';

const CareersMainComponent = () => {
    const [sectionState,changeSectionState]=useState("companies");

    return (
        <div className="wrapper">
            <div className="careers-main-container">
                <div className="careers-main-container-tabs">
                    <button className="careers-main-container-tabs-tab" onClick={()=>changeSectionState("companies")}>Companies</button>
                    <button className="careers-main-container-tabs-tab" onClick={()=>changeSectionState("jobs")}>Jobs</button>
                </div>
                <div className="careers-main-container-all">
                    {sectionState==="companies" && <div>COMPANIES SECTION</div>}
                    {sectionState==="jobs" && <JobsMain/>}
                </div>
            </div>
            
            
        </div>

    )
}

export default CareersMainComponent;