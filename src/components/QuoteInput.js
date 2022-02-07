import { useState } from 'react'
import { db } from '../services/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function QuoteInput() {

  const [text, setText] = useState('')

  /* function to add new text to firestore */
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      addDoc(collection(db, 'quotes'), {
        text: text,
        // checked: false,
        // starred: false,
        created: Timestamp.now()
      })
      setText('');
    } catch (err) {
      alert(err)
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
