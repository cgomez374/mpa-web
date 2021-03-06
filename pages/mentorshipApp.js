import React, { Component } from 'react'

import Layout from "../components/Layout";
import Topbar from "../components/Topbar";
import NavOne from "../components/NavOne";
import Footer from "../components/Footer";
import HomepageNav from "../components/HomepageNav";
import MentorshipAppSwipeCards from "../components/MentorshipAppSwipeCards";
import MentorshipAppSideBar from "../components/MentorshipAppSideBar";


export class mentorshipApp extends Component {
    state = {
        step: 1,
        likedList: [],
        openedChatCharacter: {},

        swipeCards: [
            {
                id: 1,
                url: 'https://icatcare.org/app/uploads/2018/07/Thinking-of-getting-a-cat.png',
                name: 'Oleg Nosyrev',
                occupation: "Frontend Developer",
                company: "MPA",
                country: "USA",
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat eius provident nesciunt distinctio quasi unde iure quis repellat porro, accusamus assumenda perferendis beatae tenetur aliquid animi sint est veritatis voluptatem quo? Itaque voluptas quam officiis quaerat cupiditate ex dolorum?"
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
                description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat eius provident nesciunt distinctio quasi unde iure quis repellat porro, accusamus assumenda perferendis beatae tenetur aliquid animi sint est veritatis voluptatem quo? Itaque voluptas quam officiis quaerat cupiditate ex dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium quaerat eius provident nesciunt distinctio quasi unde iure quis repellat porro, accusamus assumenda perferendis beatae tenetur aliquid animi sint est veritatis voluptatem quo? Itaque voluptas quam officiis quaerat cupiditate ex dolorum?Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, est? Iusto voluptatem ab quae esse itaque quibusdam ipsam fuga!"
            },

        ],
        matchedPeople: [
            {
                id: 5,
                url: 'https://i.pinimg.com/originals/33/32/6d/33326dcddbf15c56d631e374b62338dc.jpg',
                name: 'Shot Code',
                company: "MPA",
                occupation: "Frontend Developer",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!",
                matchedTimestamp: "2:10 PM 4/20/2021",
                messages: [
                    {
                        id: 1,
                        read: true,

                        message: "Good Morning!",
                        messageTimeStamp: "9:32 AM EST 4/20/2021"
                    },
                    {
                        id: 2,
                        read: false,

                        message: "I will be your Mentor!????",
                        messageTimeStamp: "9:34 AM EST 4/20/2021"
                    },
                    {
                        id: 3,
                        read: true,

                        message: "Let's start coding???????????",
                        messageTimeStamp: "9:59 AM EST 4/20/2021"
                    },
                ],
                toDo: [

                ]
            },
            {
                id: 7,
                url: 'https://d25tv1xepz39hi.cloudfront.net/2016-07-16/files/cat-sample_1313.jpg',
                name: 'Oleg N',
                company: "MPA",
                occupation: "Data Science",
                country: "USA",
                description: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero eum corrupti quasi, quas libero eos!",
                matchedTimestamp: "5:10 PM 4/20/2021",
                messages: [
                    {
                        id: 1,
                        fromId: 7,
                        new: false,
                        message: "Good Morning!",
                        messageTimeStamp: "9:32 AM EST 4/20/2021"
                    },
                    {
                        id: 2,
                        fromId: 7,
                        new: false,
                        message: "Are you ready to code?",
                        messageTimeStamp: "9:34 AM EST 4/20/2021"
                    },
                ],
                toDo: [
                    {
                        id: 2,
                        fromId: 7,
                        message: "Code the mentor page",
                        messageTimeStamp: "9:32 AM EST 4/20/2021"
                    },

                ]
            },
        ]
    }

    // Navigaion between links

    // Proceed to Messages step
    messagesStep = () => {
        const { step } = this.state;
        this.setState({
            step: 1
        });
    }
    // Proceed to ToDo step
    todoStep = () => {
        const { step } = this.state;
        this.setState({
            step: 2
        });
    }
    // Proceed to chatRedirect step
    chatRedirectStep = (character) => {
        const { step } = this.state;
        console.log(character)
        this.setState({
            openedChatCharacter: character,
            step: 3,
        });
    }

    // Handle Swipe Right change
    handleSwipeRight = (character) => {
        if (!this.state.likedList.includes(character)) {
            this.setState(prevState => ({
                likedList: [...prevState.likedList, character]
            }))
        }
    }

    // Update SwipeCards
    updateSwipeCards = (character) => {
        const copyswipeCards = this.state.swipeCards.filter(person => person !== character)
        this.setState({
            swipeCards: copyswipeCards,
        })
    }

    // Undo the Last Swipe
    undoLastSwipe = (character) => {
        let copyswipeCards = this.state.swipeCards
        let copylikedList = this.state.likedList
        if (copylikedList.includes(character)) {
            copylikedList.pop()
        }
        copyswipeCards.push(character)

        this.setState({
            swipeCards: copyswipeCards,
            likedList: copylikedList,
        })
    }

    render() {
        const { likedList, swipeCards, matchedPeople, step, openedChatCharacter } = this.state

        const values = { likedList, swipeCards, matchedPeople, step, openedChatCharacter }
        return (
            <div>
                <Layout pageTitle="MPA - Mentorship App">
                <HomepageNav />
                    <section className="home-section">
                        <div className="tw-flex lg:tw-hidden tw-font-redhat tw-bg-white tw-bg-opacity-0 tw-h-600px md:tw-h-auto tw-w-1300px tw-rounded-3xl tw-shadow-mentor tw-relative tw-text-black">
                            <MentorshipAppSwipeCards
                                handleSwipeRight={this.handleSwipeRight}
                                updateSwipeCards={this.updateSwipeCards}
                                undoLastSwipe={this.undoLastSwipe}
                                values={values.swipeCards} />

                            <MentorshipAppSideBar
                                values={values.matchedPeople}
                                step={values.step}
                                openedChatCharacter={values.openedChatCharacter}

                                messagesStep={this.messagesStep}
                                todoStep={this.todoStep}
                                chatRedirectStep={this.chatRedirectStep}
                            />
                        </div>
                        <div className="tw-hidden lg:tw-block">
                            <p>The Swiping Application is only available on screens wider than 911px</p>
                        </div>
                    </section>
                    <Footer />
                </Layout>
            </div>
        )
    }
}

export default mentorshipApp