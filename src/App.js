
import Square from './components/Square';
import {  useState } from 'react';
import './App.css';

function App() {
  const [isPlayerOne, setIsPlayerOne] = useState(true);
  const [gameTable, setGameTable] = useState(
    [
    null,null,null,
    null,null,null,
    null,null,null
    ]);
  
  const handlePlayerChange = (val, num)=>{
    const arrTbl = [...gameTable];
    arrTbl[num] = val;
    setGameTable(arrTbl);
    setIsPlayerOne(!isPlayerOne);
    console.log(gameTable);
  }
  
  let tableNumber = 0;
  

  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div className={'table'}>
        <div className={'grid'}>
          {gameTable.map( sqr => (
            
            <Square
            key={tableNumber}
            tblNum ={tableNumber++}
            onChange={handlePlayerChange}
            turnBool={isPlayerOne}
            />
            ))}      
        </div>
      </div>
    </div>
  );
}

export default App;
