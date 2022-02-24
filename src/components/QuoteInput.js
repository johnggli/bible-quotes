import { useState } from 'react'
import { db } from '../services/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'
import { useAuth0 } from '@auth0/auth0-react'

function QuoteInput() {

  const { user, isAuthenticated } = useAuth0()
  const [text, setText] = useState('')

  /* function to add new text to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      alert('You need to login.')
    } else {
      try {
        addDoc(collection(db, 'quotes'), {
          text: text,
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
      <button type='submit'>Submit</button>
    </form>
  )
}

export default QuoteInput
