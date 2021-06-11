import data from './JobsList.json';


const Applied = () => {
    let appliedJobsList=data.map ((job)=>
        <div className="saved-job-stub" key={job.id} onClick={(e)=>changeJobAndColor(e,job)}>
            <div className="saved-job-stub-header">
                <div className="saved-job-stub-title">{job.job_title}</div>
                <div className="saved-job-stub-company">{job.company_name}</div>
                <div className="saved-job-stub-location">{job.location.city+", "+job.location.state}</div>
            </div>
            <div className="saved-job-stub-description">{job.job_description}</div>
            <div className="saved-job-stub-footer">
                <div className="saved-job-stub-postDate">Posted: {job.created_at}</div>
                <a className="saved-job-stub-saveLink" href="#">Delete</a>
            </div>
        </div> 
    )

    return (

        <div className="appliedMain">
            <h3 className="appliedMain-header">Applied Jobs</h3>
            {appliedJobsList}
        </div>
        
    )
}

export default Applied;