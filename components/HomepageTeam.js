import React, { useState } from 'react'
import Swiper from 'react-id-swiper';
import 'swiper/css/swiper.css';
import HomepageTeamCard from './HomepageTeamCard';
import HomepageMemberModal from './HomepageMemberModal';

const HomepageTeam = () => {

    const Departments = [
        {
            id: 1,
            teamName: "Development",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consectetur quis integer ullamcorper amet malesuada."
        },
        {
            id: 2,
            teamName: "Crypto",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consectetur quis integer ullamcorper amet malesuada.",
        },
        {
            id: 3,
            teamName: "Business",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consectetur quis integer ullamcorper amet malesuada.",
        },
        {
            id: 4,
            teamName: "Operations",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices consectetur quis integer ullamcorper amet malesuada.",
        },

    ]

    const Teams = [
        {
            id: 1,
            name: "Taylor Sullivan",
            position: "Data Science Intern",
            department: "Development",
            photo: "https://minorityprogrammers.com/assets/images/taylor.svg",
        },
        {
            id: 2,
            name: "Seemaab Mujtaba",
            position: "Software Engineer Intern",
            department: "Development",
            photo: "https://minorityprogrammers.com/assets/images/SEEF.svg",
        },
        {
            id: 3,
            name: "Sarah Farang",
            position: "Software Engineer Intern",
            department: "Development",
            photo: "https://minorityprogrammers.com/assets/images/sarah.svg",
        },
        {
            id: 4,
            name: "Yixuan Feng",
            position: "Web Development Intern",
            department: "Development",
            photo: "https://minorityprogrammers.com/assets/images/yixuan.svg",
        },
        {
            id: 5,
            name: "Fahad Zakir",
            position: "Software Engineer Intern",
            department: "Development",
            photo: "https://minorityprogrammers.com/assets/images/fahad.svg",
        },
        {
            id: 6,
            name: "Wesley Luong",
            position: "Web Development Intern",
            department: "Development",
            photo: "https://minorityprogrammers.com/assets/images/wesley.svg",
        },

        {
            id: 7,
            name: "Kaleb Kendall",
            position: "Cryptocurrency/ Blockchain R&D Intern",
            department: "Crypto",
            photo: "https://minorityprogrammers.com/assets/images/Kaleb.svg",
        },
        {
            id: 8,
            name: "Vishal Patil",
            position: "Cryptocurrency/ Blockchain R&D Intern",
            department: "Crypto",
            photo: "https://minorityprogrammers.com/assets/images/vishal.svg",
        },
        {
            id: 9,
            name: "Jose Tollinchi",
            position: "Cryptocurrency/ Blockchain R&D Intern",
            department: "Crypto",
            photo: "https://minorityprogrammers.com/assets/images/Jose.svg",
        },

        {
            id: 10,
            name: "Shengqi Zhou",
            position: "Business Development Intern",
            department: "Business",
            photo: "https://minorityprogrammers.com/assets/images/shengqi.svg",
        },
        {
            id: 11,
            name: "Yudi Fitriansyah",
            position: "Business Development Intern",
            department: "Business",
            photo: "https://minorityprogrammers.com/assets/images/Yudi.svg",
        },
        {
            id: 12,
            name: "Seef Manj",
            position: "Techical Recruiter",
            department: "Operations",
            photo: "https://minorityprogrammers.com/assets/images/SEEF.svg",
        },
        {
            id: 13,
            name: "Bryanna Turman",
            position: "Social Media Manager",
            department: "Operations",
            photo: "https://minorityprogrammers.com/assets/images/Bryanna.svg",
        },

    ]

    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 0,
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        // Responsive breakpoints
        breakpoints: {
            1440: {
                slidesPerView: 5
            },
            1025: {
                slidesPerView: 5
            },
            1024: {
                slidesPerView: 4
            },
            768: {
                slidesPerView: 3
            },
            640: {
                slidesPerView: 2

            },
            320: {
                slidesPerView: 1
            }
        }
    }

    const [team, setTeam] = useState('ALL');
    const [selectedMember, setSelectedMember] = useState("");
    const [showModal, setShowModal] = useState(false);


    const handleTeam = (t, index) => {
        setTeam(t.teamName);
    }

    const openModal = (name) => {
        setShowModal(prev => !prev)
        setSelectedMember(name)
        //console.log("name", name)
    }



    return (
        <>
            <section className="homepage__team">
                <div className="heading__number"><h3>05</h3></div>
                <div className="container">
                    <h2 className="heading__title mt-5 mb-5">&lsaquo;Team/&rsaquo;</h2>
                    <div className="container team__homepage-container">
                        <div className="row team__items">
                            {Departments && Departments.map((d) => (
                                <div className="team__item-top" key={d.id}>
                                    <div className="team__item-bg">
                                        <div className="team__item-icon">
                                            <img src="/assets/images/mpicon.svg" />
                                        </div>
                                    </div>
                                    <div className="team__item-text" key={d.id}>
                                        <h2><button className="btn btn-light" onClick={() => handleTeam(d, d.id)}>{d.teamName}</button></h2>
                                        <p>{d.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="row team__all-container">
                            <h2>{team}</h2>
                        </div>

                        <div className="row team__homepage-members">

                            <div className="container text-center">
                                {Teams && Teams.filter(data => data.department === team && team !== "ALL").map((t, i) => (
                                    <>
                                        <div className="team__member p-2" key={t.id} onClick={() => openModal(t)}>
                                            <HomepageTeamCard member={t} />
                                        </div>
                                        <HomepageMemberModal showModal={showModal} setShowModal={setShowModal} setSelectedMember={setSelectedMember} selectedMember={selectedMember} key={i} />
                                    </>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default HomepageTeam

// to get all members, check if button value === all