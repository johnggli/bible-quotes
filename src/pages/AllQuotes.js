import QuoteInput from '../components/QuoteInput'
import QuoteList from '../components/QuoteList'
import Banner from '../components/Banner'

function AllQuotes() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='All Quotes' image='https://user-images.githubusercontent.com/43749971/155612677-c28e0066-b82a-4713-8ebb-75e1cc273400.png'/>
        <QuoteInput />
        <QuoteList />
      </div>
    </div>
  )
}

export default AllQuotes
