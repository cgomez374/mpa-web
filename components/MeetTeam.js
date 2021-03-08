import React from 'react';
import Link from 'next/link';
// import Person from "../components/Person";
import TeamCard from "../components/TeamCard";

const MeetTeam = () => {
    return (
        // <Person></Person>
        <section id="team" className="team-one team-page">
            <div className="container">
            <div className="block-title text-center">
                    <h2 className="block-title__title">Meet the <br />
                        Team</h2>
                </div>
                <div className="row">
                    <TeamCard imgSrc="/assets/images/shad (3).svg" name="Shadman Hossain" title="Secretary"/>
                    <TeamCard imgSrc="/assets/images/tahmid (1).svg"  name="Tahmid Biswas" title="Treasurer"/>
                    <TeamCard imgSrc="/assets/images/jillian.jpg" name="Jillian Lynch" title="Hackathon Sponsorship Coordinator"/>
                    <TeamCard imgSrc="/assets/images/roshaan (1).svg" name="Roshaan Khan" title="Product/Strategy"/>
                    <TeamCard imgSrc="/assets/images/gideon.jpg" name="Gideon Nnalue" title="Software Engineer"/>
                    <TeamCard imgSrc="/assets/images/rosie.jpg" name="Rosada Francis-Cedeño" title="Social Media Manager"/>
                    <TeamCard imgSrc="/assets/images/jack.jpg" name="Jack Vandemeulebroecke" title="Software Engineer & Instructor"/>
                    <TeamCard imgSrc="/assets/images/SEEF.svg" name="Seef Manj" title="Technical Recruiter"/>
                    <TeamCard imgSrc="/assets/images/marc.jpg" name="Marc Duny" title="Outreach Coordinator"/>
                    <TeamCard imgSrc="/assets/images/zed (2).svg" name="Zvinodashe Mupambirei" title="Cryptocurrency/ Blockchain R&D Intern"/>
                    <TeamCard imgSrc="/assets/images/wesley.svg" name="Wesley Luong" title="Web Development Intern"/>
                    <TeamCard imgSrc="/assets/images/bridget.svg" name="Bridget Shannon" title="Web Development Intern"/>
                    <TeamCard imgSrc="/assets/images/shengqi.svg" name="Shengqi Zhou" title="Business Development Intern"/>
                    <TeamCard imgSrc="/assets/images/daniel.svg" name="Daniel Kleiman" title="Grant Researcher Intern"/>
                    <TeamCard imgSrc="/assets/images/fahad.svg" name="Fahad Zakir" title="Software Engineer Intern"/>
                    <TeamCard imgSrc="/assets/images/kush.jpg" name="Kush Gupta" title="JMU Chapter President"/>
                    <TeamCard imgSrc="/assets/images/abel.jpg" name="Abele Aynekulu" title="JMU Chapter Vice-President"/>
                    <TeamCard imgSrc="/assets/images/james.jpg" name="Professor Jim Jewett" title="JMU COB Faculty Advisor"/>
                    <TeamCard imgSrc="/assets/images/ramon.jpg" name="Dr. Ramon Mata-Toledo" title="JMU CS Faculty Advisor"/>
                    <TeamCard imgSrc="/assets/images/michelle.jpg" name="Michelle Wong" title="JMU Chapter Treasurer"/>
                    <TeamCard imgSrc="/assets/images/grace.jpg" name="Grace Bailey" title="JMU Chapter Professional Development Coordinator"/>
                    <TeamCard imgSrc="/assets/images/myles.jpg" name="Myles Patterson" title="JMU Chapter Events Coordinator"/>
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;
