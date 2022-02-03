import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <header>
      <div className='container'>
        <div className='inner-content'>
          <div className='brand'>
            <Link to='/'>BibleQuotes</Link>
          </div>

          <ul className='nav-links'>
            <li>
              <Link to='/'>All Quotes</Link>
            </li>
            <li>
              <Link to='/topics'>Topics</Link>
            </li>
            <li>
              <a href='#!' className='btn'>+ Join</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default NavBar;
