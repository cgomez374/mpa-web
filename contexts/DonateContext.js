import React, { createContext, useState } from 'react'

export const DonateContext = createContext();

const DonateContextProvider = (props) => {

    const [form, setForm] = useState({
        amount: "",
    })

    const addAmount = (amount) => {
        setForm({
            amount,
        })
    }

    return (
        <DonateContext.Provider value={{ form, addAmount }}>
            {props.children}
        </DonateContext.Provider>
    )
}
export default DonateContextProvider

