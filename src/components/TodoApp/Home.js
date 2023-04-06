import React, { useState } from 'react'
import { NewTodo } from './NewTodo';
import Todos from './Todos'
import './TodoModule.css';
import { v4 as uuidv4 } from "uuid"
// const NewTodos = [{
//     id: 1,
//     title: "todo title 1",
//     desc: "todo1 description is here ..."
// },
// {
//     id: 1,
//     title: "todo title 1",
//     desc: "todo1 description is here ..."
// },
// {
//     id: 1,
//     title: "todo title 1",
//     desc: "todo1 description is here ..."
// }];
const Home = () => {

    const [todos, setNewTodos] = useState([])
    const id = Date().toString()
    const handleNewData = (newData) => {
        setNewTodos((prev) => {
            return [...prev, { id: id, newData }]
        })
    }

    const handleRemoveTodo = (id) => {
        setNewTodos((prev) => {
            const filteredTodo = prev.filter((todo) => todo.id !== id);
            return filteredTodo;
        })
    }


    return (
        <div>
            <h1>Todo</h1>
            <NewTodo onTodo={handleNewData} />
            <Todos todos={todos} onRemoveTodo={handleRemoveTodo} />
        </div>
    )
}

export default Home