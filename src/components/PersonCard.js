import React, { Component } from "react";
    const Button = (props) => {
        return (
            <button onClick={props.handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
        )
    }
class PersonCardComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            updatedAge: this.props.age
        }
    }
    handleClick = () => {
        this.setState({
            updatedAge: this.state.updatedAge + 1
        })
    }
    render() {
        const { lastName, firstName, age, hairColor } = this.props;
        return (
            <div>
                <h1>{lastName}, {firstName}</h1>
                <p>Age: {this.state.updatedAge}</p>
                <p>Hair Color: {hairColor}</p>
                <Button handleClick={this.handleClick} firstName={this.props.firstName} lastName={this.props.lastName}/>
            </div>
        );
    }
}
export default PersonCardComponent;