import React from 'react'
import LastTodo from './LastTodo';

const Todos = (props) => {

    return (
        <div>
            {props.todos.map((todo) => <LastTodo todo={todo.newData} key={todo.id} id={todo.id} onRemoveTodo={props.onRemoveTodo} />)}

        </div>
    );
}

export default Todos