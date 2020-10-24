import React, { Component } from 'react';
import { 
 CalendarOutlined
 } from '@ant-design/icons';
class DueDateButton extends Component {
  render() {
    return (
      <li
        className="duedate-btn"
        title="Set a Due Date"
        onClick={this.props.onClick}
      >
         <CalendarOutlined />
      </li>
    );
  }
}

export default DueDateButton;
