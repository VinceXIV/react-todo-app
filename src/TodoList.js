import React from 'react'

function TodoList(){
    return (
        <ul className="list-group todos mx-auto">
            <li className="list-group-item text-light d-flex justify-content-between align-items-center">
                <span>Listen to Music</span>
                <i className="fas fa-trash-alt"></i>
            </li>
            <li className="list-group-item text-light d-flex justify-content-between align-items-center">
                <span>Drink coffee</span>
                <i className="fas fa-trash-alt"></i>
            </li>
            <li class="list-group-item text-light d-flex justify-content-between align-items-center">
                <span>Play Chess</span>
                <i className="fas fa-trash-alt"></i>
            </li>
        </ul>        
    )
}

export default TodoList