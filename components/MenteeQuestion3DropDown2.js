import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion3DropDown2(props) {

    const options = [
        { label: "Beginner", value: "Beginner" },
        { label: "Average", value: "Average" },
        { label: "Skilled", value: "Skilled" },
        { label: "Specialist", value: "Specialist" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.lookingForExp}
            onChange={props.handleDropDown("lookingForExp")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
}

export default MenteeQuestion3DropDown2;
