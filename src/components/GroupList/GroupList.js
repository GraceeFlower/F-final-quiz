import React, { Component } from 'react';
import GroupDetail from './GroupDetial';
import './GroupList.scss';

class GroupList extends Component {
  render() {
    const nameList = [1, 2, 3, 4];
    return (
      <div className="trainee-group">
        <header className="group-header">
          <h2>分组列表</h2>
          <input className="separate-button" type="button" value="分组学员" />
        </header>
        {nameList.map((groupName) => (
          <GroupDetail key={groupName} groupName={groupName} />
        ))}
      </div>
    );
  }
}

export default GroupList;
