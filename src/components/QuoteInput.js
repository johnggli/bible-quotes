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
        addDoc(collection(db, 'users', user.email, 'quotes'), {
          text: text,
          topic: topic,
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
        <option value='blessing'>blessing</option>
        <option value='commandments'>commandments</option>
        <option value='consolation'>consolation</option>
        <option value='death'>death</option>
        <option value='faith'>faith</option>
        <option value='forgiveness'>forgiveness</option>
        <option value='friendship'>friendship</option>
        <option value='gratitude'>gratitude</option>
        <option value='health'>health</option>
        <option value='hope'>hope</option>
        <option value='judgment'>judgment</option>
        <option value='love'>love</option>
        <option value='marriage'>marriage</option>
        <option value='money'>money</option>
        <option value='motivation'>motivation</option>
        <option value='prayer'>prayer</option>
        <option value='promises'>promises</option>
        <option value='purity'>purity</option>
        <option value='repentance'>repentance</option>
        <option value='salvation'>salvation</option>
        <option value='wisdom'>wisdom</option>
      </select>

      <button type='submit'>Submit</button>

    </form>
  )
}

export default QuoteInput
