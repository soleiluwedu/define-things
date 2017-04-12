import React, { Component } from 'react';

// Subsense Component is presentational.
// Shows subsenses of words.
const Subsense = (props) => (
  <div className="subsense">
    <p>
      <span className="subsense_label">Subsense: </span>
      {props.subsense}
    </p>
  </div>
);

export default Subsense;