import React from 'react'

const AddTask = ({handleSubmit, todo, setTodo , date, setDate}) => {
  return (
    <div className='todoform' onSubmit={handleSubmit}>
    <label htmlFor=""> Task</label><br />
    <input className='task'  placeholder='AddTask' type="text" value={todo} onChange={(e) => setTodo(e.target.value)} /><br />
    <label htmlFor="">Day & Time</label><br />
    <input className='date' type="date" value={date} onChange={(e) => setDate(e.target.value)} /> <br /><br />
    <button className='btn-submit'>Save Task</button>
    </div>
  )
}

export default AddTask