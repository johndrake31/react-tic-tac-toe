import React from "react";

function TicTacSquare(props) {
  const { turnBool, tblNum, onChange, tdVal } = props;

  const handleXO = () => {
    if (tdVal === null) {
      const value = turnBool ? "X" : "O";
      onChange(value, tblNum);
    }
  };

  return (
    <td onClick={handleXO} className={"square"}>
      {tdVal}
    </td>
  );
}

export default TicTacSquare;
