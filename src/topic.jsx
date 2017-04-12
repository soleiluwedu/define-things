import React, { Component } from 'react';
import { render } from 'react-dom';
import Definition from './definition.jsx';

// Topic Component is a tree/node structure.
// Contains topic, definition/subsenses, and children topics.
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic,  // Key word or phrase.
      defs: [],                 // Definitions of topic.
      kids: []                  // Children topics.
    }
  }

  // Populate definitions of topic using Oxford API.
  componentDidMount() {
    const x = new XMLHttpRequest;
    x.open('POST', '/define');
    x.setRequestHeader("Content-type", "application/json");
    x.onload = () => {
      const response = JSON.parse(x.responseText);
      if (response.error) this.setState({ topic: `${this.state.topic} - Error: ${response.error}` });
      else this.setState({ defs: response });
    }
    x.send(JSON.stringify({ topic: this.state.topic }));
  }

  // Render topic and children topics.
  render() {
    const topic = this.state.topic; // For the sake of brevity.
    return (
      <div className="topic">
        <p>{topic}</p>
        {this.state.defs.map((d, i) => <Definition defObj={d} key={`${topic}-Def-${i}`} propkey={`${topic}-Def-${i}`} />)}
        {this.state.kids.map(t => <Topic key={t} topic={t} />)}
      </div>
    )
  }
}

export default Topic;