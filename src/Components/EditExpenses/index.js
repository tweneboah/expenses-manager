import React, { Component } from "react";

class EditExpenses extends Component {
  //destructure props.

  render() {
    const { match } = this.props;
    return (
      <div>
        <h1>Edit Expenses</h1>
        <h2>Your are editinting {match.params.id}</h2>
      </div>
    );
  }
}

export default EditExpenses;
