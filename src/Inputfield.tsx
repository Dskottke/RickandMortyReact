import React, {useState} from 'react';

function Inputfield() {



    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }



}


export default Inputfield;