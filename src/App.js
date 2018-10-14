import React, { Component } from 'react';
import Card from "./components/Card";
import Scoreboard from "./components/Scoreboard";
import images from "./images.json";

class App extends Component {
  state = {
    score: 0,
    guessed: {},
    front: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    back: [8, 7, 6, 5, 4, 3, 2, 1, 0]
  };

  handleClick = e => {
    const clickedImg = e.target.getAttribute('data-imgId');
    if(this.state.guessed[clickedImg]) {
      this.badClick();
    } else {
      this.setState(prevState => {
        prevState.guessed[clickedImg] = true;
        prevState.score++;
        return {guessed: prevState.guessed, score: prevState.score};
      })
    }
    this.shuffleBackSide();
    this.flipCards();
    console.log(this.state);
  }

  shuffleBackSide() {
    const backSide = document.querySelector('.card').classList.contains('flip') ? 'front' : 'back';
    this.setState({[backSide]: this.shuffleArray()});
  }

  badClick() {
    // TEMP
    console.log('bad click!');
  }

  shuffleArray() {
    let arr = [0, 1, 2, 3, 4, 5, 6 ,7, 8];
    for(let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  flipCards() {
    document.querySelectorAll('.card').forEach(element => {
      element.classList.toggle('flip');
    })
  }

  render() {
    let cards = [];
    for(let i=0; i<images.length; i++) {
      let card = (<Card 
        index={i}
        key={i}
        frontImgIndex={this.state.front[i]}
        backImgIndex={this.state.back[i]}
        handleClick={this.handleClick}
      />)
      cards.push(card);
    }
    return (
      <main className='center'>
        <header>Memory Game</header>

        <section id='cards'>
          {cards}
        </section>
        
        <section id='scoreboard'>
          <Scoreboard score={this.state.score} />
        </section>
      </main>
    );
  }
}

export default App;
