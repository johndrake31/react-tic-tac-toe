import React, { useState } from 'react';

function TicTacSquare(props) {
    const [isXorO, setIsXorO] = useState(null);
    const {turnBool, tblNum, onChange } = props;

    const handleXO = ()=>{
        if(isXorO === null){
           const value = turnBool ? "X" : "O"
            setIsXorO(value);
            onChange(value, tblNum);
        }
    }
    
    return ( 
       <div onClick={handleXO} className={'square'}>
            <h1>{isXorO}</h1>
       </div>
     );
}

export default TicTacSquare;