import QuoteInput from '../components/QuoteInput'
import QuoteList from '../components/QuoteList'
import Banner from '../components/Banner'

function AllQuotes() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='All Quotes' image='https://user-images.githubusercontent.com/43749971/156467133-a99573f7-f989-44cf-9441-88bb58de972f.jpg'/>
        <QuoteInput />
        <QuoteList />
      </div>
    </div>
  )
}

export default AllQuotes
