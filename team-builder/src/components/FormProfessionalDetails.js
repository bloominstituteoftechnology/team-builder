import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormProfessionalDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Dialog>
                <AppBar title = 'Enter Professional Details' />  
                <TextField
                    hintText='Enter Your Team Role'
                    floatingLabelText='Role' 
                    onChange={handleChange('role')}
                    defaultValue={values.role}
                />  
                <br />
                <TextField
                    hintText='Enter Your Github Handle'
                    floatingLabelText='Github Handle' 
                    onChange={handleChange('gitHubHandle')}
                    defaultValue={values.gitHubHandle}
                />  
                <br />
                <Button
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <Button
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
             </Dialog>
            </MuiThemeProvider>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormProfessionalDetails;
