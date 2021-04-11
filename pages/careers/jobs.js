import '../../styles/Careers/JobsMain.css';
import {JobsList} from '../../components/career-components/JobsList.js';
import {JobsFilters} from '../../components/career-components/JobsFilters.js';
import Link from 'next/link';
import CareersMainComponent from '../../components/career-components/CareersMainComponent';



const JobsMain = () => {
    return (
        <CareersMainComponent>
            <div className="jobsMain">
                <div className="jobsMain-search">
                    <h2 className="jobsMain-search-heading">Search For Jobs</h2>
                    <div className="jobsMain-search-links">
                        <a className="jobsMain-search-links-link" href="#">Browse All</a>
                        <a className="jobsMain-search-links-link" href="#">Saved</a>
                    </div>
                    <div className="jobsMain-search-inputs">
                        <input type="search" placeholder="Search Jobs by Description"/>
                        <input type="search" placeholder="City, State, or Zip Code"/>
                        <button type="submit">Search</button>
                    </div>
                </div>
                <div className="jobs-main-filters">
                    <JobsFilters/>
                </div>
                <div className="jobs-main-container">
                    <div className="jobs-main-container-list">df</div>
                    <div className="jobs-main-container-single">dsfd</div>
                </div>
            </div>
        </CareersMainComponent>
    )
}



export default JobsMain;