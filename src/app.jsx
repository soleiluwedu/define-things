import React, { Component } from 'react';
import { render } from 'react-dom';
import Articulation from './articulation.jsx';
import Topic from './topic.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      art: '',      // Articulation of success conditions.
      topics: []    // Topics to explore.
    }
    this.art_onchange = this.art_onchange.bind(this);
    this.art_onkeydown = this.art_onkeydown.bind(this);
  }

  // On change of articulation.
  art_onchange(e) {
    this.setState({ art: e.target.value });
  }

  // On keydown of articulation.
  art_onkeydown(e) {
    if (e.key === 'Enter' && e.target.value) {
      this.setState({ topics: this.state.topics.concat(e.target.value) });
      e.target.value = '';
    }
  }

  // Show articulation and all topics.
  render() {
    return (
      <div id="app">
        <h1 id="title">Define Things</h1>
        <Articulation onchange={this.art_onchange} onkeydown={this.art_onkeydown} sentence={this.state.art} />
        {this.state.topics.map(t => <Topic key={t} topic={t} />)}
      </div>
    )
  }
}

render(<App />, document.getElementById('x'));