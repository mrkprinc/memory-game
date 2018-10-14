import React from "react";

class Scoreboard extends React.Component {
  componentDidUpdate(prevProps) {
    if(this.props.score !== prevProps.score) {
      document.getElementById('scoreBar-inner');
      console.log('change');
    }
  }

  render() {
    return (
    <div>
      <div id='msg'>Don't click the same image twice!</div>
      <div id='scoreBar-outer'>
        <div id='scoreBar-inner'></div>
        outer div
      </div>
    </div>
    )
  }
}

export default Scoreboard;