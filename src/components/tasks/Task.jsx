import React from 'react'

const Task = () => {
    

  return (
         <ul className="allTodos">
      {todos.map((t, index) => (
        <li className="singleTodo">
          <div
            key={index}
            className={t.isComplete ? "inlist" : "inlist-line"}
          >
            <span className="todoText" onClick={() => completeTodo(t.id)} key={t.id}>
              {t.todo}
            </span>
            <span className="todoDate">{t.date}</span>
          </div>
          <button className="btn-delete" onClick={() => handleDelete(t.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  )
}

export default Task