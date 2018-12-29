import React, { Component } from 'react';
import './App.css';

import { TextInput } from './TextInput';
import { Col } from './Col';
import { Row, SpacedRow } from './Row';
import { Card } from './Card';
import { Padding, Margin } from './Spacing';

const parseInput = (input) => input ? input : 'blank';

class App extends Component {
  constructor() {
    super();

    this.state = {
      input: '',
      cards: ['Books', 'Films', 'Articles', 'Talks', 'Papers'],
    };

    this.updateInput = this.updateInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  renderCards() {
    return this.state.cards.map(card => 
      <Col size={3} sides="8px" ends="8px">
        <Card>
          <Padding all="16px">
            {card}
          </Padding>
        </Card>
      </Col>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState(({ cards, input }) => ({
      input: '',
      cards: [...cards, parseInput(input)],
    }))
  }

  render() {
    const { input } = this.state;
    return (
      <span>
      <Margin all="16px" bottom="8px">
        <form
          onSubmit={this.handleSubmit}
        >
          <TextInput
            value={input}
            onChange={this.updateInput}
          />
        </form>
      </Margin>
      <Margin all="8px">
        <Row>
          {this.renderCards()}
        </Row>
      </Margin>
      </span>
    );
  }
}

export default App;
