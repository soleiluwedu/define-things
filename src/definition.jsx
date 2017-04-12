import React, { Component } from 'react';
import Subsense from './subsense.jsx';

const Definition = (props) => (
  <div className="definition">
    <p><span className="definition_label">{props.defObj.definition ? 'Definition:' : ''}</span> {props.defObj.definition}</p>
    {
      !props.defObj.subsenses
        ? ''
        : props.defObj.subsenses.map((sub, i) => (
          <Subsense
            subsense={sub}
            key={`${props.propkey}-${i}`}
            propkey={`${props.propkey}-${i}`}
          />
        ))
    }
  </div>
);

export default Definition;