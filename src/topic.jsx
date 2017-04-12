import React, { Component } from 'react';
import { render } from 'react-dom';
import Definition from './definition.jsx';

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
    return (
      <div className="topic">
        <p>{this.state.topic}</p>
        {
          this.state.defs.map((defObj, i) => (
            <Definition
              defObj={defObj}
              key={`${this.state.topic}-Def-${i}`}
              propkey={`${this.state.topic}-Def-${i}`}
            />
          ))
        }
        {
          this.state.kids.map((topic, i) => (
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

export default Topic;