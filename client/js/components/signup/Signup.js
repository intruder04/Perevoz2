import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import SignupForm from './SignupForm';
import {userSignupRequest} from  '../../actions/signupActions';

class Signup extends React.Component {
    render() {
        const {userSignupRequest} = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4"></div>
                <SignupForm userSignupRequest={userSignupRequest}/>
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest: PropTypes.func.isRequired
}

export default connect(null, { userSignupRequest })(Signup);