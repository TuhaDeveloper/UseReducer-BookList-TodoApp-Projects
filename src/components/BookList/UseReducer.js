import React, { useState, useReducer } from 'react'

const BooksData = [
    // { id: 1, name: "jahidul islam books" },
    // { id: 2, name: "arafat hossain books" },
    // { id: 3, name: "yeamin hossain borhan" }
]

const reducer = (state, action) => {

    if (action.type === "ADD") {
        const allBooks = [...state.book, action.payload];

        return {
            ...state,
            book: allBooks,
            isModalOpen: true,
            modalText: 'Book is added'
        }
    }
    if (action.type === "REMOVE") {
        const filterItem = [...state.book].filter(book => book.id !== action.payload)

        return {
            ...state,
            book: filterItem,
            isModalOpen: true,
            modalText: 'Book is Removed'
        }
    }

    return state;

}

const Modal = ({ modalText }) => {
    return <p>{modalText}</p>
}

// =========== this is useReducer component ===============
const UseReducer = () => {

    const [bookData, dispatch] = useReducer(reducer, {
        book: BooksData,
        isModalOpen: false,
        modalText: ''
    })
    const [BookName, setNewBook] = useState('')

    const handleRemove = (id) => {
        dispatch({ type: "REMOVE", payload: id })

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const NewBook = { id: new Date().getTime().toString(), name: BookName }
        dispatch({ type: "ADD", payload: NewBook })
        setNewBook('');
    }

    return (
        <div>
            <h3>Books List</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' value={BookName} onChange={(e) => { setNewBook(e.target.value) }} />
                <button type='submit'>Add</button>
            </form>

            {bookData.isModalOpen && <Modal modalText={bookData.modalText} />}

            {bookData.book.map((book) => {
                const { id, name } = book;
                return <li key={id}>{name} <button onClick={() => { handleRemove(id) }}>Del</button></li>
            })}
        </div>
    )
}

export default UseReducer