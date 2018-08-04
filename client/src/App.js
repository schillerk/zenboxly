import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data: [],
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    fetch('/api/data')
      .then(res => res.json())
      .then(data => this.setState({ data }));
  }

  render() {
    const { data } = this.state;

    return (
      <div className="App">
        <div>
          {data}
          <button
            className="more"
            onClick={this.getData}
          >
            Get More
          </button>
        </div>
      </div>
    );
  }
}

export default App;