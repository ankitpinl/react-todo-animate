import React, { forwardRef, Ref } from 'react'

// Define the props type
interface InputProps {
    placeholder?: string;
    className?: string;
    type?: string;
}

// Update the Input component with forwardRef
const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <input
            ref={ref as Ref<HTMLInputElement>}
            className="todo-controls__input"
            placeholder="Add a todo"
            type="text"
            {...props} // Spread the props to support additional props
        />
    )
})

export default Input;