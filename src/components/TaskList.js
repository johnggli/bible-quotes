import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot } from 'firebase/firestore'
import { db } from '../services/firebase'

function TaskList() {

  const [tasksLoading, setTasksLoading] = useState(true)
  const [tasks, setTasks] = useState([])

  /* function to get all tasks from firestore in realtime */ 
  useEffect(() => {
    let isMounted = true;
    const taskColRef = query(collection(db, 'tasks'), orderBy('created', 'desc'))
    onSnapshot(taskColRef, (snapshot) => {
      if (isMounted) setTasks(snapshot.docs.map(doc => ({
        id: doc.id,
        data: doc.data()
      })))
      if (isMounted) setTasksLoading(false)
    })
    return () => { isMounted = false } // cleanup toggles value, if unmounted
  },[])

  let taskList;
  if (tasksLoading) {
    taskList = <div className='TaskList-empty'>Loading...</div>;
  } else if (tasks.length) {
    taskList = (
      <ul className='TaskList'>
        {tasks.map(task => (
          <div key={task.id} className='qsresult'>
            <div className='qsquote'>
              <span className='qreslnk'>
                {task.data.text}
              </span>
              <div className='qscontrols'>
                <button className='likeq'>
                  <i className='fa fa-heart-o'></i>
                  <span className='owl-likes like-count'>12</span>
                </button>
              </div>
            </div>
          </div>
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
