import React from "react";

class Scoreboard extends React.Component {
  componentDidUpdate(prevProps) {
    if(this.props.score !== prevProps.score) {
      let fullWidth = document.getElementById('scoreBoard').clientWidth;
      document.getElementById('scoreBar').style.width = `${fullWidth * this.props.score / 9}px`;
    }
  }

  render() {
    return (
    <div id='scoreBoard'>
      <div id='msg'>Don't click the same image twice!</div>
      <div id='scoreBar'></div>
    </div>
    )
  }
}

export default Scoreboard;