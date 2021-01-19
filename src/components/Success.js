import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import AppBar from 'material-ui/AppBar'

export class Success extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }
    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                <AppBar title="Success" />  
                <h1> Thanks for the submission! </h1>
                <p> Please check your email to verify your account </p>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


export default Success
