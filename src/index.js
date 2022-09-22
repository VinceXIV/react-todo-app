import React from 'react'
import ReactDOM from 'react-dom'
import './style.css'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

ReactDOM.render(
        <div className='container'>
            <Header />
            <TodoList />
            <AddTodo />
        </div>
        , document.querySelector('body')
    )