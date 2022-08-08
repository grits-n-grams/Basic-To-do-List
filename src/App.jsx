import './App.css'
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState(['1', '2'])
  const [item, setItem] = useState('')

  function removeItem(taskName) {
    setTasks(tasks.filter((task) => task != taskName))
  }
  function addItem() {
    if (item != '' && !tasks.includes(item)) {
      let cache = tasks
      cache.push(item)
      setTasks(cache)
      setItem('')
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'enter') {
      console.log('enter has been pressed')
      addItem()
    }
  }
  return (
    <div className="App">
      <ul>
        {tasks.map((task) => {
          return <li key={task}>{task}</li>
        })}
      </ul>
      <input
        placeholder="task"
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value)
        }}
      />
      <button onClick={addItem}>ADD ITEM</button>
    </div>
  )
}

export default App
