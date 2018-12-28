import React, { Component } from 'react';
import './cell.css';

export default class Cell extends Component {
  render() {
    const { title, number , hasChildren } = this.props;

    return (
      <div className="cell-page">
        <div className="title-area">
          <div className="title-text">
            {title}
          </div>
          <div className="marker-icon">
            <i className="fa fa-map-marker"></i>
          </div>
        </div>
        <div>
          <div />
          <div className="number-area">
            {number}
          </div>
        </div>
        {hasChildren && <div className="oval" />}
      </div>
    )
  }
}
