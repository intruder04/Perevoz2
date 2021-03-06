import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from './SignupForm';
import { userSignupRequest, isUserExists } from  '../../actions/signupActions';
import { addFlashMessage } from '../../actions/flashMessages';

class Signup extends React.Component {
    render() {
        const {userSignupRequest, addFlashMessage, isUserExists} = this.props;
        return (
            <div className="row">
                <div className="col-md-4 col-md-offset-4"></div>
                <SignupForm 
                userSignupRequest={userSignupRequest}
                isUserExists={isUserExists}
                addFlashMessage={addFlashMessage}
                history={this.props.history}
                />
            </div>
        );
    }
}

Signup.propTypes = {
    userSignupRequest: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    isUserExists: PropTypes.func.isRequired,
    history: PropTypes.object.isRequired
}

export default connect(null, { userSignupRequest, addFlashMessage, isUserExists })(Signup);