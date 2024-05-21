import {Component} from 'react';

class Mess extends Component {
    render(){
        return <h1>Message: {this.props.messagecode}</h1>;
    }
}

export default Mess;