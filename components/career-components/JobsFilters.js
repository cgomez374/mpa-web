import { useEffect, useState } from 'react';
import '../../styles/Careers/JobsFilters.css';

export const JobsFilters = () => {

    function openFilterForm(btn){
        //close all other forms 
        for(let i of document.getElementsByClassName("job-filter-item-form")) {
            i.style.display="none"
        }

        for (let i of document.getElementsByClassName("job-filter-item-form-list")){
            for(let j of i.getElementsByTagName("input")) {
                j.checked=false;
            } 
        }
        btn.nextSibling.style.display="block";
    }

    function closeForm(btn) {
        btn.parentNode.parentNode.style.display="none";
    }

    function openFilters () {
        if(window.getComputedStyle(document.querySelector('.jobFilters')).display=="none"){
            document.querySelector('.jobFilters').style.display="flex"
        }else if(window.getComputedStyle(document.querySelector('.jobFilters')).display=="flex"){
            document.querySelector('.jobFilters').style.display="none"
        }
    }

    //show filters when screen size gets bigger than 767px
    function assureFiltersOpen() {
        if (window.innerWidth>767){
            document.querySelector('.jobFilters').style.display="flex"
        }else {
            document.querySelector('.jobFilters').style.display="none"
        }
    }

    useEffect(()=>{
        window.addEventListener("resize",assureFiltersOpen)
    },[])

    return (
        <>
        <button className="filters-open-btn" onClick={openFilters}>Filters</button>
        <div className="jobFilters">
            <div className="jobFilters-jobTitle job-filter-item ">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>openFilterForm(e.currentTarget)}>Job Title<span>&#9660;</span></button>
                <div className="job-filter-item-form">
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="jobTitle" value="Front End Developer"/><span>Front End Developer</span></li>
                        <li><input type="checkbox" name="jobTitle" value="UI/UX Designer"/><span>UI/UX Designer</span></li>
                        <li><input type="checkbox" name="jobTitle" value="month"/><span>Back End Developer</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update">Update Results</button>
                    </div>
                </div>
            </div>
            <div className="jobFilters-datePosted job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>openFilterForm(e.currentTarget)}>Date Posted<span>&#9660;</span></button>
                <div className="job-filter-item-form">
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="datePosted" value="24 hours"/><span>Past 24 Hours</span></li>
                        <li><input type="checkbox" name="datePosted" value="week"/><span>Past Week</span></li>
                        <li><input type="checkbox" name="datePosted" value="month"/><span>Past Month</span></li>
                        <li><input type="checkbox" name="datePosted" value="year"/><span>Past Year</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update">Update Results</button>
                    </div>
                </div>
            </div>


            <div className="jobFilters-company job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>openFilterForm(e.currentTarget)}>Company<span>&#9660;</span></button>
                <div className="job-filter-item-form" >
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="datePosted" value="24 hours"/><span>Minority Programmers</span></li>
                        <li><input type="checkbox" name="datePosted" value="week"/><span>Facebook</span></li>
                        <li><input type="checkbox" name="datePosted" value="month"/><span>Amazon</span></li>
                        <li><input type="checkbox" name="datePosted" value="year"/><span>Tesla</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update">Update Results</button>
                    </div>
                </div>
            </div>
            <div className="jobFilters-salary job-filter-item">
                <button className="job-filter-item-title thm-base-bg-2" onClick={(e)=>openFilterForm(e.currentTarget)}>Salary<span>&#9660;</span></button>
                <div className="job-filter-item-form" >
                    <ul className="job-filter-item-form-list">
                        <li><input type="checkbox" name="jobSalary" value="24 hours"/><span>$40,000+</span></li>
                        <li><input type="checkbox" name="jobSalary" value="week"/><span>$60,000+</span></li>
                        <li><input type="checkbox" name="jobSalary" value="month"/><span>$80,000+</span></li>
                        <li><input type="checkbox" name="jobSalary" value="year"/><span>$100,000+</span></li>
                    </ul>
                    <div className="job-filter-item-form-options">
                        <button className="job-filter-item-form-options-cancel" onClick={(e)=>closeForm(e.currentTarget)}>Cancel</button>
                        <button className="job-filter-item-form-options-update">Update Results</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}