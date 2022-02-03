import {useState} from 'react'
import {db} from './firebase'
import {collection, addDoc, Timestamp} from 'firebase/firestore'

function TaskInput() {

  const [text, setText] = useState('')

  /* function to add new task to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      addDoc(collection(db, 'tasks'), {
        text: text,
        checked: false,
        starred: false,
        created: Timestamp.now()
      })
      setText('');
    } catch (err) {
      alert(err)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='TaskInput'>
      <input
        onChange={(e) => setText(e.target.value)}
        value={text}
        type='text'
        placeholder='Add a new task...'
        required
      />
    </form>
  )
}

export default TaskInput
