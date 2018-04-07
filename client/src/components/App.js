import React from 'react';
import NavigationBar from '../containers/NavigationBar';
import FlashMessagesList from './flash/FlashMessagesList';


class App extends React.Component {
    render() {
        return (
            <div className="container">
                <NavigationBar/>
                <FlashMessagesList/>
                {this.props.children}
            </div>
                
            
        );
    }
}

export default App;