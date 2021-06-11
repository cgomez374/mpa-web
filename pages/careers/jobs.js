import '../../styles/Careers/CareersPage.css';
import '../../styles/Careers/JobsMain.css';
import {JobsFilters} from '../../components/career-components/JobsFilters.js';
import {ApplyModal} from '../../components/career-components/ApplyModal.js';
import Link from 'next/link';
import CareersMainComponent from '../../components/career-components/CareersMainComponent';
import {useState, useEffect, useRef} from 'react';
import JobsList from '../../components/career-components/JobsList.json';
import {useRouter} from 'next/router';
import { list } from 'postcss';
import { route } from 'next/dist/next-server/server/router';



export async function getServerSideProps(context) {
    return {
        props:{
            query:context.query
        }
    
    }
}



const JobsMain = (props) => {
    const [currentJob, changeCurrentJob]=useState(JobsList[0])
    const [modalView,toggleModalView] = useState(false);

    

    const router=useRouter();
    
    function changePerPage(e){
        let queryObj={...props.query};
        queryObj.per_page=e.target.value;
        router.push({query:queryObj})
    }


    function inputSearchSubmit(e){
        //if nothing is changed in the input searches, rerun query with same parameters
        let queryObj={};
        let blank=true;
        if(e.target.parentNode.childNodes[0].value){
            queryObj.description=e.target.parentNode.childNodes[0].value;
            blank=false;
        }
        if(e.target.parentNode.childNodes[1].value){
            queryObj.location=e.target.parentNode.childNodes[1].value
            blank=false;
        }

        if(!blank){
            router.push({query:queryObj})
        }

    }


    //push new query based on form submission or remote being toggled
    function submitForm(btn) {
        
        let queryObj={...props.query}
        
        //reset to page 1
        if(queryObj.page){
            delete queryObj.page
        }

        // close form when update button on filter is clicked
        if(btn.target.name!="remote"){
            btn.target.parentNode.parentNode.style.display="none";
        }else if(btn.target.name=="remote"){
            if(btn.target.checked){
                router.push({query:{...props.query,remote:true}})
                return
            }else {
                if(queryObj.remote){
                    delete queryObj.remote
                    
                    router.push({query:queryObj})
                    return
                }
            }
        }

        
        
        let filterArray=[]


        //query generator for date_posted and pay, there can only be one option for each
        if(btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name=="date_posted" ||
            btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name=="pay"){
            for (let i of btn.target.parentNode.parentNode.childNodes[0].querySelectorAll("input")){
                if(i.checked){
                    if(i.value!="any"){
                        queryObj[i.name]=i.value
                    }else {
                        if(queryObj[i.name]){
                           delete queryObj[i.name]
                        }
                    }
                }
            }
            router.push({query:queryObj})
        }else if(btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name=="company_type" ||
        btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name=="job_type"){
            for (let i of btn.target.parentNode.parentNode.childNodes[0].querySelectorAll("input")){
                if(i.checked){
                    filterArray.push(i.value)
                }
            }
            if(filterArray.length){
                queryObj[btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name]=filterArray.join(",")
            }else {
                if(queryObj[btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name]){
                    delete queryObj[btn.target.parentNode.parentNode.childNodes[0].querySelector("li").querySelector("input").name]
                }
            }
            router.push({query:queryObj})
        }
        
    }

    
    let winSize=useRef(null)
    useEffect(()=>{
        winSize.current=window.innerWidth>991?"large":"small"
        
    },[])

    function containerReset() {
        if(window.innerWidth>991 && document.querySelector(".jobsMain")){
            document.getElementsByClassName("jobs-main-container-list")[0].style.display="block";
            document.getElementsByClassName("jobs-main-container-single")[0].style.display="block";
            
            winSize.current="large"
        }else if (winSize.current=="large" && document.querySelector(".jobsMain")){
            document.getElementsByClassName("jobs-main-container-single")[0].style.display="none";
            winSize.current="small"
        }
    }
    
    

    useEffect(()=>{
        window.addEventListener("resize",containerReset)
    },[])

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

    function openFilterForm(btn){
        //if the form is open, close it and return 
        console.log(window.getComputedStyle(btn.nextSibling).display)
        if(window.getComputedStyle(btn.nextSibling).display=="block"){
            btn.nextSibling.style.display="none"
            return
        }
        
        //close all other forms when any form button is clicked on
        for(let i of document.getElementsByClassName("job-filter-item-form")) {
            i.style.display="none"
        }



        //check boxes based on query
        if(btn.parentNode.querySelector("input").name=="company_type" ||
        btn.parentNode.querySelector("input").name=="job_type"){
            for (let i of btn.parentNode.querySelectorAll("input")){
                if(props.query[i.name]){
                    if(props.query[i.name].indexOf(i.value)!=(-1)){
                        i.checked=true;
                    }else {
                        i.checked=false;
                    }
                }else {
                    i.checked=false
                }
            }
        }else if(btn.parentNode.querySelector("input").name=="date_posted" ||
        btn.parentNode.querySelector("input").name=="pay"){
            if(props.query[btn.parentNode.querySelector("input").name]){
                for(let i of btn.parentNode.querySelectorAll("input")){
                    if(props.query[i.name]==i.value){
                        i.checked=true
                    }else {
                        i.checked=false
                    }
                }
            }else {
                for(let i of btn.parentNode.querySelectorAll("input")){
                    i.checked=false
                }
                btn.parentNode.querySelectorAll("input")[0].checked=true
            }
        }
        
        


        //open the form which is the next sibling of the button that was clicked
        if(btn.nextSibling) {
            btn.nextSibling.style.display="block";
        }
    }


    //jobStubs will be fetched from database and then map... the fetch will have ALL query parameters(search description, search location, filters, jobs per page, current page)
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



    let totalCount=102;
    let perPage=10;
    let totalPages=Math.ceil(102/perPage); //11
    
    function makePages () {
        let totPages=totalPages;

        let queryObj={...props.query};
        let page=queryObj.page;
        let pageArray=[];

        if(page){
            pageArray.push(page)
            
            //push page to first placeholder if page number is greater than 1 and there are more than one pages
            if(page>1){
                pageArray.unshift(1)
            }

            //push page to second placeholder if page number is less than the last page
            if(page<totPages){
                pageArray.push(totPages)
            }
        }else {
            pageArray.push(1);
            if(totPages>1){
                pageArray.push(totPages)
            }
        }
        return pageArray.map((page)=>{
            let currPage;
            if(!props.query.page){
                currPage=1
            }else {
                currPage=props.query.page
            }

            return (                    
                <a style={currPage==page?{background:"#151371"}:{}}><button style={currPage==page?{color:"white"}:{}} onClick={()=>pageSelector(page)}>{page}</button></a>
            )
        })
    }
    
    function pageSelector(page) {
        console.log(page)
        let queryObj={...props.query}
        if(page==1 && queryObj.page){
            delete queryObj.page;
        }else if(page != 1) {
            queryObj.page=page;
        }

        router.push({query:queryObj})
    }

    function nextButton(){
        let queryObj={...props.query};
        if(!queryObj.page){
            queryObj.page=2;
        }else {
            queryObj.page=Number(queryObj.page)+1;
            console.log(typeof queryObj.page)
        }
        
        router.push({query:queryObj})
    }

    function prevButton() {
        console.log("prev")
        let queryObj={...props.query};
        if(queryObj.page==2){
            delete queryObj.page;
        }else {
            queryObj.page=Number(queryObj.page)-1;
        }
        
        router.push({query:queryObj})
    }

    
    
    return (
        <CareersMainComponent jobsOn={true} open={modalView} job={currentJob} closeModal={()=>toggleModalView(false)}>
            
            <div className="jobsMain">
            
                <div className="jobsMain-search">
                    <h2 className="jobsMain-search-heading">Search For Jobs</h2>
                    <div className="jobsMain-search-links">
                        <a className="jobsMain-search-links-link" href="/careers/jobs">Browse All</a>
                        <a className="jobsMain-search-links-link" href="/careers/saved-jobs">Saved</a>
                    </div>
                    <form className="jobsMain-search-inputs" >
                        <input type="search" name="description" placeholder="Search Jobs by Description"/>
                        <input type="search" name="location" placeholder="City, State, Country, or Zip Code"/>
                        <button type="button" onClick={(e)=>inputSearchSubmit(e)}>Search</button>
                    </form>
                </div>
                <div className="jobs-main-filters">
                    <JobsFilters submitForm={submitForm} openFilterForm={openFilterForm}/>
                </div>
                <div className="jobs-main-count">
                    {`${jobStubs.length} Jobs`}
                </div>
                <div className="jobsMain-perPage">
                    <label>Jobs Per Page:</label>
                    <select name="perPage_box" onChange={(e)=>changePerPage(e)}defaultValue="10">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                    </select>
                </div>
                <div className="jobs-main-container">

                    <div className="jobs-main-container-list">
                        {jobStubs}

                        <div className="jobs-paginator">
                            <a><button className="jobs-paginator-btn" disabled={props.query.page?false:true} onClick={prevButton}>{"<"}</button></a>
                            <div className="jobs-paginator-numbers">
                                {makePages()}
                            </div>
                            <a><button className="jobs-paginator-btn" disabled={props.query.page==totalPages?true:false} onClick={nextButton}>{">"}</button></a>
                        </div>

                    </div>

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
                                        <a><button className="current-job-view-box1-jobInfo-postSave-apply" onClick={()=>toggleModalView(true)}>Apply</button></a>
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
                                    <div>{currentJob.remote===true?"Yes":"No"}</div>
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
                                            <li key={index}><div className="job-skills-list-dot"><div className="job-skills-list-dot-inner"></div></div><span>{skill.years}yr</span><span> {skill.skill}</span></li>
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