import React from 'react';
import { Link } from 'react-router-dom';

export default class Path extends React.Component {

  render() {
    return (
      <div>
        path page <br />
        <Link to='/'>Dashboard</Link>
      </div>
    )
  }

}
