import React, { Component } from 'react';
import TraineeList from '../components/TraineeList/TraineeList';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div data-testid="app" className="App">
        <TraineeList />
      </div>
    );
  }
}

export default App;
