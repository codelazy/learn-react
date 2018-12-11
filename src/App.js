import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Table from './Table';
import Form from './Form';

class App extends Component {
  state = {
    characters: [ ]
  };

  handleSubmit = character => {
      this.setState({characters: [...this.state.characters, character]});
  }
  removeCharacter = index => {
    const { characters } = this.state;

    this.setState({
        characters: characters.filter((character, i) => {
            return i !== index;
        })
    });
  }
  render() {

      const {characters} = this.state;
      const menus = [
          {
              'title': 'Google',
              'url': 'https://google.com'
          },
          {
              'title': 'Apple',
              'url': 'https://apple.com'
          }
      ];

       return (
          <div className="container">
              <Menu menusData={menus} />
              <Table
                characterData={characters}
                removeCharacter ={this.removeCharacter}
              />
              <Form handleSubmit={this.handleSubmit} />
          </div>
       );
  }
}

export default App;
