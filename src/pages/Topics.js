import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

function Topics() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='Topics' image='https://user-images.githubusercontent.com/43749971/156467349-2967ab15-599d-470d-845d-89b2859c77e0.jpg'/>

        <ul className='filter-list'>
          <div className='filter-list-item'>
            <div className='filter-letter'>B</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/blessing'>blessing</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>C</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/commandments'>commandments</Link></li>
              <li><Link to='/topics/consolation'>consolation</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>D</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/death'>death</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>F</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/faith'>faith</Link></li>
              <li><Link to='/topics/forgiveness'>forgiveness</Link></li>
              <li><Link to='/topics/friendship'>friendship</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>G</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/gratitude'>gratitude</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>H</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/health'>health</Link></li>
              <li><Link to='/topics/hope'>hope</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>J</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/judgment'>judgment</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>L</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/love'>love</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>M</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/marriage'>marriage</Link></li>
              <li><Link to='/topics/money'>money</Link></li>
              <li><Link to='/topics/motivation'>motivation</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>P</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/prayer'>prayer</Link></li>
              <li><Link to='/topics/promises'>promises</Link></li>
              <li><Link to='/topics/purity'>purity</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>R</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/repentance'>repentance</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>S</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/salvation'>salvation</Link></li>
            </ul>
          </div>
          <div className='filter-list-item'>
            <div className='filter-letter'>W</div>
            <ul className='filter-nav'>
              <li><Link to='/topics/wisdom'>wisdom</Link></li>
            </ul>
          </div>
        </ul>
      </div>
    </div>
  )
}

export default Topics
