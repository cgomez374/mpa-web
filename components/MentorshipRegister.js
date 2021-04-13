import React, { Component } from 'react'

import "./MentorshipCSS/MentorshipRegister.css"

import MentorshipPersonalDetails from "./MentorshipPersonalDetails";
import MenteeQuestion1 from "./MenteeQuestion1";
import MenteeQuestion2 from "./MenteeQuestion2";
import MenteeQuestion3 from "./MenteeQuestion3";
import MenteeQuestion4 from "./MenteeQuestion4";
import MenteeQuestion5 from "./MenteeQuestion5";
import MenteeQuestion6 from "./MenteeQuestion6";
import MenteeQuestion7 from "./MenteeQuestion7";
import MenteeQuestion8 from "./MenteeQuestion8";
import MenteeQuestion9 from "./MenteeQuestion9";
import MenteeQuestion10 from "./MenteeQuestion10";
import MenteeQuestion11 from "./MenteeQuestion11";
import MenteeQuestion12 from "./MenteeQuestion12";
import MenteeQuestion13 from "./MenteeQuestion13";

export class MentorshipRegister extends Component {
    state = {
        // starts at -1
        step: 0,
        firstName: '',
        lastName: '',
        DOB: '',
        DOBHometown: '',
        levelOfEducation: '',
        passions: [
            { "label": "Technology", "value": "Technology" },
            { "label": "Nature", "value": "Nature" }
        ],

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
        lookingForLocation: '',
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

    render() {
        const { step } = this.state;
        const { firstName, lastName, DOB, DOBHometown, levelOfEducation, passions, iAMa, interest, learningStyle, personlityType, phoneUsage, lookingForEdu, lookingForExp, lookingForComm, lookingForGender, lookingForLang, lookingForLocation, goals } = this.state

        const values = { step, firstName, lastName, DOB, DOBHometown, levelOfEducation, passions, iAMa, interest, learningStyle, personlityType, phoneUsage, lookingForEdu, lookingForExp, lookingForComm, lookingForGender, lookingForLang, lookingForLocation, goals }

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
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 3:
                return (
                    <MenteeQuestion3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
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
            case 5:
                return (
                    <MenteeQuestion5
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 6:
                return (
                    <MenteeQuestion6
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 7:
                return (
                    <MenteeQuestion7
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 8:
                return (
                    <MenteeQuestion8
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 9:
                return (
                    <MenteeQuestion9
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 10:
                return (
                    <MenteeQuestion10
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 11:
                return (
                    <MenteeQuestion11
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 12:
                return (
                    <MenteeQuestion12
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 13:
                return (
                    <MenteeQuestion13
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
        }
    }
}

export default MentorshipRegister


