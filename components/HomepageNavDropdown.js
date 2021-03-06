import React, { useState } from 'react'
import Link from "next/link";
import { eventItems } from '../helpers/dropDownItems'

const HomepageNavDropdown = ({ onCloseMobileMenu }) => {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click);

    return (
        <>
            <ul onClick={onCloseMobileMenu}
                className={click ? 'dropdown-menu clicked' : 'dropdown-menu'}
            >
                {eventItems.map((item, index) => {
                    return (
                        <li key={index}>
                            <div
                                className={item.cName}
                                href={item.path}
                                onClick={() => setClick(false)}
                            >
                                <a>{item.title}</a>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </>
    )
}

export default HomepageNavDropdown