import React from 'react';
import {hot} from 'react-hot-loader';


class Greetings extends React.Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Hello!</h1>
            </div>
        );
    }
}

export default hot(module)(Greetings);