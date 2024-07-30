import React, { ChangeEventHandler, FC } from 'react';

interface CheckboxProps {
    onChange: ChangeEventHandler<HTMLInputElement>;
}

const Checkbox: FC<CheckboxProps> = ({ onChange }) => {
    return (
        <input
            className="todo-list__checkbox"
            type="checkbox"
            onChange={onChange}
        />
    );
}

export default Checkbox;
