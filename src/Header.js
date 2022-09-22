import React from 'react'
import './style.css'
import Title from './Title'
import SearchTodo from './SearchTodo'

function Header(){
    return (
        <header className="my-5 text-center text-light">
            <Title />
            <SearchTodo />
        </header>
    )
}

export default Header