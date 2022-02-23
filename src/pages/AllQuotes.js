import QuoteInput from '../components/QuoteInput'
import QuoteList from '../components/QuoteList'
import Banner from '../components/Banner'

function AllQuotes() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='All Quotes' image='https://user-images.githubusercontent.com/43749971/152801149-937043c3-220f-477d-9c24-483f135b0c0f.png'/>
        <QuoteInput />
        <QuoteList />
      </div>
    </div>
  )
}

export default AllQuotes
