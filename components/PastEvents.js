import React from 'react';
import Link from 'next/link';
import EventCard from "../components/EventCard";


const PastEvents = () => {
    return (
        <section className="course-one course-page">
            <div className="container">
            <div className="block-title">
                        <h2 className="block-title__title">Past Events</h2>
                    </div>
                <div className="row">
                <EventCard imgSrc="/assets/images/csvscis.png" catName="Lecture" eventName="CS vs CIS: JMU Grad Panel" time="Monday, September 28 @ 6:30PM EST" eventLink="https://youtu.be/g0xTzN_1Dzc" actionLink="https://youtu.be/g0xTzN_1Dzc" callToAction="Watch Webinar"/>          
                <EventCard imgSrc="/assets/images/ElectionHackathonAnimation.gif" catName="Hackathon" eventName="#ElectionHackathon" time="October 16 - November 2" eventLink="https://election.devpost.com/" actionLink="https://election.devpost.com/" callToAction="See Results"/>          
                <EventCard imgSrc="/assets/images/fastenterprise.png" catName="Workshop" eventName="FAST Enterprises: Technical interview Workshop" time="Tuesday, September 15 2020 at 7:00 PM EST" eventLink="https://www.fastenterprises.com/careers" actionLink="https://www.fastenterprises.com/careers" callToAction="Join Fast"/>          
                <EventCard imgSrc="/assets/images/awscoffee.gif" catName="Workshop" eventName="Amazon Web Services (AWS) Virtual Coffee Chat" time="Monday, September 14 2020 at 6:30 PM EST" eventLink="https://aws.amazon.com/careers" actionLink="https://aws.amazon.com/careers" callToAction="Join AWS"/>          

                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://www.minorityprogrammers.org/img/Life%20of%20a.gif" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Day in the Life of A KPMG Developer</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Wednesday, September 9 2020 at 6:00 PM EST</a>
                                </div>
                                <a href="https://youtu.be/fMubRjk25fo" target="_blank" className="course-one__link">Watch</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/45001971-abc2-4d6e-b938-08d850d170a5/1500.gif" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>JMU CISE Student Diversity Council & Mentorship Program</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Recurring</a>
                                </div>
                                <a href="https://www.minorityprogrammers.org/CISEDiversity.html" target="_blank" className="course-one__link">Join Today</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/3c5fbf7a-e4e5-4974-d076-08d850ce0b0e/1500.gif" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Conference</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>JMU Student Org Night</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>August 31, 2020 6:00PM - 9:00PM EST</a>
                                </div>
                                <a href="https://beinvolved.jmu.edu/organization/MinorityProgrammers" target="_blank" className="course-one__link">Learn More</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://www.minorityprogrammers.org/img/MinorityE%20Conference.gif" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Conference</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Minority Entrepreneurs Conference</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Sunday, August 30, 2020</a>
                                </div>
                                <a href="https://minorityea.org/" target="_blank" className="course-one__link">Learn</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/e0ac9bc1-bd39-4d2c-d07a-08d850ce0b0e/original.gif" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Conference</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>JMU Computer Science Club Mixer</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Wednesday, September 2 2020 at 8:00 PM EST</a>
                                </div>
                                <a href="https://wiki.cs.jmu.edu/student/clubs/start?" target="_blank" className="course-one__link">JMU Clubs</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/bf6ce39f-4fc8-4ba6-d654-08d818e6d8a4/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Conference</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Black Lives Matter Hackathon</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>July 13 - August 2 2020</a>
                                </div>
                                <a href="https://youtu.be/ekCO5lE46WU" target="_blank" className="course-one__link">Results</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/1e77d47f-046c-4e77-97c3-08d83556c62c/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Webinar</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>SAP Internship Programs</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Aug 18, 2020</a>
                                </div>
                                <a href="https://youtu.be/nD43NFAo8mU" target="_blank" className="course-one__link">Watch</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/4ad9a482-7833-46f0-df79-08d80d754ed1/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Webinar</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Blockchain Cryptocurrency 101 w/ Shadman Hossain</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Tuesday, June 30 2020 at 7:00 PM EDT</a>
                                </div>
                                <a href="https://youtu.be/Y6oQA6Odu-g" target="_blank" className="course-one__link">Watch</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/0f20bd5b-2e93-49b6-77c7-08d808272306/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Webinar</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Last Mile: Learning Code in Prison</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Wednesday, June 17 2020 at 1:00 PM EST</a>
                                </div>
                                <a href="https://thelastmile.org/" target="_blank" className="course-one__link">Learn</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/08b518bd-7c4d-4c90-97d4-08d80308f4c9/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Webinar</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>JMU Tech Startups Webinar + Q&A</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Wednesday, April 29 2020 at 6:00 PM EST</a>
                                </div>
                                <a href="https://youtu.be/RI3WxJGz44c" target="_blank" className="course-one__link">Watch</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/5b4d037a-3850-4446-889a-08d80308f4c0/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Hackathon</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>COVID-19 Hackathon</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>April 5 - April 24 2020</a>
                                </div>
                                <a href="https://youtu.be/A8TPYXAGReI" target="_blank" className="course-one__link">Results</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/a08bc917-60b2-4c43-8899-08d80308f4c0/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Webinar</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>MinorityProgrammers/ CyberDefenseClub: Implementing Software Security Principles</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>April 1, 2020</a>
                                </div>
                                <a href="https://youtu.be/QJBh9qtoN7E" target="_blank" className="course-one__link">Watch</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/c33ddda2-7c98-4aa6-b769-08d850d170a5/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Machine Learning Basics</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Wednesday, February 26 2020 at 6:00 PM EST (ISAT 243)</a>
                                </div>
                                <a href="https://docs.google.com/presentation/d/1mqVf3nUhhpsL5YXGH8JGuOUBoqYsNsQutyLZ_r-uw-Q/edit#slide=id.g700f82a971_1_160" target="_blank" className="course-one__link">Presentation</a>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/ae324415-204e-4520-8898-08d80308f4c0/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Learn Agile SCRUM + Study Hall</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>Wednesday, February 19 2020 at 6:00 PM EST</a>
                                </div>
                                <a href="https://drive.google.com/file/d/16kcQlbpw6Bd7oN6VS7fTraYq-ROIpNDF/view" target="_blank" className="course-one__link">Presentation</a>
                            </div>
                        </div>
                    </div>


                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/f8572440-baa0-40dd-97d3-08d80308f4c9/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>Bootstrap Basics</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>February 12, 2020 6:00PM EST (ISAT 243)</a>
                                </div>
                                <a href="https://drive.google.com/file/d/1SjQwNqbtp1ud7kzvi_WG1V_EWissFiSN/view" target="_blank" className="course-one__link">Presentation</a>
                            </div>
                        </div>
                    </div>

                    
                    <div className="col-lg-4">
                        <div className="course-one__single">
                            <div className="course-one__image">
                                <img src="https://se-infra-cdn-images.azureedge.net/documents/11/ae324415-204e-4520-8898-08d80308f4c0/1500.png" width="370px" height="243px" alt="" />
                                    <i className="far fa-heart"></i>
                            </div>
                            <div className="course-one__content">
                                <a href="#" className="course-one__category">Workshop</a>
                                <h2 className="course-one__title"><Link href="/course-details"><a>First Interest Meeting/Github Crash Course</a></Link>
                                </h2>
                                <div className="course-one__meta">
                                    <a href="/course-details"><i className="far fa-clock"></i>First Interest Meeting/Github Crash Course</a>
                                </div>
                                <a href="https://drive.google.com/file/d/1tVt0n_t320Mb2WInwlf2xJGy9hCEApFN/view" target="_blank" className="course-one__link">Presentation</a>
                            </div>
                        </div>
                    </div>


</div>


            </div>
        </section>
    );
};

export default PastEvents;
