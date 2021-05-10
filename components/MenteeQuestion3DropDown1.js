import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion3DropDown1(props) {

    const options = [
        { label: "Associate’s", value: "Associate’s" },
        { label: "Bachelor’s", value: "Bachelor’s" },
        { label: "Master’s", value: "Master’s" },
        { label: "PhD", value: "PhD" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.lookingForEdu}
            onChange={props.handleDropDown("lookingForEdu")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
}

export default MenteeQuestion3DropDown1;
