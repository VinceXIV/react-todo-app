import React from 'react'

function TodoList({currentTodos, deleteTodo}){
    const todoList = currentTodos.map(item => {
        return (
            <li className="list-group-item text-light d-flex justify-content-between align-items-center" key={item.id}>
                <span>{item.todo}</span>
                <i className="fas fa-trash-alt" onClick={deleteTodo}></i>
            </li>            
        )
    })

    return (
        <ul className="list-group todos mx-auto">
            {todoList}
        </ul>        
    )
}

export default TodoList