import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Container, Message, Button } from "semantic-ui-react";




class SignOut extends Component {
    render() {
        return (
            <Container>
                <Message negative header ="We're sorry to see you go :("/>
                <Button as={Link} to="/" content="Go back to sign up" />
            </Container>
        );
    }
}

export default SignOut;