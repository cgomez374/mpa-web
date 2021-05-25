import React, { Component } from 'react'

import "./MentorshipCSS/MentorshipRegister.css"

import MentorshipPersonalDetails from "./MentorshipPersonalDetails";
import MenteeQuestion1 from "./MenteeQuestion1";
import MenteeQuestion2 from "./MenteeQuestion2";
import MenteeQuestion3 from "./MenteeQuestion3";
import MenteeQuestion4 from "./MenteeQuestion4";
import MenteeQuestion5 from "./MenteeQuestion5";

export class MentorshipRegister extends Component {
    state = {
        // starts at 0
        step: 0,
        isErrorMessage: false,

        firstName: '',
        lastName: '',
        DOB: '',
        country: [{ "label": "", "value": "" }],
        levelOfEducation: [{ "label": "", "value": "" }],
        passions: [],

        iAMa: '',
        interest: [],
        learningStyle: [],
        personlityType: [],
        occupation: '',
        occupationPlace: '',
        primaryLang: [],
        lookingForEdu: [],
        lookingForExp: [],
        lookingForAvailability: [],
        lookingForGender: [],
        lookingForLang: [],
        lookingForEthnicity: [],
        description: ''
    }

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        if (step == 0) {
            this.setState({
                isErrorMessage: false,
                step: step + 1
            });
        }
        // Validation for step 1
        else if (step == 1 &&
            this.state.firstName.length > 0 &&
            this.state.lastName.length > 0 &&
            this.state.DOB.length > 0 &&
            this.state.DOB.length < 11 &&
            this.state.levelOfEducation[0].label.length > 0 &&
            this.state.country[0].label.length > 0 &&
            this.state.passions.length > 0) {
            this.setState({
                isErrorMessage: false,
                step: step + 1
            });
        }
        // Validation for step 2
        else if (step == 2 &&
            this.state.iAMa.length > 0) {
            this.setState({
                isErrorMessage: false,
                step: step + 1
            });
        }
        // Validation for step 3
        else if (step == 3 &&
            this.state.interest.length > 0 &&
            this.state.learningStyle.length > 0 &&
            this.state.personlityType.length > 0 &&
            this.state.occupationPlace.length > 0 &&
            this.state.primaryLang.length > 0 &&
            this.state.occupation.length > 0) {
            this.setState({
                isErrorMessage: false,
                step: step + 1
            });
        }
        // Validation for step 4
        else if (step == 4 &&
            this.state.lookingForEdu.length > 0 &&
            this.state.lookingForExp.length > 0 &&
            this.state.lookingForAvailability.length > 0 &&
            this.state.lookingForGender.length > 0 &&
            this.state.lookingForLang.length > 0 &&
            this.state.lookingForEthnicity.length > 0) {
            this.setState({
                isErrorMessage: false,
                step: step + 1
            });
        }
        // Validation for step 5
        else if (step == 5 &&
            this.state.description.length > 9) {
            this.setState({
                isErrorMessage: false,
                step: step + 1
            });

        }
        else {
            this.setState({
                isErrorMessage: true
            });
        }

    }
    // Proceed to Prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1,
            isErrorMessage: false
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
        const { firstName, lastName, DOB, country, levelOfEducation, passions, iAMa, interest, learningStyle, personlityType, occupation, occupationPlace, primaryLang, lookingForEdu, lookingForExp, lookingForAvailability, lookingForGender, lookingForLang, lookingForEthnicity, description, isErrorMessage } = this.state

        const values = { step, firstName, lastName, DOB, country, levelOfEducation, passions, iAMa, interest, learningStyle, personlityType, occupation, occupationPlace, primaryLang, lookingForEdu, lookingForExp, lookingForAvailability, lookingForGender, lookingForLang, lookingForEthnicity, description, isErrorMessage }

        switch (step) {
            case 0:
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
            case 1:
                return (
                    <MentorshipPersonalDetails
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleDropDown={this.handleDropDown}
                        values={values}
                    />
                );
            case 2:
                return (
                    <MenteeQuestion1
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 3:
                return (
                    <MenteeQuestion2
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        handleDropDown={this.handleDropDown}
                        values={values} />
                );
            case 4:
                return (
                    <MenteeQuestion3
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleDropDown={this.handleDropDown}
                        values={values} />
                );
            case 5:
                return (
                    <MenteeQuestion4
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        handleChange={this.handleChange}
                        values={values} />
                );
            case 6:
                return (
                    <MenteeQuestion5
                        prevStep={this.prevStep}
                        values={values} />
                );
        }
    }
}

export default MentorshipRegister


