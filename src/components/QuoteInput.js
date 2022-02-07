import { useState } from 'react'
import { db } from '../services/firebase'
import { collection, addDoc, Timestamp } from 'firebase/firestore'

function QuoteInput() {

  const [text, setText] = useState('')

  /* function to add new quote to firestore */
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
        onChange={(e) => setText(e.target.value)}
        value={text}
        type='text'
        placeholder='Add a new quote...'
        required
      />
    </form>
  )
}

export default QuoteInput
