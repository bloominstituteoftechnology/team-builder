import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { firstName, lastName, email, role, gitHubHandle }
    } = this.props;
    return (
        <form>
                <label primary="First Name" secondary={firstName} />
                <label primary="Last Name" secondary={lastName} />
                <label primary="Email" secondary={email} />
                <label primary="Team Role" secondary={role} />
                <label primary="GitHub Handle" secondary={gitHubHandle} />
            <br />
            <button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</button>
            <button
              color="primary"
              variant="contained"
              onClick={this.continue}
            >Confirm and Continue</button>
        </form>
    );
  }
}

export default Confirm;