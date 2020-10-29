import React, { Component } from 'react';
import TraineeList from '../components/TraineeList/TraineeList';
import TrainerList from '../components/TrainerList/TrainerList';
import GroupList from '../components/GroupList/GroupList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <GroupList />
        <TrainerList />
        <TraineeList />
      </div>
    );
  }
}

export default App;
