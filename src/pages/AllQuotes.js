import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList'
import TopPhoto from '../components/TopPhoto'

function AllQuotes() {
  return (
    <div className='container'>
      <div className='content'>
        <TopPhoto />
        <TaskInput />
        <TaskList />
      </div>
    </div>
  )
}

export default AllQuotes
