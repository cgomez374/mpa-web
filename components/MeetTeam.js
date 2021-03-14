import React from 'react';
import Link from 'next/link';
// import Person from "../components/Person";
import TeamCard from "../components/TeamCard";

const MeetTeam = () => {
       const Team = [
                     {imgSrc: "/assets/images/shad (3).svg", name: "Shadman Hossain", title: "Secretary"},
                     {imgSrc: "/assets/images/tahmid (1).svg", name: "Tahmid Biswas", title: "Treasurer"},
                     {imgSrc: "/assets/images/jillian.jpg", name: "Jillian Lynch", title: "Hackathon Sponsorship Coordinator"},
                     {imgSrc: "/assets/images/roshaan (1).svg", name: "Roshaan Khan", title: "Product/Strategy"},
                     {imgSrc: "/assets/images/gideon.jpg", name: "Gideon Nnalue", title: "Software Engineer"},
                     {imgSrc: "/assets/images/rosie.jpg", name: "Rosada Francis-Cedeño", title: "Social Media Manager"},
                     {imgSrc: "/assets/images/jack.jpg", name: "Jack Vandemeulebroecke", title: "Software Engineer & Instructor"},
                     {imgSrc: "/assets/images/SEEF.svg", name: "Seef Manj", title: "Technical Recruiter"},
                     {imgSrc: "/assets/images/marc.jpg", name: "Marc Duny", title: "Outreach Coordinator"},
                     {imgSrc: "/assets/images/zed (2).svg", name: "Zvinodashe Mupambirei", title: "Cryptocurrency/ Blockchain R&D Intern"},
                     {imgSrc: "/assets/images/wesley.svg", name: "Wesley Luong", title: "Web Development Intern"},
                     {imgSrc: "/assets/images/bridget.svg", name: "Bridget Shannon", title: "Web Development Intern"},
                     {imgSrc: "/assets/images/shengqi.svg", name: "Shengqi Zhou", title: "Business Development Intern"},
                     {imgSrc: "/assets/images/daniel.svg", name: "Daniel Kleiman", title: "Grant Researcher Intern"},
                     {imgSrc: "/assets/images/fahad.svg", name: "Fahad Zakir", title: "Software Engineer Intern"},
                     {imgSrc: "/assets/images/kush.jpg", name: "Kush Gupta", title: "JMU Chapter President"},
                     {imgSrc: "/assets/images/abel.jpg", name: "Abele Aynekulu", title: "JMU Chapter Vice-President"},
                     {imgSrc: "/assets/images/james.jpg", name: "Professor Jim Jewett", title: "JMU COB Faculty Advisor"},
                     {imgSrc: "/assets/images/ramon.jpg", name: "Dr. Ramon Mata-Toledo", title: "JMU CS Faculty Advisor"},
                     {imgSrc: "/assets/images/michelle.jpg", name: "Michelle Wong", title: "JMU Chapter Treasurer"},
                     {imgSrc: "/assets/images/grace.jpg", name: "Grace Bailey", title: "JMU Chapter Professional Development Coordinator"},
                     {imgSrc: "/assets/images/myles.jpg", name: "Myles Patterson", title: "JMU Chapter Events Coordinator"}];
    return (
        // <Person></Person>
        <section id="team" className="team-one team-page">
            <div className="container">
            <div className="block-title text-center">
                    <h2 className="block-title__title">Meet the <br />
                        Team</h2>
                </div>
                <div className="row">
                  {Team.map((team, index) => ( 
                <TeamCard  item={team} key={index}/>
                ))}
                </div>
            </div>
        </section>
    );
};

export default MeetTeam;
