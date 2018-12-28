import React, { Component } from 'react';
import Cell from '../cell';
import './branch.css';

export default class Branch extends Component {
  render() {
    const { data } = this.props;
    var hasChildren = false;

    if (data.children) {
      hasChildren = data.children.length > 0;
    }
    return (
      <div className="branch-page">
        <Cell title={data.title} number={data.number} hasChildren={hasChildren}
        />
      </div>
    )
  }
}
