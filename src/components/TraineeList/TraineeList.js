import React, { Component } from 'react';

import './TraineeList.scss';
import TraineeApi from '../../api/trainee';

class TraineeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainees: [],
    };
  }

  componentDidMount = async () => {
    const trainees = await TraineeApi.getUngroupedTrainees();
    this.setState(trainees);
  };

  render() {
    const { trainees } = this.state;

    return (
      <div>
        <h2 className="list-header">学生列表</h2>
        <ul className="student-list">
          {trainees.map((trainee) => (
            <li key={trainee.id}>
              {trainee.id}.{trainee.name}
            </li>
          ))}
          <button type="button" className="add-student-btn">
            +添加学生
          </button>
        </ul>
      </div>
    );
  }
}

export default TraineeList;
