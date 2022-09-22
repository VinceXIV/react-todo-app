import React from 'react'

function AddTodo(){
    return (
        <form className="add text-center">
            <label className="text-light my-3 mb-10">
                Add todo...
            </label>
            <input className="form-control" type="text" name="newTodo" id="new-todo"></input>
        </form>        
    )
}

export default AddTodo