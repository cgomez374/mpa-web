import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion3DropDown4(props) {

    const options = [
        { label: "Always", value: "Always" },
        { label: "Usually", value: "Usually" },
        { label: "Often", value: "Often" },
        { label: "Sometimes", value: "Sometimes" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.lookingForGender}
            onChange={props.handleDropDown("lookingForGender")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
}

export default MenteeQuestion3DropDown4;
