import React, { useState } from "react";

const PersonCardComponent = props => {
    const [state, setState] = useState({
    updatedAge: props.age
    });
    const clickHandler = () => {
        setState({
        updatedAge: state.updatedAge + 1
        });
    };
    return (
    <div>
        <h1>
            {props.lastName}, {props.firstName}
        </h1>
        <p>Age: {state.updatedAge}</p>
        <p>Hair Color: {props.hairColor}</p>
        <button onClick={clickHandler}>
        Birthday Button for {props.firstName} {props.lastName}
        </button>
    </div>
    );
};
export default PersonCardComponent;

// import React, { Component } from "react";
//     const Button = (props) => {
//         return (
//             <button onClick={props.handleClick}>Birthday Button for {props.firstName} {props.lastName}</button>
//         )
//     }
// class PersonCardComponent extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             updatedAge: this.props.age
//         }
//     }
//     handleClick = () => {
//         this.setState({
//             updatedAge: this.state.updatedAge + 1
//         })
//     }
//     render() {
//         const { lastName, firstName, age, hairColor } = this.props;
//         return (
//             <div>
//                 <h1>{lastName}, {firstName}</h1>
//                 <p>Age: {this.state.updatedAge}</p>
//                 <p>Hair Color: {hairColor}</p>
//                 <Button handleClick={this.handleClick} firstName={this.props.firstName} lastName={this.props.lastName}/>
//             </div>
//         );
//     }
// }
// export default PersonCardComponent;