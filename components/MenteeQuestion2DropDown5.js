import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion2DropDown5(props) {
    const options = [
        { label: "Front-end Development", value: "Front-end Development" },
        { label: "Graphic Design", value: "Graphic Design" },
        { label: "UX/UI", value: "UX/UI" },
        { label: "Data Science", value: "Data Science" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.interest}
            onChange={props.handleDropDown("interest")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
};

export default MenteeQuestion2DropDown5;
