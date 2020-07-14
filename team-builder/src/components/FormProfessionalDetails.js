import React, { Component } from 'react';


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
                <form>
                <label title = 'Enter Team Role' />  
                <input type="text"
                    hintText='Enter Your Team Role'
                    floatingLabelText='Role' 
                    onChange={handleChange('role')}
                    defaultValue={values.role}
                 />
                <br />
                <label title = 'Enter Github Handle' />  
                <input type="text"
                    hintText='Enter Your Github Handle'
                    floatingLabelText='Github Handle' 
                    onChange={handleChange('gitHubHandle')}
                    defaultValue={values.gitHubHandle}
                />  
                <br />
                <button
                label="Continue"
                primary={true}
                style={styles.button}
                onClick={this.continue}
                />
                <button
                label="Back"
                primary={false}
                style={styles.button}
                onClick={this.back}
                />
             </form>
        )
    }
}

const styles = {
    button: {
        margin: 15
    }
}
export default FormProfessionalDetails;
