// Review form shows form inputs
import _ from 'lodash';
import React from 'react';
import FIELDS from './formFields';
import { connect } from 'react-redux';


const SurveyReview = ({ onCancel, formValues }) => {
    
    const reviewFields = _.map(FIELDS, ({ name, label}) => {
        return (
            <div key = {name}>
                <label>{label}</label>
                <div>
                    {formValues[name]}
                </div>
            </div>
        );
    });
    
    return (
        <div>
            <h5>Please confirm your entries</h5>
            {reviewFields}
            <button
                className="yellow darken-3 btn-flat"
                onClick={onCancel}
            >
                Back
            </button>

        </div>
    );
};

function mapStateToProps(state) {
    return {
        formValues: state.form.surveyForm.values
    };
}

export default connect(mapStateToProps)(SurveyReview);