import React, { useRef, useState } from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import Checkbox from './components/Checkbox';
import { v4 as uuid } from 'uuid';
//import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { motion, AnimatePresence } from 'framer-motion';

// Define the type for a todo item
interface TodoItem {
    text: string;
    id: string;
}

function App() {
    const todoItem = useRef<HTMLInputElement>(null);
    const [todos, setTodos] = useState<TodoItem[]>([]);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        if (todoItem.current) {
            const newTodo = { text: todoItem.current.value, id: uuid() };
            setTodos((prevState: TodoItem[]) => {
                return [newTodo, ...prevState];
            });
            todoItem.current.value = '';
        }
    };

    const todoRemove = (id: string) => {
        const updatedTodos = todos.filter(item => item.id !== id);
        setTodos(updatedTodos);
    };

    return (
        <div className="container">
            <h1 className="todo-heading">To-dos</h1>
            <div className="todo-controls">
                <form onSubmit={handleSubmit}>
                    <Input ref={todoItem} />
                    <Button>Add</Button>
                </form>
            </div>
            {/* <TransitionGroup component="ul" className="todo-list">
                {todos.map((todo) => (
                    <CSSTransition key={todo.id} timeout={500} classNames="new-todo">
                        <li className="todo-list__item">
                            <span>{todo.text}</span>
                            <Checkbox onChange={() => todoRemove(todo.id)} />
                        </li>
                    </CSSTransition>
                ))}
            </TransitionGroup> */}
            <ul className="todo-list">
                <AnimatePresence>
                    {todos.map((todo) => (
                        <motion.li
                            key={todo.id}
                            initial={{ x: -1000 }}
                            animate={{ x: 0 }}
                            exit={{ x: -1000 }}
                            transition={{ duration: 0.5 }}
                            className="todo-list__item"
                        >
                            <span>{todo.text}</span>
                            <Checkbox onChange={() => todoRemove(todo.id)} />
                        </motion.li>
                    ))}
                </AnimatePresence>
            </ul>


        </div>
    );
}

export default App;
