import data from './JobsList.json';
import '../../styles/Careers/Saved.css';

const Saved = () => {
    let savedJobsList=data.map ((job)=>
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
        <div className="savedMain">
            <h3 className="savedMain-header">Saved Jobs</h3>
            {savedJobsList}
        </div>
    )
}

export default Saved;