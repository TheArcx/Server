// SurveyNew shows SurveyForm and SurveyFormReview
import React, { Component } from "react";
import SurveyForm from "./SurveyForm";
import { reduxForm } from "redux-form";
import SurveyReview from "./SurveyFormReview";
class SurveyNew extends Component {
    state = { showReview: false };

    renderContent() {
        if (this.state.showReview === true) {
            return (
                <SurveyReview
                    onCancel={() => this.setState({ showReview: false })}
                />
            );
        }

        return (
            <SurveyForm
                onSurveySubmit={() => this.setState({ showReview: true })}
            />
        );
    }

    render() {
        return (
            <div>
                { this.renderContent() }
            </div>
        );
    }
}

export default reduxForm({
    form: 'surveyForm'
})(SurveyNew);