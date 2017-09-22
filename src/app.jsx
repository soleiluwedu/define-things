import React, { Component } from 'react';
import { render } from 'react-dom';
import Search from './search.jsx';
import Word from './word.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',      // Search term.
      words: []        // Words to define.
    }
  }

  // On change of search term.
  search_onchange = e => {
    this.setState({ search: e.target.value });
  }

  // On keydown of search term.
  search_onkeydown = e => {
    if (e.key === 'Enter' && e.target.value) {
      this.setState({ words: this.state.words.concat(e.target.value) });
      e.target.value = '';
    }
  }

  // Show search term and all searched words.
  render() {
    return (
      <div id="app">
        <h1 id="title">Define Things</h1>
        <Search onchange={this.search_onchange} onkeydown={this.search_onkeydown} sentence={this.state.search} />
        {this.state.words.map(w => <Word key={w} word={w} />)}
      </div>
    )
  }
}

render(<App />, document.getElementById('x'));