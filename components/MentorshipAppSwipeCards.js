import React, { useState, useMemo } from 'react'
// import TinderCard from '../react-tinder-card/index'
import TinderCard from 'react-tinder-card'

import "./MentorshipCSS/MentorshipAppSwipeCards.css"

const alreadyRemoved = []

function MentorshipAppSwipeCards(props) {
    let charactersState = props.values // This fixes issues with updating characters state forcing it to use the current state and not the state that was active when the card was created.
    const [characters, setCharacters] = useState(props.values)

    const childRefs = useMemo(() => Array(props.values.length).fill(0).map(i => React.createRef()), [])

    const swiped = (nameToDelete) => {
        console.log('removing: ' + nameToDelete)
        alreadyRemoved.push(nameToDelete)
    }

    const outOfFrame = (name) => {
        console.log(name + ' left the screen!')
        charactersState = charactersState.filter(character => character.name !== name)
        setCharacters(charactersState)
    }

    const swipe = (dir) => {
        const cardsLeft = characters.filter(person => !alreadyRemoved.includes(person.name))
        if (cardsLeft.length) {
            const toBeRemoved = cardsLeft[cardsLeft.length - 1].name // Find the card object to be removed
            const index = props.values.map(person => person.name).indexOf(toBeRemoved) // Find the index of which to make the reference to
            alreadyRemoved.push(toBeRemoved) // Make sure the next card gets removed next time if this card do not have time to exit the screen
            childRefs[index].current.swipe(dir) // Swipe the card!
        }
    }

    return (
        <div className='tw-flex tw-font-redhat tw-bg-white tw-h-660px md:tw-h-auto tw-w-1300px tw-rounded-3xl tw-shadow-mentor tw-relative'>
            <div class="tw-w-1/2">
                {props.values.map((character, index) =>
                    <TinderCard
                        ref={childRefs[index]}
                        className='swipe tw-absolute tw-h-full'
                        key={character.name}
                        onSwipe={(dir) => swiped(dir, character.name)} onCardLeftScreen={() => outOfFrame(character.name)}>
                        <div className='card tw-h-inherit tw-rounded-l-3xl'>
                            <div className="image tw-w-640px ">
                                <img className="tw-w-full tw-rounded-tl-3xl" src={character.url} alt={character.name} />
                            </div>
                            <div className="details">
                                <div className="top">
                                    <h3>{character.name}</h3>
                                    <p>{character.occupation}</p>
                                    <p>{character.company}</p>
                                    <p>{character.country}</p>
                                </div>
                                <div className="bottom">
                                    <hr />
                                    <p>{character.description}</p>
                                </div>

                            </div>
                        </div>
                    </TinderCard>
                )}
                <div className='buttons tw-absolute tw-bottom-2.5 tw-z-20 tw-w-full tw-bg-red-600'>
                    <button onClick={() => swipe('left')}>Swipe left!</button>
                    <button onClick={() => swipe('left')}>Swipe left!</button>
                    <button onClick={() => swipe('right')}>Swipe right!</button>
                </div>
            </div>
        </div>
    )
}

export default MentorshipAppSwipeCards