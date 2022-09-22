import React from 'react'
import './style.css'

function SearchTodo({onFilterTodos}){
    return (
        <form className="search">
            <label className="text-light my-3">Search Todos</label>
             <input className="form-control m-auto" type="text" name="searchTodo" id="text" onChange={onFilterTodos}></input>
        </form>
    )
}

export default SearchTodo