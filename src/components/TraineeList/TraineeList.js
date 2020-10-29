import React, { Component } from 'react';

import './TraineeList.scss';
import TraineeApi from '../../api/traineeList';

class TraineeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainees: [],
    };
  }

  async componentDidMount() {
    const trainees = await TraineeApi.getUngroupedTrainees();
    this.setState({ trainees });
  }

  handleClick = (e) => {
    e.target.type = 'text';
    e.target.value = '';
  };

  handleKeyPressEnter = (e) => {
    if (e.keyCode === 13) {
      e.preventDefault();
      e.target.type = 'button';
    }
  };

  render() {
    const { trainees } = this.state;

    return (
      <div>
        <h2 className="list-header">学生列表</h2>
        <ul className="student-list">
          {trainees.map((trainee) => (
            <li key={trainee.id}>
              {trainee.id}. {trainee.name}
            </li>
          ))}
          <input
            type="button"
            className="add-student-btn"
            value="+添加学生"
            onClick={this.handleClick}
            onKeyPress={this.handleKeyPressEnter}
          />
        </ul>
      </div>
    );
  }
}

export default TraineeList;
