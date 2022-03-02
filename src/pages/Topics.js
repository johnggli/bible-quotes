import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

function Topics() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='Topics' image='https://user-images.githubusercontent.com/43749971/156467349-2967ab15-599d-470d-845d-89b2859c77e0.jpg'/>

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
