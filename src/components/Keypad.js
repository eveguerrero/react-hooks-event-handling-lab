// Code Keypad Component Here
import React from 'react'

function Keypad(){
    function pass(){
        return console.log('Entering password...')
    }
return (
<input type="password"  onChange={pass}/>
)}

export default Keypad;