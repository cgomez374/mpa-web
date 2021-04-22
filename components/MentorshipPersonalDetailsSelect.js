import React, { Component } from 'react'

import './MentorshipCSS/MentorshipPersonalDetailsSelect.css'

import Select from 'react-dropdown-select';

function MentorshipPersonalDetailsSelect(props) {

    const options = [
        { label: "Middle School", value: "Middle School" },
        { label: "Associate’s", value: "Associate’s" },
        { label: "Bachelor’s", value: "Bachelor’s" },
        { label: "Master’s", value: "Master’s" },
        { label: "PHD", value: "PHD" },
    ];

    return (
        <Select
            options={options}
            onChange={props.handleSelect}
            name="levelOfEducation"
            values={[props.values.levelOfEducation[0]]}
            placeholder=""
        />
    )
}

export default MentorshipPersonalDetailsSelect
