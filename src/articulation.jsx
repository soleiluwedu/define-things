import React, { Component } from 'react';

const Articulation = (props) => (
  <div id="articulation">
    <div id="sentence">
      <p>{props.sentence}</p>
    </div>
    <div id="rearticulate">
      <input
        type="text"
        onKeyDown={e => props.onkeydown(e)}
        onChange={e => props.onchange(e)}
      />
    </div>
  </div>
);

export default Articulation;