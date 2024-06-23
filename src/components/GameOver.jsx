/* eslint-disable react/prop-types */
export default function GameOver({winner , onSelect}) {
    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner && <p>You Win {winner}</p>}
            {!winner && <p>it&apos;s Draw</p>}
            <button onClick={onSelect}>Refreche</button>
        </div>
    )
}