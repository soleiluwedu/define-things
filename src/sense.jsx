import React, { Component } from 'react';
import Subsense from './subsense.jsx';

// Sense Component is presentational.
// Shows definitions and subsenses of word.
const Sense = (props) => (
  <div className="sense">
    <p><span className="def_label">{!props.sense.def ? '' : 'Definition: '}</span>{props.sense.def}</p>
    {!props.sense.sub ? '' : props.sense.sub.map((s, i) => <Subsense key={`${props.propkey}-${i}`} subsense={s} />)}
  </div>
);

export default Sense;