import React from 'react'

export const TextInput = ({name, type, placeholder, state}) => {

    const InputHandler = ({ target }, state) => {
        const {value, name} = target;
    
        state((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    
    return(
        <input className='my-4 inputDesign'
            type={type}
            placeholder={placeholder}
            name={name}
            onChange={(e) => InputHandler(e, state)}
        />
    )
}