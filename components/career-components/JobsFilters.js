import { useEffect, useState } from 'react';
import '../../styles/Careers/JobsFilters.css';

export const JobsFilters = (props) => {

    
    //closes form when cancel is clicked
    function closeForm(btn) {
        btn.parentNode.parentNode.style.display="none";
    }

    //toggles the filters options/buttons when the "filter" button is clicked on small screens
    function openFilters () {
        if(window.getComputedStyle(document.querySelector('.jobFilters')).display=="none"){
            document.querySelector('.jobFilters').style.display="flex"
        }else if(window.getComputedStyle(document.querySelector('.jobFilters')).display=="flex"){
            document.querySelector('.jobFilters').style.display="none"
        }
    }

    //show filters when screen size gets bigger than 767px
    function assureFiltersOpen() {
        document.querySelector('.jobFilters')
        if (window.innerWidth>767){
            document.querySelector('.jobFilters').style.display="flex"
        }else if(window.innerWidth<767){
            document.querySelector('.jobFilters').style.display="none"
        }
    }

    //for date posted and pay filters, only allow to check one, uncheck all others when one is checked
    function checkboxesOff (e) {
        for (let i of e.target.parentNode.parentNode.querySelectorAll("li")){
            if(i.childNodes[0].value!=e.target.value){
                i.childNodes[0].checked=false;
            }
        }
    }
    
    //add window event listener to toggle "Filters" button on and off
    useEffect(()=>{
        window.addEventListener("resize",assureFiltersOpen)
        return(()=>window.removeEventListener("resize",assureFiltersOpen))
    },[])

    
    return (
        <>
        <button className="filters-open-btn" onClick={openFilters}>Filters</button>
        <div className="jobFilters">
            <div className="job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>props.openFilterForm(e.currentTarget)}>Date Posted<span>&#9660;</span></button>
                <div className="job-filter-item-form">
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="date_posted" value="any" onChange={(e)=>checkboxesOff(e)}/><span>Any</span></li>
                        <li><input type="checkbox" name="date_posted" value="day" onChange={(e)=>checkboxesOff(e)}/><span>Past 24 Hours</span></li>
                        <li><input type="checkbox" name="date_posted" value="week" onChange={(e)=>checkboxesOff(e)}/><span>Past Week</span></li>
                        <li><input type="checkbox" name="date_posted" value="month" onChange={(e)=>checkboxesOff(e)}/><span>Past Month</span></li>
                        <li><input type="checkbox" name="date_posted" value="year" onChange={(e)=>checkboxesOff(e)}/><span>Past Year</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update" onClick={(e)=>props.submitForm(e)}>Update Results</button>
                    </div>
                </div>
            </div>
            <div className="job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>props.openFilterForm(e.currentTarget)}>Company Type<span>&#9660;</span></button>
                <div className="job-filter-item-form" >
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="company_type" value="non_profit"/><span>Non-Profit</span></li>
                        <li><input type="checkbox" name="company_type" value="public_company"/><span>Public</span></li>
                        <li><input type="checkbox" name="company_type" value="self_employed"/><span>Self-Employed</span></li>
                        <li><input type="checkbox" name="company_type" value="government_agency"/><span>Government Agency</span></li>
                        <li><input type="checkbox" name="company_type" value="self_owned"/><span>Self-Owned</span></li>
                        <li><input type="checkbox" name="company_type" value="privately_held"/><span>Privately Held</span></li>
                        <li><input type="checkbox" name="company_type" value="partnership"/><span>Partnership</span></li>
                        <li><input type="checkbox" name="company_type" value="club"/><span>Club</span></li>
                        <li><input type="checkbox" name="company_type" value="educational"/><span>Educational</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update" onClick={(e)=>props.submitForm(e)}>Update Results</button>
                    </div>
                </div>
            </div>
            <div className="job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>props.openFilterForm(e.currentTarget)}>Pay<span>&#9660;</span></button>
                <div className="job-filter-item-form" >
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="pay" value="any" onChange={(e)=>checkboxesOff(e)}/><span>Any</span></li>
                        <li><input type="checkbox" name="pay" value="40000" onChange={(e)=>checkboxesOff(e)}/><span>$40,000+</span></li>
                        <li><input type="checkbox" name="pay" value="60000" onChange={(e)=>checkboxesOff(e)}/><span>$60,000+</span></li>
                        <li><input type="checkbox" name="pay" value="80000" onChange={(e)=>checkboxesOff(e)}/><span>$80,000+</span></li>
                        <li><input type="checkbox" name="pay" value="100000" onChange={(e)=>checkboxesOff(e)}/><span>$100,000+</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.target)}>Cancel</button>
                        <button className="job-filter-item-form-options-update" onClick={(e)=>props.submitForm(e)}>Update Results</button>
                    </div>
                </div>
            </div>
            <div className="job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>props.openFilterForm(e.currentTarget)}>Job Type<span>&#9660;</span></button>
                <div className="job-filter-item-form">
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="job_type" value="full_time"/><span>Full-Time</span></li>
                        <li><input type="checkbox" name="job_type" value="part_time"/><span>Part-Time</span></li>
                        <li><input type="checkbox" name="job_type" value="contract"/><span>Contract</span></li>
                        <li><input type="checkbox" name="job_type" value="internship"/><span>Internship</span></li>
                        <li><input type="checkbox" name="job_type" value="temporary"/><span>Temporary</span></li>
                        <li><input type="checkbox" name="job_type" value="seasonal"/><span>Seasonal</span></li>
                        <li><input type="checkbox" name="job_type" value="freelance"/><span>Freelance</span></li>
                        <li><input type="checkbox" name="job_type" value="volunteer"/><span>Volunteer</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update" onClick={(e)=>props.submitForm(e)}>Update Results</button>
                    </div>
                </div>
            </div>
            <div className="job-filter-item remote-item">
                <label className="remote-label">Remote</label>
                <input className="remote-check" type="checkbox" name="remote" onChange={(e)=>props.submitForm(e)}/>
                  
            </div>
        </div>
        </>
    )
}