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

  //  clickPhoto = id => {
  //    let clicked = this.state.clicked;

  //  }
  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
      <NavBar
        highScore={this.state.highScore}
        clickCount={this.state.clickCount}
      />

      <Wrapper>
        <Title>Try to click on each character, but don't hit any duplicates!</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
