/* eslint-disable react/prop-types */

export default function GameBord({ onSelectActive , gameBorde}) {
    
    return (
        <ol id="game-board">
            {gameBorde.map((ele, rowIndex) => <li key={rowIndex}>
                <ol>
                    {ele.map((symbole, colIndex) => <li key={colIndex}>
                        <button onClick={() => onSelectActive(rowIndex, colIndex)} disabled ={symbole !== null}>{symbole}</button></li>)}
                </ol>
            </li>)}
        </ol>
    )
}