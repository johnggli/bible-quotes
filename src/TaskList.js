import {useState, useEffect} from 'react'
import {collection, query, orderBy, onSnapshot} from 'firebase/firestore'
import {db} from './firebase'

function TaskList() {

  const [tasksLoading, setTasksLoading] = useState(true)
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
      setTasksLoading(false)
    })
  },[])

  let taskList;
  if (tasksLoading) {
    taskList = <div className='TaskList-empty'>Loading...</div>;
  } else if (tasks.length) {
    taskList = (
      <ul className='TaskList'>
        {tasks.map(task => (
          <h4 key={task.id}>{task.data.text}</h4>
        ))}
      </ul>
    );
  } else {
    taskList = <div className='TaskList-empty'>No Tasks</div>;
  }

  return (
    <>{taskList}</>
  )
}

export default TaskList
