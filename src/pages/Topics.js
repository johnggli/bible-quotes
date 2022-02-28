import { Link } from 'react-router-dom'
import Banner from '../components/Banner'

function Topics() {
  return (
    <div className='container'>
      <div className='content'>
        <Banner title='Topics' image='https://user-images.githubusercontent.com/43749971/155612522-b81365a7-82f3-49fe-9c5a-0d343aa20f3a.jpg'/>

        <ul className='filterNav'>
          <li className='allBtn'><a href='#!' data-filter='*' className='selected'>All</a></li>
          <li><a href='#!' data-filter='.genesis'>Genesis</a></li>
          <li>
            <Link to='/topics/love'>
              Love
            </Link>
          </li>
          <li><a href='#!' data-filter='.leviticus'>Leviticus</a></li>
          <li><a href='#!' data-filter='.numbers'>Numbers</a></li>
          <li><a href='#!' data-filter='.deuteronomy'>Deuteronomy</a></li>
          <li><a href='#!' data-filter='.joshua'>Joshua</a></li>
          <li><a href='#!' data-filter='.judges'>Judges</a></li>
          <li><a href='#!' data-filter='.1-samuel'>1 Samuel</a></li>
          <li><a href='#!' data-filter='.2-samuel'>2 samuel</a></li>
          <li><a href='#!' data-filter='.1-kings'>1 Kings</a></li>
          <li><a href='#!' data-filter='.2-kings'>2 Kings</a></li>
          <li><a href='#!' data-filter='.1-chronicles'>1 Chronicles</a></li>
          <li><a href='#!' data-filter='.2-chronicles'>2 Chronicles</a></li>
          <li><a href='#!' data-filter='.nehemiah'>Nehemiah</a></li>
          <li><a href='#!' data-filter='.job'>Job</a></li>
          <li><a href='#!' data-filter='.psalms'>Psalms</a></li>
          <li><a href='#!' data-filter='.proverbs'>Proverbs</a></li>
          <li><a href='#!' data-filter='.ecclesiastes'>Ecclesiastes</a></li>
          <li><a href='#!' data-filter='.song-of-songs'>Song of Songs</a></li>
          <li><a href='#!' data-filter='.isaiah'>Isaiah</a></li>
          <li><a href='#!' data-filter='.jeremiah'>Jeremiah</a></li>
          <li><a href='#!' data-filter='.lamentations'>Lamentations</a></li>
        </ul>
      </div>
    </div>
  )
}

export default Topics
