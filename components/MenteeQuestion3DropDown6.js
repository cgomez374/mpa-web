import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";

import './MentorshipCSS/MentorshipPersonalDetailsDropDown.css'

function MenteeQuestion3DropDown6(props) {

    const options = [
        { label: "American Indian", value: "American Indian" },
        { label: "Asian", value: "Asian" },
        { label: "Black or African American", value: "Black or African American" },
        { label: "Hispanic or Latino", value: "Hispanic or Latino" },
        { label: "Native Hawaiian", value: "Native Hawaiian" },
        { label: "White", value: "White" },
    ];



    return (
        <MultiSelect
            className="tw-w-full"
            options={options}
            value={props.values.lookingForEthnicity}
            onChange={props.handleDropDown("lookingForEthnicity")}
            labelledBy="Select"
            overrideStrings={{
                selectSomeItems: " "
            }}
        />
    );
}

export default MenteeQuestion3DropDown6;
