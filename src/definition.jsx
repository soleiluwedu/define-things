import React, { Component } from 'react';
import Subsense from './subsense.jsx';

// Definition Component is presentational.
// Shows definitions and subsenses of words.
const Definition = (props) => (
  <div className="definition">
    <p>
      <span className="definition_label">
        {
          !props.defObj.def
            ? ''
            : 'Definition: '
        }
      </span>
      {props.defObj.def}
    </p>
    {
      !props.defObj.sub
        ? ''
        : props.defObj.sub.map((sub, i) => (
          <Subsense
            key={`${props.propkey}-${i}`}
            subsense={sub}
          />
        ))
    }
  </div>
);

export default Definition;