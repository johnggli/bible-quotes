import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

function Topics() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='Topics' image='https://user-images.githubusercontent.com/43749971/156467349-2967ab15-599d-470d-845d-89b2859c77e0.jpg'/>

        <ul className='filterNav'>
          {/* <li className='allBtn'><a href='#!' data-filter='*' className='selected'>All</a></li> */}
          <li><Link to='/topics/blessing'>blessing</Link></li>
          <li><Link to='/topics/commandments'>commandments</Link></li>
          <li><Link to='/topics/consolation'>consolation</Link></li>
          <li><Link to='/topics/death'>death</Link></li>
          <li><Link to='/topics/faith'>faith</Link></li>
          <li><Link to='/topics/forgiveness'>forgiveness</Link></li>
          <li><Link to='/topics/friendship'>friendship</Link></li>
          <li><Link to='/topics/gratitude'>gratitude</Link></li>
          <li><Link to='/topics/health'>health</Link></li>
          <li><Link to='/topics/hope'>hope</Link></li>
          <li><Link to='/topics/judgment'>judgment</Link></li>
          <li><Link to='/topics/love'>love</Link></li>
          <li><Link to='/topics/marriage'>marriage</Link></li>
          <li><Link to='/topics/money'>money</Link></li>
          <li><Link to='/topics/motivation'>motivation</Link></li>
          <li><Link to='/topics/prayer'>prayer</Link></li>
          <li><Link to='/topics/promises'>promises</Link></li>
          <li><Link to='/topics/purity'>purity</Link></li>
          <li><Link to='/topics/repentance'>repentance</Link></li>
          <li><Link to='/topics/salvation'>salvation</Link></li>
          <li><Link to='/topics/wisdom'>wisdom</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Topics
