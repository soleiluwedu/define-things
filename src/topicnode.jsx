import React, { Component } from 'react';
import { render } from 'react-dom';
import Definition from './definition.jsx';

class TopicNode extends Component {
  constructor(props) {
    super(props);
    this.state = {
      topic: this.props.topic,  // Key word or phrase to explore.
      definitions: [],          // Definitions of topic to explore.
      children: []              // Children nodes to explore.
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
      else this.setState({ definitions: response });
    }
    x.send(JSON.stringify({ topic: this.state.topic }));
  }

  // Render node.
  render() {
    return (
      <div className="node">
        <p>{this.state.topic}</p>
        {this.state.definitions.map((defObj, i) => <Definition defObj={defObj} key={`${this.props.propkey}-${i}`} propkey={`${this.props.propkey}-${i}`}/>)}
        {this.state.children.map(topicnode => <TopicNode key={`${this.props.id}-${this.children.length}`} />)}
      </div>
    )
  }
}

export default TopicNode;