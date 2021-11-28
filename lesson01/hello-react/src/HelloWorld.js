import React from "react";
import ReactDom from "react-dom";

const SimpleHello = React.createElement("h1",
    { className: 'HelloWorld' },
    "Hello, World"
);

function FunctionalComponentHelloWorld (props){
    return (
        <h1>{ props.text }</h1> // JSX
    );
}

class ClassComponentHelloWorld extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <FunctionalComponentHelloWorld text={this.props.text} />
        );
    }
}

export {
    SimpleHello,
    FunctionalComponentHelloWorld,
    ClassComponentHelloWorld
};