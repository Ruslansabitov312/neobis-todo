import React, { useState } from 'react'
import Todo from './Todo'
import TodoForm from './TodoForm'

function TodoList() {
  const [todos, setTodos] = useState([])

  // Добавить туду
  const addTodo = (todo) => {
    if (!todo.text || /ˆ\s*/.test(todo.text)) {
      alert('Please, enter correct information!')
      return
    }

    const newTodos = [todo, ...todos]

    setTodos(newTodos)
  }

  // Изменить туду
  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /ˆ\s*/.test(newValue.text)) {
      alert('Please, enter correct information!')
      return
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    )
  }

  // Удалить туду
  const removeTodo = (id) => {
    const removeArr = [...todos].filter((todo) => todo.id !== id)

    setTodos(removeArr)
  }

  // Отправить туду в неактивный
  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete
      }
      return todo
    })
    setTodos(updatedTodos)
  }

  return (
    <div className='todo-list'>
      <h1 className='todo-list__title'>What's the plan for today?</h1>
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </div>
  )
}

export default TodoList
