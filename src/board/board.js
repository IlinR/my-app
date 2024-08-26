import React from 'react';
import ReactDOM from 'react-dom/client';
import "./board.css"

class Square extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      value : "free"
    }
  }
    render() {
      return (
        <div className="square" 
            onMouseEnter={()=> {if (this.state.value == "free") this.setState({value: "wall"})}} 
            onMouseLeave={()=> {if (this.state.value == "wall") this.setState({value: "free"})}}>
        </div>
      );
    }
  }
  
  class Board extends React.Component {
    renderSquare(i,j) {
      return <Square key={"s" + i + "r" + j} />;
    }
    renderRow(j,l) {
      const row = [];
      for (let index = 0; index < l; index++) {
        row.push( this.renderSquare(index,j));
      }
      return <div className='row' key={j}>{row}</div>
    }
    render(n = 4) {
      const row = [];
      for (let index = 0; index < n; index++) {
        row.push( this.renderRow(index,3));
      }
      return <div className='board'>{row}</div>
    }
  }
  
  class Game extends React.Component {
    render() {
      return (
        <div className="game">
          <div className="game-board">
            <Board />
          </div>
          <div className="game-info">
            <div>{/* status */}</div>
            <ol>{/* TODO */}</ol>
          </div>
        </div>
      );
    }
  }
  
  // ========================================
  
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Game />);

  export default Board;
  