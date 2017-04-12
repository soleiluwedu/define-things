import React, { Component } from 'react';
import { render } from 'react-dom';
import Sense from './sense.jsx';

// Topic Component is a tree/node structure.
// Contains topic, senses and children topics.
class Topic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic,  // Key word or phrase.
      senses: [],                 // Senses of topic.
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
      else this.setState({ senses: response });
    }
    x.send(JSON.stringify({ topic: this.state.topic }));
  }

  // Render topic and children topics.
  render() {
    const topic = this.state.topic; // For the sake of brevity.
    return (
      <div className="topic">
        <p>{topic}</p>
        {this.state.senses.map((s, i) => <Sense sense={s} key={`${topic}-Sense-${i}`} propkey={`${topic}-Sense-${i}`} />)}
        {this.state.kids.map(t => <Topic key={t} topic={t} />)}
      </div>
    )
  }
}

export default Topic;