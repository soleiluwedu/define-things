import React, { Component } from 'react';
import { render } from 'react-dom';
import Sense from './sense.jsx';

// Word Component is a tree/node structure.
// Contains word, senses and children topics.
class Word extends Component {
  constructor(props) {
    super(props);
    this.state = {
      word: this.props.word,  // Key word or phrase.
      senses: [],             // Senses of topic.
    }
  }

  // Populate definitions of topic using Oxford API.
  componentDidMount() {
    const x = new XMLHttpRequest;
    x.open('POST', '/define');
    x.setRequestHeader("Content-type", "application/json");
    x.onload = () => {
      const response = JSON.parse(x.responseText);
      if (response.error) this.setState({ word: `${this.state.word} - Error: ${response.error}` });
      else this.setState({ senses: response });
    }
    x.send(JSON.stringify({ word: this.state.word }));
  }

  // Render word and senses.
  render() {
    const word = this.state.word; // For the sake of brevity.
    return (
      <div className="topic">
        <p>{word}</p>
        {this.state.senses.map((s, i) => <Sense sense={s} key={`${word}-Sense-${i}`} propkey={`${word}-Sense-${i}`} />)}
      </div>
    )
  }
}

export default Word;