import React, { Component } from 'react';
import TraineeList from '../components/TraineeList/TraineeList';
import TrainerList from '../components/TrainerList/TrainerList';
import GroupList from '../components/GroupList/GroupList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        {/* TODO GTB-工程实践: + 第一层组件划分合理 */}
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
// TODO GTB-完成度: * 完成"未分组"学员/讲师的获取，添加，删除；未完成学员分组
// TODO GTB-工程实践: + 小步提交
