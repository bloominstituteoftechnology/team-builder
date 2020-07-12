import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
            <MuiThemeProvider>
                <Dialog>
                <AppBar title = 'Enter User Details' />  
                <TextField
                    hintText='Enter Your First Name'
                    floatingLabelText='First Name' 
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />  
                <br />
                <TextField
                    hintText='Enter Your Last Name'
                    floatingLabelText='Last Name' 
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />  
                <br />
                <TextField
                    hintText='Enter Your Email'
                    floatingLabelText='Email' 
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />  
                <br />
                
                <Button
                label='Continue'
                color='primary'
                primary={true}
                style={styles.button}
                onClick={this.continue}
                >Continue</Button>
             </Dialog>
            </MuiThemeProvider>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails
