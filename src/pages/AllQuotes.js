import QuoteInput from '../components/QuoteInput'
import QuoteList from '../components/QuoteList'
import Banner from '../components/Banner'

function AllQuotes() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner />
        <QuoteInput />
        <QuoteList />
      </div>
    </div>
  )
}

export default AllQuotes
