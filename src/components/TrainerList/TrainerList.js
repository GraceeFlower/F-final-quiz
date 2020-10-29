import React, { Component } from 'react';

import './TrainerList.scss';
import TrainerApi from '../../api/trainerList';

class TrainerList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      trainers: [],
      isCreating: false,
    };
  }

  async componentDidMount() {
    const trainers = await TrainerApi.getUngroupedTrainers();
    this.setState({ trainers });
  }

  handleClick = () => {
    this.setState({ isCreating: true });
  };

  handleKeyPressEnter = async (e) => {
    if (e.key === 'Enter') {
      try {
        const newTrainer = await TrainerApi.createTrainer(e.target.value);
        this.setState((state) => ({
          trainers: state.trainers.concat(newTrainer),
          isCreating: false,
        }));
      } catch (err) {
        alert('姓名不能为空!');
      }
    }
  };

  handleDelete = async (e) => {
    const trainerId = e.target.parentElement.innerText.split('.')[0];
    await TrainerApi.deleteTrainer(trainerId);
    this.setState((state) => ({
      trainers: state.trainers.filter((t) => t.id.toString() !== trainerId),
    }));
  };

  render() {
    const { trainers, isCreating } = this.state;

    return (
      <div>
        <h2 className="list-header">讲师列表</h2>
        <ul className="trainer-list">
          {trainers.map((trainer) => (
            <li key={trainer.id}>
              {trainer.id}. {trainer.name}
              <button type="button" className="delete-btn" onClick={this.handleDelete}>
                x
              </button>
            </li>
          ))}
          {isCreating ? (
            <input
              type="text"
              className="add-trainer-input"
              onKeyPress={this.handleKeyPressEnter}
            />
          ) : (
            <button type="button" className="add-trainer-btn" onClick={this.handleClick}>
              +添加讲师
            </button>
          )}
        </ul>
      </div>
    );
  }
}

export default TrainerList;
