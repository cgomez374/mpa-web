import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion3DropDown3(props) {

    const options = [
        { label: "Less than 5 hours a week", value: "Less than 5 hours a week" },
        { label: "5-10 hours a week", value: "5-10 hours a week" },
        { label: "10-20 hours a week", value: "10-20 hours a week" },
        { label: "20-40 hours a week", value: "20-40 hours a week" },
        { label: "40+ hours a week", value: "40+ hours a week" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.lookingForAvailability}
            onChange={props.handleDropDown("lookingForAvailability")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
}

export default MenteeQuestion3DropDown3;
