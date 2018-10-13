import React, { Component } from 'react';
import Card from "./components/Card";
import images from "./images.json";

class App extends Component {
  state = {
    score: 0,
    front: [],
    back: [],
    order: [0, 1, 2, 3, 4, 5, 6, 7, 8]
  };

  handleClick(e) {
    document.querySelectorAll('.card').forEach(element => {
      element.classList.toggle('flip');
    })
  }

  render() {
    return (
      <main className='center'>
        <header>Memory Game</header>

        <section id='cards'>
          {this.state.order.map((shuffledIndex, i) => {
            return (<Card 
              frontImgId={i}
              backImgId={shuffledIndex} 
              index={i} 
              key={images[shuffledIndex].id}
              handleClick={this.handleClick}>
                {this.props.children}
              </Card>
            )
          })}
        </section>
        
        <section id='scoreboard'>
          Scores go here...
        </section>
      </main>
    );
  }
}

export default App;
