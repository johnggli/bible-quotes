import { useState, useEffect } from 'react'
import { collection, query, orderBy, onSnapshot, updateDoc, doc, arrayUnion, arrayRemove, increment, deleteDoc } from 'firebase/firestore'
import { db } from '../services/firebase'
import { useAuth0 } from '@auth0/auth0-react'

function QuoteList() {

  const { user, isAuthenticated, isLoading } = useAuth0()
  const [quotesLoading, setQuotesLoading] = useState(true)
  const [quotes, setQuotes] = useState([])

  /* function to like a quote */
  function likeQuote(quoteId) {
    if (!isAuthenticated) {
      alert('You need to login.')
    } else {
      try {
        updateDoc(doc(db, 'quotes', quoteId), {
          users: arrayUnion(user.email),
          likes: increment(1),
        })
      } catch (err) {
        alert(err)
      }
    }
  }

  /* function to dislike a quote */
  function dislikeQuote(quoteId) {
    try {
      updateDoc(doc(db, 'quotes', quoteId), {
        users: arrayRemove(user.email),
        likes: increment(-1),
      })
    } catch (err) {
      alert(err)
    }
  }

  /* function to delete a quote */
  function deleteQuote(quoteId) {
    try {
      deleteDoc(doc(db, 'quotes', quoteId))
    } catch (err) {
      alert(err)
    }
  }

  /* function to get all quotes from firestore in realtime */ 
  useEffect(() => {
    let isMounted = true

    const quotesRef = query(collection(db, 'quotes'), orderBy('created', 'desc'))
    onSnapshot(quotesRef, (querySnapshot) => {
      let quotesArray = []
      querySnapshot.docs.forEach((quote) => {
        quotesArray.push({
          id: quote.id,
          data: quote.data(),
        })
      })

      if (isMounted) setQuotes(quotesArray)
      if (isMounted) setQuotesLoading(false)
    })

    return () => { isMounted = false } // cleanup toggles value, if unmounted
  },[])

  let quoteList
  if (quotesLoading) {
    quoteList = <div className='quote-list-empty'>Loading...</div>
  } else if (quotes.length) {
    quoteList = (
      <ul className='quote-list'>
        {quotes.map(quote => (
          <div key={quote.id} className='quote-list-result'>
            <div className='quote-list-item'>
              <span className='quote-list-text'>
                {quote.data.text}
              </span>
              <div className='quote-list-buttons'>
                <button className='like-quote' onClick={isLoading ? undefined : isAuthenticated && quote.data.users.indexOf(user.email) > -1 ? () => dislikeQuote(quote.id) : () => likeQuote(quote.id)}>
                  <i className={isAuthenticated && quote.data.users.indexOf(user.email) > -1 ? 'fa fa-heart' : 'fa fa-heart-o'}></i>
                  <span>{quote.data.likes}</span>
                </button>
                {isAuthenticated && (
                  <button
                    className='delete-quote'
                    style={{ 
                      display: `${quote.data.author != user.email && 'none'}`
                    }}
                    onClick={() => { if (window.confirm('Are you sure?')) deleteQuote(quote.id) }}
                  >
                    <i className='fa fa-trash'></i>
                    <span>Delete</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        ))}
      </ul>
    )
  } else {
    quoteList = <div className='quote-list-empty'>No quotes</div>
  }

  return (
    <>{quoteList}</>
  )
}

export default QuoteList
