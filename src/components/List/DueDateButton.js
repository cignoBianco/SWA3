import React, { Component } from 'react';

class DueDateButton extends Component {
  render() {
    return (
      <li
        className="duedate-btn"
        title="Set a Due Date"
        onClick={this.props.onClick}
      >
         Set due date
      </li>
    );
  }
}

export default DueDateButton;
