import { Component } from "react";
class ClassEvent extends Component{
    handleClick =  () => {
        console.log("Class Button Clicked");
    }
    render() {
        return (
            <div>
                This is a class based component
                <button onClick={this.handleClick}>Click here</button>
            </div>
        );
    }
}
export default ClassEvent;
