import React from 'react'

function SearchTodo(){
    return (
        <form className="search">
            <label className="text-light my-3">Search Todos</label>
             <input className="form-control m-auto" type="text" name="searchTodo" id="text"></input>
        </form>
    )
}

export default SearchTodo