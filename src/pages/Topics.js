import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

function Topics() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='Topics' image='https://user-images.githubusercontent.com/43749971/155612522-b81365a7-82f3-49fe-9c5a-0d343aa20f3a.jpg'/>

        <ul className='filterNav'>
          {/* <li className='allBtn'><a href='#!' data-filter='*' className='selected'>All</a></li> */}
          <li>
            <Link to='/topics/love'>
              love
            </Link>
          </li>
          <li>
            <Link to='/topics/death'>
              death
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Topics
