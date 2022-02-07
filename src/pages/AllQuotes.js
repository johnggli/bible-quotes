import QuoteInput from '../components/QuoteInput'
import QuoteList from '../components/QuoteList'
import TopPhoto from '../components/TopPhoto'

function AllQuotes() {
  return (
    <div className='container'>
      <div className='content'>
        <TopPhoto />
        <QuoteInput />
        <QuoteList />
      </div>
    </div>
  )
}

export default AllQuotes
