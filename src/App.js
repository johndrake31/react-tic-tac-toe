
import Square from './components/Square';
import { useState } from 'react';
import './App.css';

function App() {
  const win = ["012", "345", "678", "036", "147", "258", "048", "246"];
  let tableNumber = 0;

  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [playerOneSqs, setPlayerOneSqs] = useState([]);
  const [playerTwoSqs, setPlayerTwoSqs] = useState([]);
  const [gameTable, setGameTable] = useState(
    [
      null, null, null,
      null, null, null,
      null, null, null
    ]);

  const handlePlayerChange = (val, num) => {
    const arrTbl = [...gameTable];
    arrTbl[num] = val;

    if (isPlayerOne) {
      const arrPlayer1 = [...playerOneSqs];
      arrPlayer1.push(num);   
      setPlayerOneSqs(()=>{
        return arrPlayer1;
      })
      handleWinner(arrPlayer1);
    }else{
      const arrPlayer2 = [...playerTwoSqs];
      arrPlayer2.push(num); 
      setPlayerTwoSqs(()=>{
        return arrPlayer2;
      })
      handleWinner(arrPlayer2);
    }

    setGameTable(() => {
      return arrTbl
    });
    setIsPlayerOne(()=>!isPlayerOne);
  }

  const handleWinner=(player)=> {
    for (var i = 0; i < 8; i++) {
        let won = win[i]
        let inCommon = player.filter(x => won.includes(x));
        if (inCommon.length === 3) {
          isPlayerOne ? console.log("playerone win") : console.log('player2 win');
          // endGameEvaluation();
        }
    }
}
  const handleReset = () => {
    const newBoard = [null, null, null, null, null, null, null, null, null];
    setGameTable(()=> {
      return newBoard
    })
  }



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
