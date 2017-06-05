let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const incrementCounter = () => {
  return {
    type: 'INCREMENT'
  }
}

export const decrementCounter = () => {
  return {
    type: 'DECREMENT'
  }
}