import QuoteList from '../components/QuoteList'
import Banner from '../components/Banner'

function QuotesByTopic(props) {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title={props.topic} image='https://user-images.githubusercontent.com/43749971/155612677-c28e0066-b82a-4713-8ebb-75e1cc273400.png'/>
        <QuoteList topic={props.topic}/>
      </div>
    </div>
  )
}

export default QuotesByTopic
