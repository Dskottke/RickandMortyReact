import React, {useState} from 'react';

function Inputfield(props:{name:string}) {

    const [name, setName] = useState("");

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();
        alert(`The name you entered was: ${name}`)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <input type="submit" />
        </form>
    )

}

export default Inputfield;