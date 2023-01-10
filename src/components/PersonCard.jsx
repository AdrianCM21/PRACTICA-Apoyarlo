import { Component } from "react";

class PersonCard extends Component {
    render() { 
        const {firstName, lastName, age, hairColor}= this.props
        return (<div className="element">
            <h1>{firstName},{lastName}</h1>
            <p>Age: {age}</p>
            <p>Hair Color: {hairColor}</p>
        </div>);
    }
}
 
export default PersonCard;