import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion2DropDown3(props) {
    const options = [
        { label: "A", value: "A" },
        { label: "B", value: "B" },
        { label: "C", value: "C" },
        { label: "D", value: "D" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.personlityType}
            onChange={props.handleDropDown("personlityType")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
};

export default MenteeQuestion2DropDown3;
