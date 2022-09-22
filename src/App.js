import React, {useState} from 'react'
import './style.css'
import Header from './Header'
import TodoList from './TodoList'
import AddTodo from './AddTodo'

function App(){

    const myTodos =         [
        {id: 1, todo: "complete today's content"},
        {id: 2, todo: "discuss content with group members"},
        {id: 3, todo: "complete an article in my personal blog"}
    ]

    const [todos, setTodos] = useState(myTodos)
    const [newId, setNewId] = useState(4)

    function createTodoObject(todoStr){
        setNewId(newId + 1)
        return {
            id: newId,
            todo: todoStr
        }
    }

    function filterTodos(inputWord){
        const value = inputWord.target.value

        if(!value){
            setTodos(myTodos)
        }else {
            const newTodos = todos.filter(item => {
                return item.todo.includes(value)
            })
            setTodos(newTodos)
        }

    }

    function deleteTodo(todoItem){
        const value = todoItem.target.parentElement.textContent
        const newTodos = todos.filter(todoObject => {return todoObject.todo !== value})
        setTodos(newTodos)
    }

    function addTodo(inputTodo){
        inputTodo.preventDefault()
        const newTodo = inputTodo.target.querySelector("#new-todo").value
        
        const newTodos = [...todos, createTodoObject(newTodo)]
        setTodos(newTodos)

        inputTodo.target.reset()
    }

    return (
        <div className='container'>
            <Header onFilterTodos={filterTodos}/>
            <TodoList currentTodos={todos} deleteTodo={deleteTodo}/>
            <AddTodo onAddTodo={addTodo}/>
        </div>        
    )
}

export default App