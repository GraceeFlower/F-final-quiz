import React, { Component } from 'react';

import './TraineeList.scss';
import TraineeApi from '../../api/traineeList';

class TraineeList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainees: [],
      isCreating: false,
    };
  }

  async componentDidMount() {
    const trainees = await TraineeApi.getUngroupedTrainees();
    this.setState({ trainees });
  }

  handleClick = () => {
    this.setState({ isCreating: true });
  };

  handleKeyPressEnter = async (e) => {
    if (e.key === 'Enter') {
      try {
        const newTrainee = await TraineeApi.createTrainee(e.target.value);
        this.setState((state) => ({
          trainees: state.trainees.concat(newTrainee),
          isCreating: false,
        }));
      } catch (err) {
        alert('姓名不能为空!');
      }
    }
  };

  render() {
    const { trainees, isCreating } = this.state;

    return (
      <div>
        <h2 className="list-header">学生列表</h2>
        <ul className="trainee-list">
          {trainees.map((trainee) => (
            <li key={trainee.id}>
              {trainee.id}. {trainee.name}
            </li>
          ))}
          {isCreating ? (
            <input
              type="text"
              className="add-trainee-input"
              onKeyPress={this.handleKeyPressEnter}
            />
          ) : (
            <button type="button" className="add-trainee-btn" onClick={this.handleClick}>
              +添加学生
            </button>
          )}
        </ul>
      </div>
    );
  }
}

export default TraineeList;
