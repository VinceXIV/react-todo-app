import React from 'react'
import './style.css'

function AddTodo({onAddTodo}){
    return (
        <form className="add text-center" onSubmit={onAddTodo}>
            <label className="text-light my-3 mb-10">
                Add todo...
            </label>
            <input className="form-control" type="text" name="newTodo" id="new-todo"></input>
        </form>        
    )
}

export default AddTodo