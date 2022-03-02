import { useState } from 'react'
import { db } from '../services/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useAuth0 } from '@auth0/auth0-react'

function QuoteInput() {

  const { user, isAuthenticated } = useAuth0()
  const [text, setText] = useState('')
  const [topic, setTopic] = useState('')

  /* function to add new text to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      alert('You must be logged in to post a quote.')
    } else {
      try {
        addDoc(collection(db, 'quotes'), {
          text: text,
          topic: topic,
          users: [],
          likes: 0,
          author: user.email,
          // checked: false,
          // starred: false,
          created: Timestamp.now()
        })
        setText('');
      } catch (err) {
        alert(err)
      }
    }
  }

  return (
    <form onSubmit={handleSubmit} className='quote-input'>

      <input
        type='text'
        placeholder='Enter quote'
        value={text}
        onChange={(e) => setText(e.target.value)}
        required
      />

      <select
        className='topics-select'
        name='topics'
        onChange={(e) => setTopic(e.target.value)}
        required
      >
        <option value=''>topic</option>
        <option value='love'>love</option>
        <option value='death'>death</option>
        <option value='faith'>faith</option>
        <option value='encouragement'>encouragement</option>
      </select>

      <button type='submit'>Submit</button>

    </form>
  )
}

export default QuoteInput
