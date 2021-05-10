import React, { Component } from 'react'

import "./MentorshipCSS/MentorshipRegister.css"

import MentorshipPersonalDetails from "./MentorshipPersonalDetails";
import MenteeQuestion1 from "./MenteeQuestion1";
import MenteeQuestion2 from "./MenteeQuestion2";
import MenteeQuestion3 from "./MenteeQuestion3";
import MenteeQuestion4 from "./MenteeQuestion4";

export class MentorshipRegister extends Component {
    state = {
        // starts at -1
        step: 0,
        firstName: '',
        lastName: '',
        DOB: '',
        DOBHometown: '',
        levelOfEducation: [{ "label": "", "value": "" }],
        passions: [],

        iAMa: '',
        interest: [],
        learningStyle: [],
        personlityType: [],
        phoneUsage: [],
        lookingForEdu: [],
        lookingForExp: [],
        lookingForComm: [],
        lookingForGender: [],
        lookingForLang: [],
        lookingForEthnicity: [],
        lookingForLocation: [],
        goals: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    }
    // Proceed to Prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    }
    continue = e => {
        e.preventDefault();
        this.nextStep();
    }

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value })
    }

    // Handle Multi or Single DropDown change
    handleDropDown = e => selected => {
        this.setState({ [e]: selected })
    }

    render() {
        const { step } = this.state;
        const { firstName, lastName, DOB, DOBHometown, levelOfEducation, passions, iAMa, interest, learningStyle, personlityType, phoneUsage, lookingForEdu, lookingForExp, lookingForComm, lookingForGender, lookingForLang, lookingForEthnicity, lookingForLocation, goals } = this.state

        const values = { step, firstName, lastName, DOB, DOBHometown, levelOfEducation, passions, iAMa, interest, learningStyle, personlityType, phoneUsage, lookingForEdu, lookingForExp, lookingForComm, lookingForGender, lookingForLang, lookingForEthnicity, lookingForLocation, goals }

        switch (step) {
            case -1:
                return (
                    <div>
                        <section id="MentorshipRegister">
                            <div className="MentorshipRegister__circle">
                                <h1>Register for Mentorship Program</h1>
                            </div>
                            <p>You Must Be Logged Into MPA for Mentorship Program</p>
                            <button onClick={this.continue}>Continue</button>
                        </section>
                    </div>
                );
            case 0:
                return (
                    <MentorshipPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        handleDropDown={this.handleDropDown}
                        values={values}
                    />
                );
            case 1:
                return (
                    <MenteeQuestion1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 2:
                return (
                    <MenteeQuestion2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleDropDown={this.handleDropDown}
                        values={values} />
                );
            case 3:
                return (
                    <MenteeQuestion3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleDropDown={this.handleDropDown}
                        values={values} />
                );
            case 4:
                return (
                    <MenteeQuestion4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
        }
    }
}

export default MentorshipRegister


