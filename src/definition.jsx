import React, { Component } from 'react';
import Subsense from './subsense.jsx';

// Definition Component is presentational.
// Shows definitions and subsenses of words.
const Definition = (props) => (
  <div className="def">
    <p><span className="def_label">{!props.defObj.def ? '' : 'Definition: '}</span>{props.defObj.def}</p>
    {!props.defObj.sub ? '' : props.defObj.sub.map((s, i) => <Subsense key={`${props.propkey}-${i}`} subsense={s} />)}
  </div>
);

export default Definition;