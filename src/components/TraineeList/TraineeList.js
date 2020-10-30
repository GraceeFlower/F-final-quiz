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
          // TODO GTB-知识点: - 这里最好重新从后端获取一次数据
          trainees: state.trainees.concat(newTrainee),
          isCreating: false,
        }));
      } catch (err) {
        alert('姓名不能为空!');
      }
    }
  };

  handleDelete = async (e) => {
    // TODO GTB-知识点: - traineeId 可以直接通过参数传进来使用，避免从dom 上去拿数据
    const traineeId = e.target.parentElement.innerText.split('.')[0];
    await TraineeApi.deleteTrainee(traineeId);
    // TODO GTB-知识点: - 这里没有做异常处理，如果删除失败，前端数据自行更改是不合理的
    // TODO GTB-知识点: - 删除之后也需要从后端获取一次数据
    this.setState((state) => ({
      trainees: state.trainees.filter((t) => t.id.toString() !== traineeId),
    }));
  };

  render() {
    // TODO GTB-知识点: + ES6+ 解构语法使用正确
    const { trainees, isCreating } = this.state;

    return (
      // TODO GTB-知识点: - 可以使用section更语义化的标签
      <div>
        <h2 className="list-header">学生列表</h2>
        <ul className="trainee-list">
          {trainees.map((trainee) => (
            <li key={trainee.id}>
              {/* TODO GTB-知识点: - 这里可以提取一个公共组件，如PersonnelItem组件，在trainerList和groupList里面也可以共用 */}
              {trainee.id}. {trainee.name}
              <button type="button" className="delete-btn" onClick={this.handleDelete}>
                x
              </button>
            </li>
          ))}
          {/* TODO GTB-知识点: - 添加功能也可以提取一个公共组件，如AddPersonnel，在trainerList可以共用 */}
          {/* TODO GTB-完成度: - 没有 autofocus */}
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
