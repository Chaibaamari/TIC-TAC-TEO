/* eslint-disable no-unused-vars */
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Player({ initialName, symbole, isActive ,OnchangeName}) {
    const [playerName , setPlayerName]= useState(initialName)
    const [isEditing, setisEditing] = useState(false);
    function PlayGame() {
        // setisEditing(!isEditing); this not the best practice  
        setisEditing((editing) => !editing);
    }
    function handleChang(event) {
        setPlayerName(event.target.value)
        if (isEditing) {
            OnchangeName(symbole, playerName)
        }
    }
    let transferes = <span id='name-player'>{playerName}</span>
    let btnPlay = "Edit";
    if (isEditing) {
        transferes = <input className="input-player" type="text" value={playerName} onChange={handleChang} />
        btnPlay="Save"
    }
    return (
        <li className={isActive ? "active" : undefined}>
            <span id='player'>
                {transferes}
                <span id='symbole-player'>{symbole}</span>
                <button id="btn" onClick={PlayGame}>
                    {btnPlay}
                </button>
            </span>
        </li>
    );
}


//  values means show the value shown in this input 