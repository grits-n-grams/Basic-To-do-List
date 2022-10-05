import './App.css'
import { useState } from 'react'

// Material-UI Imports
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import IconButton from '@mui/material/IconButton'
import Grid from '@mui/material/Grid'
import DeleteIcon from '@mui/icons-material/Delete'

function App() {
  const [tasks, setTasks] = useState(['Task 1', 'Task 2'])
  const [item, setItem] = useState('')

  function removeItem(taskName) {
    console.log('called')
    setTasks(tasks.filter((task) => task != taskName))
  }
  function addItem(e) {
    e.preventDefault()
    if (item != '' && !tasks.includes(item)) {
      
      let cache = tasks
      cache.push(item)
      setTasks(cache)
      setItem('')
    }
  }

  return (
    <div className="App">
      <Grid item xs={12} md={6}>
        <List>
          {tasks.map((task) => {
            return (
              <ListItem
                key={task}
                secondaryAction={
                  <IconButton
                    onClick={() => {
                      removeItem(task)
                    }}
                    edge="end"
                    aria-label="delete"
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={task} />
              </ListItem>
            )
          })}
        </List>
      </Grid>
      <form action="submit" onSubmit={addItem}>

      <input
        placeholder="Task"
        type="text"
        value={item}
        onChange={(e) => {
          setItem(e.target.value)
        }}
      />
      <button onClick={addItem}>ADD ITEM</button>
      </form>
    </div>
  )
}

export default App
