import './App.css';
import Player from './components/Player';
import GameBord from './components/GameBored';
import { useState } from 'react';
import Log from './components/Log';
import { COMBINITION } from './COMBINITION';
import GameOver from './components/GameOver';

const PLAYER = {
  X: "Player 1",
  O: "Player 2",
};
function DeriveActivePlayer(turnGame) {
    let currentTurn = 'X';
      
  if (turnGame.length > 0 && turnGame[0].player === "X") {
      currentTurn = 'O'
  }
    return currentTurn;
  }
function App() {
  const [playerName, setPlayerName] = useState(PLAYER);
const [turnGame , setTurnGame] = useState([])
  let activePlayer =  DeriveActivePlayer(turnGame)
  const initialGAmeBored = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
  let gameBorde = [...initialGAmeBored.map((array) => [...array])];
  let winner;
  for (const turn of turnGame) {
    const { square, player } = turn;
    const { col, row } = square
    
    gameBorde[col][row] = player;
  }
  for (const combinition  of COMBINITION) {
    let oneCobinition = gameBorde[combinition[0].row][combinition[0].col];
    let twoCobinition = gameBorde[combinition[1].row][combinition[1].col];
    let threeCobinition = gameBorde[combinition[2].row][combinition[2].col];
    
    if (oneCobinition && oneCobinition === twoCobinition && oneCobinition === threeCobinition) {
      winner = playerName[oneCobinition]
    }
  }
  let  hasDraw = turnGame.length === 9 && !winner;


  function handleActivePlayer(colIndex , rowIndex) {
    setTurnGame((prevTurns) => {
        const currentTurn = DeriveActivePlayer(prevTurns)
      const updateTurn =
        [{ square: { row: rowIndex, col: colIndex }, player: currentTurn }, ...prevTurns,];
      return updateTurn;
    });

  } 
  function handleName(symbole, newName) {
    setPlayerName((updateName) => {
      return {
        ...updateName,
        [symbole]: newName,
      }
    })
  }
  function RefrecheGame() {
    setTurnGame([]);
  }

  return (
    <>
      <menu>
        <div id='game-container'>
          <ol id='players' className='highlight-player'>
            <Player initialName="PLAYER 1" symbole={"X"} isActive={activePlayer === "X"} OnchangeName={handleName} />
              <Player initialName="PLAYER 2" symbole ={"O"} isActive={activePlayer === "O"} OnchangeName={handleName}/>
          </ol>
          {(winner || hasDraw) && <GameOver  winner={winner} onSelect={RefrecheGame}/>}
          <GameBord onSelectActive={handleActivePlayer} gameBorde={gameBorde} />
        </div>
          <Log turn={ turnGame} />
      </menu>
    </>
  )
}

export default App
