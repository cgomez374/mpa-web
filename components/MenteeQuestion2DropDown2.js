import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion2DropDown2(props) {
    const options = [
        { label: "Visual", value: "Visual" },
        { label: "Auditory", value: "Auditory" },
        { label: "Read/Write", value: "Read/Write" },
        { label: "Kinesthetic", value: "Kinesthetic" },
    ];



    return (
        <MultiSelect
            className="tw-w-full tw-cursor-pointer"
            options={options}
            value={props.values.learningStyle}
            onChange={props.handleDropDown("learningStyle")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
};

export default MenteeQuestion2DropDown2;
