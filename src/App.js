import { Component } from "react";
import "./App.css";
import CardList from "./components/CardList";
import SearchBar from "./components/SearchBar/SearchBar";

class App extends Component {
  constructor() {
    super();
    this.state = {
      cards: [],
      searchField: "",
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => this.setState({ cards: json }))

  }

  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();
    this.setState({ searchField: searchField })
  }

  render() {
    const { cards, searchField } = this.state
    const { onSearchChange } = this;
    const filteredCards = cards.filter((card) => {
      return card.name.toLowerCase().includes(searchField);
    })

    return (
      <div className="App">
        <header className="App-header">
          <div className="text-center  h2 title">
            Monsters-Rolodex: Search the monsters using REACT !!
          </div>
          <div className="text-center m-5">
            <SearchBar onChangeHandler={onSearchChange} placeholder='Search' className='username-search-box' />
          </div>
          <div className="cardList d-flex justify-content-center">
            <CardList cards={filteredCards} />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
