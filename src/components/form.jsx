import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Form = (props) => {

    const search = ['people', 'planets'];

    const [input, setInput] = useState(search);
    const [id, setId] = useState(1);

    const navigate = useNavigate();

    const submitInfo = ((e) => {
        e.preventDefault();
        // console.log(id, search)
        navigate(`/${input}/${id}`)

    })
    return (
        <form onSubmit={submitInfo}>
            {/* {JSON.stringify(input)} */}
            Search for: <select  onChange={(e) => setInput(e.target.value)}>
            {
                search.map((el, idx) =>
                    <option key={idx} value={el}>{el}</option>
                )
            }
            </select>
        ID: <input type="number" onChange={(e) => setId(e.target.value)} value={id}/>
        <button>Search</button>
    </form >
    )
}

export default Form