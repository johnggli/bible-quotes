import QuoteList from '../components/QuoteList'
import Banner from '../components/Banner'

function QuotesByTopic(props) {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title={props.topic} image='https://user-images.githubusercontent.com/43749971/156467894-5ab726e5-d263-4959-8cfb-18010e7efea1.jpg'/>
        <QuoteList topic={props.topic}/>
      </div>
    </div>
  )
}

export default QuotesByTopic
