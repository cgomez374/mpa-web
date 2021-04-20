import '../../styles/Careers/JobsMain.css';
import '../../styles/Careers/CareersPage.css';
import {JobsFilters} from '../../components/career-components/JobsFilters.js';
import Link from 'next/link';
import CareersMainComponent from '../../components/career-components/CareersMainComponent';
import {useState, useEffect} from 'react';
import JobsList from '../../components/career-components/JobsList.json';


const JobsMain = () => {
    const [currentJob, changeCurrentJob]=useState(JobsList[0])

    function changeJobAndColor(e,currJob) {
        changeCurrentJob(prevJob=>currJob)
        if(window.innerWidth<=991) {
            document.getElementsByClassName("jobsMain-search")[0].style.display="none";
            document.getElementsByClassName("jobs-main-container-list")[0].style.display="none";
            document.getElementsByClassName("jobs-main-filters")[0].style.display="none";
            document.getElementsByClassName("jobsMain-perPage")[0].style.display="none";
            document.getElementsByClassName("jobs-main-container-single")[0].style.display="block";
        }
    }

   

    function closeSingle () {
        document.getElementsByClassName("jobsMain-search")[0].style.display="block";
        document.getElementsByClassName("jobs-main-filters")[0].style.display="block";
        document.getElementsByClassName("jobsMain-perPage")[0].style.display="block";
        document.getElementsByClassName("jobs-main-container-single")[0].style.display="none";
        document.getElementsByClassName("jobsMain")[0].style.height="auto";
        document.getElementsByClassName("jobs-main-container-list")[0].style.display="block";
    }

    let jobStubs=JobsList.map ((job)=>
        <div className="job-stub" key={job.id} onClick={(e)=>changeJobAndColor(e,job)}>
            <div className="job-stub-header">
                <div className="job-stub-title">{job.job_title}</div>
                <div className="job-stub-company">{job.company_name}</div>
                <div className="job-stub-location">{job.location.city+", "+job.location.state}</div>
            </div>
            <div className="job-stub-description">{job.job_description}</div>
            <div className="job-stub-footer">
                <div className="job-stub-postDate">Posted: {job.created_at}</div>
                <a className="job-stub-saveLink" href="#">Save Job</a>
            </div>
        </div> 
    )

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
                <div className="jobsMain-perPage">
                    <label>Jobs Per Page: </label>
                    <select>
                        <option>10</option>
                        <option>25</option>
                        <option>50</option>
                    </select>
                </div>
                <div className="jobs-main-container">
                    <div className="jobs-main-container-list">{jobStubs}</div>
                    <div className="jobs-main-container-single">
                        <div className="jobs-main-container-single-close" onClick={closeSingle}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="13.426" height="13.423" viewBox="0 0 13.426 13.423">
                                <path id="Icon_ionic-ios-close" data-name="Icon ionic-ios-close" d="M19.589,18l4.8-4.8A1.124,1.124,0,0,0,22.8,11.616l-4.8,4.8-4.8-4.8A1.124,1.124,0,1,0,11.616,13.2l4.8,4.8-4.8,4.8A1.124,1.124,0,0,0,13.2,24.384l4.8-4.8,4.8,4.8A1.124,1.124,0,1,0,24.384,22.8Z" transform="translate(-11.285 -11.289)"/>
                            </svg>
                        </div>
                        <div className="current-job-view">
                            <div className="current-job-view-box1">
                                <div className="current-job-view-box1-jobInfo">
                                    <div className="current-job-view-box1-jobInfo-basic">
                                        <div className="current-job-view-box1-jobInfo-basic-title">{currentJob.job_title}</div>
                                        <div className="current-job-view-box1-jobInfo-basic-company">{currentJob.company_name}</div>
                                        <div><i className="current-job-view-box1-jobInfo-basic-location">{currentJob.location.city + ", " + currentJob.location.state}</i></div>
                                    </div>
                                    <div className="current-job-view-box1-jobInfo-postSave">
                                        <a><button className="current-job-view-box1-jobInfo-postSave-apply">Apply</button></a>
                                        <div className="current-job-view-box1-jobInfo-postSave-date">Posted: {currentJob.created_at}</div>
                                        <a className="current-job-view-box1-jobInfo-postSave-save" href="#">Save Job</a>
                                        
                                    </div>
                                </div>
                                <div className="current-job-view-box1-companyInfo">
                                    <div className="current-job-view-box1-companyInfo-logo">
                                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="180.502" height="168.774" viewBox="0 0 180.502 168.774">
                                        <defs>
                                            <radialGradient id="radial-gradient" cx="0.648" cy="0.226" r="0.944" gradientTransform="matrix(-0.851, -0.415, 0.387, -0.91, -0.404, -0.085)" gradientUnits="objectBoundingBox">
                                            <stop offset="0.016" stop-color="#151371"/>
                                            <stop offset="0.505" stop-color="#ff00b8"/>
                                            <stop offset="1" stop-color="#ffc700"/>
                                            </radialGradient>
                                        </defs>
                                        <g id="mp_gradient_rock_2_2" data-name="mp_gradient_rock (2) 2" transform="translate(-39.811)">
                                            <path id="Path_1" data-name="Path 1" d="M176.5,154.87a48.552,48.552,0,0,0,40.585-45.279l3.153-58.437A48.554,48.554,0,0,0,171.742,0H144.889a48.587,48.587,0,0,0-26.952,8.16L89.17,27.338A48.555,48.555,0,0,0,73.143,45.111L45.506,97.59c-18.689,35.488,11.3,77.034,50.894,70.5Z" fill="url(#radial-gradient)"/>
                                            <path id="Path_2" data-name="Path 2" d="M95.721,66.343H77.785v50.882H95.721Z" fill="#fff"/>
                                            <path id="Path_3" data-name="Path 3" d="M131.592,66.651H113.718v50.882h17.874Z" fill="#fff"/>
                                            <path id="Path_4" data-name="Path 4" d="M113.719,48.727h-18V66.652h18Z" fill="#fff"/>
                                            <path id="Path_5" data-name="Path 5" d="M167.467,66.651h-18v50.882h18Z" fill="#fff"/>
                                            <path id="Path_6" data-name="Path 6" d="M149.467,48.727H131.593V66.652h17.874Z" fill="#fff"/>
                                            <path id="Path_7" data-name="Path 7" d="M185.4,48.727H167.466V66.652H185.4Z" fill="#fff"/>
                                            <path id="Path_8" data-name="Path 8" d="M203.276,64.5H185.4V82.421h17.875Z" fill="#fff"/>
                                            <path id="Path_9" data-name="Path 9" d="M185.4,82.422H167.466v17.864H185.4Z" fill="#fff"/>
                                        </g>
                                    </svg>

                                    </div>
                                    <div className="current-job-view-box1-companyInfo-diversity">
                                        <span>Diversity Score</span>
                                        <div className="current-job-view-box1-companyInfo-diversity-score">9/10</div>
                                    </div>
                                </div>

                            </div>

                            <div className="current-job-view-box2">
                                <div className="current-job-view-box2-type">
                                    <span>Job Type</span>
                                    <div>{currentJob.job_type}</div>
                                </div>
                                <div className="current-job-view-box2-hours">
                                    <span>Weekly Hours</span>
                                    <div>{currentJob.weekly_hours}</div>
                                </div>
                                <div className="current-job-view-box2-remote">
                                    <span>Remote?</span>
                                    <div>{currentJob.remote=="true"?"Yes":"No"}</div>
                                </div>
                            </div>
                            <div className="current-job-view-box3">
                                <span className="current-job-view-box3-title">Job Description</span>
                                <div className="current-job-view-box3-text">
                                    <p>{currentJob.job_description}</p>
                                </div>
                            </div>

                            <div className="current-job-view-box4">
                                <span className="current-job-view-box4-title">Min Requirements</span>
                                <div className="current-job-view-box4-text">
                                    <ul>
                                        {currentJob.min_requirements.map((skill,index)=>
                                            <li key={index}><div className="job-skills-list-dot"><div className="job-skills-list-dot-inner"></div></div><span>{skill}</span></li>
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <div className="current-job-view-box5">
                                <span>Additional Information</span>
                                <div className="current-job-view-box5-container">
                                    <div>
                                        <span>Salary</span>
                                        <div>{currentJob.pay}</div>
                                    </div>
                                    <div>
                                        <span>Addit. Compensation</span>
                                        <div>{currentJob.additional_compensation}</div>
                                    </div>
                                    <div>
                                        <span>Benefits</span>
                                        <div>{currentJob.benefits}</div>
                                    </div>
                                </div>
                            </div>
                            <div className="current-job-view-box6">
                                <span>Industry: </span>
                                <span>{currentJob.job_industry}</span>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </CareersMainComponent>
    )
}



export default JobsMain;