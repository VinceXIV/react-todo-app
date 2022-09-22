import React from 'react'

function TodoList({currentTodos}){
    console.log("from todolist: ", currentTodos)

    const todoList = currentTodos.map(item => {
        return (
            <li className="list-group-item text-light d-flex justify-content-between align-items-center" key={item.id}>
                <span>{item.todo}</span>
                <i className="fas fa-trash-alt"></i>
            </li>            
        )
    })

    console.log("todo list items: ", todoList)


    return (
        <ul className="list-group todos mx-auto">
            {todoList}
        </ul>        
    )
}

export default TodoList