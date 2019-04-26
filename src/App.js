import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import NavBar from "./components/NavBar/navbar";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./characters.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    topScore: 0,
    currentScore: 0,
    right: "",
    clicked: []
  };

  clickCard = (id) => {
    const element = document.getElementById("wrapper");

    if (!this.state.clicked.includes(id)){
      element.classList.remove("shake");
      this.setState({
        clicked: this.state.clicked.concat(id),
        currentScore: this.state.currentScore+1
        })
        console.log(this.state.currentScore);
    }
    //user's score reset to 0 if they click the same image more than once.
    else {
      element.classList.add("shake");
      this.setState({
        clicked: [],
        currentScore: 0
        })
    }
    this.setCurrentScore();
    this.shuffleCards();
  }


  shuffleCards = () => {
    for (let i =0; i<friends.length; i++) {
      let elem = friends[i];
      let randomNum=Math.floor(Math.random() * friends.length);
      friends[i]=friends[randomNum];
      friends[randomNum]=elem;
    }
  }

  setCurrentScore = () => {
    if (this.state.currentScore > this.state.topScore) {
      return this.setState({topScore: this.state.currentScore})
    }
  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <NavBar
        highScore={this.state.topScore}
        clickCount={this.state.currentScore}
      />

      <Wrapper>
        <Title>Try to click on each character, but don't hit any duplicates!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            clickCard={this.clickCard}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
