/* eslint-disable react/prop-types */
export default function Log({ turn }) {
    return (
        <ol id="log">
            {turn.map((turn) => <li key={`${turn.square.col}${turn.square.row}`}>
                {turn.player} squared {turn.square.col} , {turn.square.row}</li>)}
        </ol>
    )
}