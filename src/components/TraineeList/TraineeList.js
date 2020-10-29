import React, { Component } from 'react';

import './Trainee.scss';

class TraineeList extends Component {
  render() {
    return (
      <div>
        <h2 className="list-header">学生列表</h2>
        <ul className="student-list">
          <li>Student1</li>
          <button type="button" className="add-student-btn">
            +添加学生
          </button>
        </ul>
      </div>
    );
  }
}

export default TraineeList;
