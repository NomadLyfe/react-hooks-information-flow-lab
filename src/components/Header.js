import React from 'react';


function Header({ onDarkModeClick, mode }) {
    console.log(mode)
    function clickHandler() {
        
        onDarkModeClick();
    }
    return (
        <header>
            <h2>Shopster</h2>
            <button onClick={clickHandler}>
                {mode ? "Dark" : "Light"} Mode
            </button>
        </header>
    )
}


export default Header;