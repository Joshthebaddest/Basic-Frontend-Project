import React, { useReducer } from 'react'
import { form_state, formReducer } from '../reducers/authReducers'
import { useStateContext } from '../context/context'

function Forms({ name, placeholder, text, margin }) {
    const { formState, formDispatch } = useStateContext()
    const handleChange = (e) => {
        const { name, value } = e.target
        formDispatch({ type: "INPUT_CHANGE", payload: {name, value} })
    }

    return (
        <input className={`${margin} p-2 outline-none border-b ${text} bg-transparent border-black w-full`} type="text" name={name} id="" placeholder={placeholder} onChange={handleChange}/>
        
    )
}

export default Forms