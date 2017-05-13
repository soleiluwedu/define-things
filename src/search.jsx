import React, { Component } from 'react';

// Search Component keeps history of search terms.
// Has input field to enter new search terms.
const Search = (props) => (
  <div id="art">
    <div id="sentence">
      <p>{props.sentence}</p>
    </div>
    <div id="def_input">
      <input onChange={e => props.onchange(e)} onKeyDown={e => props.onkeydown(e)} type="text" />
    </div>
  </div>
);

export default Search;