import React from 'react'

const LastTodo = (props) => {
    const { title, desc } = props.todo;
    const { id } = props;



    const handleClick = (id) => {
        props.onRemoveTodo(id)
    }

    return (
        <div className='MainBody'>
            <article className='todobody'>
                <div className='todoTextBody'>
                    <h3>{title}</h3>
                    <p>{desc}</p>
                </div>
                <div className='buttonbody' >
                    <button onClick={() => { handleClick(id) }}>Del</button>
                </div>
            </article>
        </div>
    )
}

export default LastTodo