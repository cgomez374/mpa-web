import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion3DropDown5(props) {

    const options = [
        { label: "English", value: "English" },
        { label: "Spanish", value: "Spanish" },
        { label: "Portuguese", value: "Portuguese" },
        { label: "French", value: "French" },
        { label: "Chinese", value: "Chinese" },
        { label: "Russian", value: "Russian" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.lookingForLang}
            onChange={props.handleDropDown("lookingForLang")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
}

export default MenteeQuestion3DropDown5;
