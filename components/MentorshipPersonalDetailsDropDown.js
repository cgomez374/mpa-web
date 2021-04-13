import React, { useState } from "react";
import MultiSelect from "react-multi-select-component";


function MentorshipPersonalDetailsDropDown(props) {
    const options = [
        { label: "Technology", value: "Technology" },
        { label: "Nature", value: "Nature" },
        { label: "Music", value: "Music" },
        { label: "Sports", value: "Sports" },
        { label: "Entreprenuership", value: "Entreprenuership" },
        { label: "Reading", value: "Reading" },
        { label: "Volunteering", value: "Volunteering" },
        { label: "Arts", value: "Arts" },
        { label: "Dancing", value: "Dancing" },
        { label: "Comedy", value: "Comedy" },
        { label: "Gaming", value: "Gaming" },
        { label: "Cooking", value: "Cooking" },
        { label: "Animals", value: "Animals" },
        { label: "Travel", value: "Travel" },
    ];

    const [selected, setSelected] = useState(
        props.values.passions
    );


    return (
        <div>
            {/* {props.values.passions} */}
            <span >{JSON.stringify(selected)}</span>
            <MultiSelect
                options={options}
                value={selected}
                onChange={setSelected}
                labelledBy="Select"
            />
        </div >
    );
};

export default MentorshipPersonalDetailsDropDown;