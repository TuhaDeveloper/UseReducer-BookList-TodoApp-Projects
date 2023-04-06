import React, { useState } from 'react'

export const NewTodo = (props) => {


    const [first, setfirst] = useState({ title: '', desc: '' })

    const { title, desc } = first;

    const handleChange = (e) => {
        const name = e.target.name;
        setfirst((oldTodo) => {
            return { ...oldTodo, [name]: e.target.value }
        })
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        props.onTodo(first)
        setfirst({ title: '', desc: '' });

    }

    return (

        <form onSubmit={handleSubmit}>
            <label htmlFor='todo'>Todo :</label>
            <input type="text" name='title' id='todo' value={title} placeholder='Add Todo' onChange={handleChange} />
            <label htmlFor='todo'>Description :</label>
            <input type="text" name='desc' id='todo' value={desc} placeholder='Add description' onChange={handleChange} />
            <button type='submit'>add</button>
        </form>
    )
}
