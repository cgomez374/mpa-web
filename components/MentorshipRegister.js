import React, { Component } from 'react'

import "./MentorshipCSS/MentorshipRegister.css"

import MentorshipPersonalDetails from "./MentorshipPersonalDetails";
import MenteeQuestion1 from "./MenteeQuestion1";

export class MentorshipRegister extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        DOB: '',
        DOBHometown: '',
        levelOfEducation: '',
        levelOfEducationHometown: '',

        iAMa: '',
        interest: '',
        learningStyle: '',
        personlityType: '',
        phoneUsage: '',
        lookingForEdu: '',
        lookingForExp: '',
        lookingForComm: '',
        lookingForGender: '',
        lookingForLang: '',
        lookingForEthnicity: '',
        lookingForProximity: '',
        goals: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
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

    render() {
        const { step } = this.state;
        const { firstName, lastName, DOB, DOBHometown, levelOfEducation, levelOfEducationHometown } = this.state
        const values = { firstName, lastName, DOB, DOBHometown, levelOfEducation, levelOfEducationHometown }

        switch (step) {
            case 1:
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
            case 2:
                return (
                    <MentorshipPersonalDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );
            case 3:
                return (
                    <MenteeQuestion1 />
                );
        }
    }
}

export default MentorshipRegister


