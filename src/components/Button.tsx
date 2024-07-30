import React, { FC, ReactNode } from 'react';

// Define the interface for the component's props
interface ButtonProps {
    children: ReactNode;
}

const Button: FC<ButtonProps> = ({ children }) => {
    return (
        <button className="todo-controls__button">{children}</button>
    )
}

export default Button;
