import React from 'react';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/eventActions';

class EventForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            errors: {},
            isLoading: false
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.createEvent(this.state);
    }

    render() {
        const { errors, title, isLoading } = this.state;

        return (
           <form onSubmit={this.onSubmit}>
               <h1>Введите текст</h1>
                
                <TextFieldGroup
                    error = {errors.title}
                    label = "Текст"
                    onChange = {this.onChange}
                    value = {title}
                    field = 'title'
                />
               <div className="form-group">
               <button disabled={isLoading} className="btn btn-primary btn-lg">Отправить</button>
               </div>
           </form>
        );
    }
}

EventForm.propTypes = {
    createEvent: PropTypes.func.isRequired
}

export default connect(null, { createEvent })(EventForm);