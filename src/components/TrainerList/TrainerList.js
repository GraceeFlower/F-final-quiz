import React, { Component } from 'react';

import './TrainerList.scss';
import TrainerApi from '../../api/trainerList';

class TrainerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [],
    };
  }

  async componentDidMount() {
    const trainers = await TrainerApi.getUngroupedTrainers();
    this.setState({ trainers });
  }

  render() {
    const { trainers } = this.state;

    return (
      <div>
        <h2 className="list-header">讲师列表</h2>
        <ul className="student-list">
          {trainers.map((trainer) => (
            <li key={trainer.id}>
              {trainer.id}. {trainer.name}
            </li>
          ))}
          <input
            type="button"
            className="add-teacher-btn"
            value="+添加讲师"
            onClick={this.handleClick}
          />
        </ul>
      </div>
    );
  }
}

export default TrainerList;
