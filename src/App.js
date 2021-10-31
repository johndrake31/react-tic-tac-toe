
import Square from './components/Square';
import { useState } from 'react';
import './App.css';

function App() {
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [gameTable, setGameTable] = useState(
    [
      null, null, null,
      null, null, null,
      null, null, null
    ]);

  const handlePlayerChange = (val, num) => {
    const arrTbl = [...gameTable];
    arrTbl[num] = val;
    setGameTable(() => {
      return arrTbl
    });
    setIsPlayerOne(()=>!isPlayerOne);
  }

  const handleReset = () => {
    const newBoard = [null, null, null, null, null, null, null, null, null];
    setGameTable(()=> {
      return newBoard
    })
  }

  let tableNumber = 0;


  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <h1>Morpion</h1>
          <div id="result"></div>
          <table className="table-style">

            <tbody>
              <tr>
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />
              </tr>
              <tr>
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />

                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />
              </tr>
              <tr>
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />
                <Square
                  key={tableNumber}
                  tdVal={gameTable[tableNumber]}
                  tblNum={tableNumber++}
                  onChange={handlePlayerChange}
                  turnBool={isPlayerOne}
                />
              </tr>
            </tbody>
          </table>
          <button
            onClick={() => handleReset()}
            id="new-game">
            New Game
          </button>
          <div id="player-turn"></div>
          <div id="p1"></div>
          <div id="p2"></div>
          <div id="total"></div>
          <div id="root">
            <div id="resultMessage"></div>

          </div>




        </div>
      </div>
    </div>
  );
}

export default App;
