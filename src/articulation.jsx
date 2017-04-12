import React, { Component } from 'react';

const Articulation = (props) => (
  <div id="articulation">
    <div id="sentence">
      <p>{props.sentence}</p>
    </div>
    <div id="rearticulate">
      <input
        onChange={e => props.onchange(e)}
        onKeyDown={e => props.onkeydown(e)}
        type="text"
      />
    </div>
  </div>
);

export default Articulation;