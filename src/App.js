import React, { Component } from 'react';
import Card from "./components/Card";
import images from "./images.json";

class App extends Component {
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
          {images.map((image, i) => {
            return (<Card 
              frontText='here is the front' 
              backText='here is the back' 
              index={i} 
              handleClick={this.handleClick}>
                {this.props.children}
              </Card>)
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
