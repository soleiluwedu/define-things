import React, { Component } from 'react';
import { render } from 'react-dom';
import Articulation from './articulation.jsx';
import TopicNode from './topicnode.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articulation: '', // Articulation of success conditions.
      topicnodes: []         // Key parts to be stored as object keys.
    }
  }

  // On keydown of atriculation.
  articulation_onkeydown(event) {
    if (event.key === 'Enter') this.setState({ topicnodes: this.state.topicnodes.concat({ subject: event.target.value, id: this.state.topicnodes.length}) });
  }

  // On change of atriculation.
  articulation_onchange(event) {
    this.setState({ articulation: event.target.value })
  }

  // Show articulation and all key parts.
  render() {
    return (
      <div id="app">
        <h1 id="title">Thai's Introspective Problem-Solving</h1>
        <Articulation
          sentence={this.state.articulation}
          onkeydown={this.articulation_onkeydown.bind(this)}
          onchange={this.articulation_onchange.bind(this)}
        />
        {this.state.topicnodes.map((topicObj, i) => <TopicNode topic={topicObj.subject} key={i} propkey={i}/>)}
      </div>
    )
  }
}

render(<App />, document.getElementById('x'));