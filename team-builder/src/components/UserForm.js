import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormProfessionalDetails';
import Confirm from './Confirm';
import Success from './Sucess';


export class UserForm extends Component {
    state = {
        step: 1,
        firstName: '',
        lastName: '',
        email: '',
        role: '',
        gitHubHandle: ''
    };

    //Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    //Go back to previous step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    //Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value});
    };

    render() {
        const { step } = this.state;
        const { firstName, lastName, email, role, gitHubHandle} = this.state;
        const values = { firstName, lastName, email, role, gitHubHandle}
        
        switch(step) {
            case 1:
                return (
                    <FormUserDetails
                    nextStep={this.nextStep}
                    handleChange={this.handleChange}
                    values={values}
                    />
                );
                case 2:
                    return (
                        <FormPersonalDetails
                          nextStep={this.nextStep}
                          prevStep={this.prevStep}
                          handleChange={this.handleChange}
                          values={values}
                        />
                      );
                    case 3:
                        return (
                          <Confirm
                            nextStep={this.nextStep}
                            prevStep={this.prevStep}
                            values={values}
                          />
                        );
                      case 4:
                        return <Success />;
                      default:
                        (console.log('This is a multi-step form built with React.'))
                    }
                  }
                }
export default UserForm
