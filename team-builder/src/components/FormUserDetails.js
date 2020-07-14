import React, { Component } from 'react';

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    };

    render() {
        const { values, handleChange } = this.props;
        return (
                <form>
                <label title = 'Enter User Details' />  
                <input
                    hintText='Enter Your First Name'
                    floatingLabelText='First Name' 
                    onChange={handleChange('firstName')}
                    defaultValue={values.firstName}
                />  
                <br />
                <input
                    hintText='Enter Your Last Name'
                    floatingLabelText='Last Name' 
                    onChange={handleChange('lastName')}
                    defaultValue={values.lastName}
                />  
                <br />
                <input
                    hintText='Enter Your Email'
                    floatingLabelText='Email' 
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                />  
                <br />
                
                <button
                label='Continue'
                color='primary'
                primary={true}
                style={styles.button}
                onClick={this.continue}
                >Continue</button>
            </form>
        );
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormUserDetails
