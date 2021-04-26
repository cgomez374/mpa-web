import CareersMainComponent from "../../components/career-components/CareersMainComponent";
import '../../styles/Careers/JobsMain.css';
import '../../styles/Careers/CompaniesMain.css';
import CompaniesList from '../../components/career-components/CompaniesList.json';


const CompaniesMain = () => {

    let companyStubs=CompaniesList.map ((company)=>
        <a href={`/careers/companies/company?id=${company.id}`}>
            <div className="company-stub" key={company.id}>
                <div className="company-stub-box1">
                    <div className="company-stub-box1-logo">
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
                    <div className="company-stub-box1-location">{company.headquarters}</div>
                    <div className="company-stub-box1-createdDate">{company.startedAt}</div>
                </div>
                <div className="company-stub-box2">
                    <div className="company-stub-box2-name">{company.name}</div>
                    <div className="company-stub-box2-size">{`(${company.size_company} Employees)`}</div>
                    <div className="company-stub-box2-description">
                        {company.description}
                    </div>
                </div>
                <div className="company-stub-box3">
                    <div className="company-stub-box3-diversity">
                        <span>Diversity Score</span>
                        <div className="company-stub-box3-diversity-score">{`${company.diversity_score}/10`}</div>
                    </div>
                </div>
            </div> 
        </a>

    
        
    )
    
    return (
        <CareersMainComponent>
            <div className="companiesMain">
                <div className="companiesMain-search">
                    <h2 className="companiesMain-search-heading">Search For Companies</h2>
                    <div className="companiesMain-search-inputs">
                        <input type="search" placeholder="Search by Name"/>
                        <input type="search" placeholder="Diversity Score"/>
                        <input type="search" placeholder="City, State, or Zip Code"/>
                        <button type="submit">Search</button>
                    </div>
                </div>
                <div className="companies-main-container">
                    <div className="companiesMain-options">
                        <div>{`${CompaniesList.length} Results`}</div>
                        <div className="companiesMain-options-sort">
                            <span>Sort by:</span>
                            <select>
                                <option>Newest</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        {companyStubs}
                    </div>
                </div>
            </div>
        </CareersMainComponent>
    )
}

export default CompaniesMain;