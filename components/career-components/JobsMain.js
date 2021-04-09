import '../../styles/Careers/JobsMain.css';
import {JobsList} from './JobsList.js'; 

import {JobsFilters} from './JobsFilters.js';
import Link from 'next/link';

const JobsMain = () => {
    

    return (
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
    )
}



export default JobsMain;