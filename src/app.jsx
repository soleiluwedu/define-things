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
  }

  // On keydown of articulation.
  art_onkeydown(e) {
    if (e.key === 'Enter') this.setState({ topics: this.state.topics.concat(e.target.value) });
  }

  // On change of articulation.
  art_onchange(e) {
    this.setState({ art: e.target.value })
  }

  // Show articulation and all topics.
  render() {
    return (
      <div id="app">
        <h1 id="title">Thai's Introspective Problem-Solving</h1>
        <Articulation
          onchange={this.art_onchange.bind(this)}
          onkeydown={this.art_onkeydown.bind(this)}
          sentence={this.state.art}
        />
        {
          this.state.topics.map((topic, i) => (
            <Topic
              key={topic}
              topic={topic}
            />
          ))
        }
      </div>
    )
  }
}

render(<App />, document.getElementById('x'));