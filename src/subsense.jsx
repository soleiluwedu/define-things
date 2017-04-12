import React, { Component } from 'react';

// Subsense Component is presentational.
// Shows subsenses of words.
const Subsense = (props) => (
  <div className="sub">
    <p><span className="sub_label">Subsense: </span>{props.subsense}</p>
  </div>
);

export default Subsense;