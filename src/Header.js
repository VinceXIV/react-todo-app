import React from 'react'
import './style.css'
import Title from './Title'
import SearchTodo from './SearchTodo'

function Header({onFilterTodos}){
    return (
        <header className="my-5 text-center text-light">
            <Title />
            <SearchTodo onFilterTodos={onFilterTodos}/>
        </header>
    )
}

export default Header