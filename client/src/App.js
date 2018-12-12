import React, { Component } from 'react';
import './App.css';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

const CARD_SUITS = [
      "Spades",
      "Hearts",
      "Diamonds",
      "Clubs"
    ];

const CARD_VALUES = [
  2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K", "A"
];

const VALUE_MAP = {
  "J": 11,
  'Q': 12,
  'K': 13,
  'A': 1,
};

const ICON_MAP = {
  "Spades": 'S',
  "Hearts": 'H',
  "Diamonds": 'D',
  "Clubs": 'C',
};

const COLOR_MAP = {
  "Spades": 'black',
  "Hearts": 'red',
  "Diamonds": 'red',
  "Clubs": 'black',
};

const HAND_SIZE = 5;

class App extends Component {
  constructor() {
    super();

    this.state = {
      deck: this.generateDeck(),
      hand: [],
      index: 0,
    };

    this.dealCards = this.dealCards.bind(this);
  }

  generateDeck(remainingCards = []) {
    const deck = [];
    CARD_SUITS.forEach(suit => {
      CARD_VALUES.forEach(value => {
        deck.push({
          suit: suit,
          value: value,
        });
      })
    })

    const newDeck = deck.filter(card => {
      return !remainingCards.some(el =>
        el.suit === card.suit && el.value === card.value);
    });

    return shuffle(newDeck);
  }

  dealCards() {
    this.setState(({index, deck, hand}) => {
      const deckSize = CARD_SUITS.length * CARD_VALUES.length;
      if (index >= deckSize - HAND_SIZE) {
        const remainingCards = deck.slice(index, deckSize);
        const newDeck = this.generateDeck(remainingCards);
        const newIndex = HAND_SIZE - remainingCards.length;
        const newCards = newDeck.slice(0, newIndex);
        return {
          deck: newDeck,
          hand: [...remainingCards, ...newCards],
          index: newIndex,
        }
      } else {
        return {
          hand: deck.slice(index, index + HAND_SIZE),
          index: index + HAND_SIZE,
        };
      }
    });
  }

  renderCard({value, suit}) {
    const num = typeof value === typeof '' ? VALUE_MAP[value] : value;
    const icons = new Array(num).fill(0).map(icon => {
      const colorClass = `card-wrap__icon--${COLOR_MAP[suit]}`;
      return (
        <span className={colorClass}>
          {ICON_MAP[suit]}
        </span>
      );
    });

    return (
      <div className="card-wrap">
        <div className="card-wrap__value">
          {value}
        </div>
        {icons}
      </div>
    )
  }

  renderHand() {
    return this.state.hand.map(card => this.renderCard(card));
  }

  render() {
    return (
      <div>
        <button
          onClick={this.dealCards}
        >
          Deal Some Cards
        </button>
        {this.renderHand()}
      </div>
    );
  }
}

export default App;
