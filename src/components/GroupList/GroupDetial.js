import React, { Component } from 'react';
import './GroupDetail.scss';

class GroupDetail extends Component {
  render() {
    return (
      <div className="group-detail">
        <header className="group-name">{this.props.groupName}</header>
        <ul className="group-member-list">
          <li>1. Bob</li>
          <li>2. Lily</li>
        </ul>
      </div>
    );
  }
}

export default GroupDetail;
