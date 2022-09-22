import React, {useState} from 'react'
import './style.css'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App(){
    const [todos, setTodos] = useState(
        [
            {id: 1, todo: "Complete Today's Content"},
            {id: 2, todo: "Discuss content with group members"},
            {id: 3, todo: "Complete an article in my personal blog"}
        ]
    )

    return (
        <div className='container'>
            <Header />
            <TodoList currentTodos={todos}/>
            <AddTodo />
        </div>        
    )
}

export default App