import React, { Component } from 'react'

import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";

import MentorshipAppSwipeCards from "../components/MentorshipAppSwipeCards";


import "../components/MentorshipCSS/mentorship.css"


export class mentorshipApp extends Component {
    state = {
        likedList: [],

        swipeCards: [
            {
                id: 1,
                url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
                name: 'Oleg Nosyrev',
                occupation: "Frontend Developer",
                company: "MPA",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!"
            },
            {
                id: 2,
                url: 'https://www.rochesterfirst.com/wp-content/uploads/sites/66/2019/09/cat.jpg',
                name: 'Monica Hall',
                occupation: "Frontend Developer",
                company: "MPA",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!"
            },
            {
                id: 3,
                url: 'https://images.reference.com/amg-cms-reference-images/media/cats-look-like_c942b88f95e4db21.jpg?width=740&height=420&fit=crop&format=pjpg',
                name: 'Jared Dunn',
                occupation: "Frontend Developer",
                company: "MPA",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!"
            },
            {
                id: 4,
                url: 'https://s01.sgp1.cdn.digitaloceanspaces.com/article/51036-cwobnirfka-1580816618.jpeg',
                name: 'Dinesh Chugtai',
                occupation: "Frontend Developer",
                company: "MPA",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!"
            },

        ],
        matchedPeople: [
            {
                id: 5,
                url: 'https://images.unsplash.com/photo-1572360620839-a02312482daf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8&w=1000&q=80',
                name: 'Erlich Bachman',
                company: "MPA",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!",
                matchedTimestamp: "2:10 PM 4/20/2021",
                messages: [
                    {
                        id: 1,
                        message: "Good Morning!",
                        messageTimeStamp: "9:32 AM EST 4/20/2021"
                    },
                    {
                        id: 2,
                        message: "I will be your Mentor!😊",
                        messageTimeStamp: "9:34 AM EST 4/20/2021"
                    },
                    {
                        id: 3,
                        message: "Let's start coding👩‍💻",
                        messageTimeStamp: "9:59 AM EST 4/20/2021"
                    },
                ]
            }
        ]
    }
    render() {
        const { likedList, swipeCards, matchedPeople } = this.state

        const values = { likedList, swipeCards, matchedPeople }
        return (
            <div>
                <Layout pageTitle="MPA - Mentorship">
                    <Topbar />
                    <NavOne />
                    <section className="home-section">
                        <MentorshipAppSwipeCards
                            values={values.swipeCards} />
                    </section>
                    <Footer />
                </Layout>
            </div>
        )
    }
}

export default mentorshipApp