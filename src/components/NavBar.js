import { useState } from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return (
    <nav className='navbar'>
      <div className='container'>
        <div className='nav-container'>
          <div className='nav-logo'>
            <Link to='/'>
              <i className='fas fa-bible'></i>
              BibleQuotes
            </Link>
          </div>

          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' onClick={handleClick}>All Quotes</Link>
            </li>
            <li className='nav-item'>
              <Link to='/topics' onClick={handleClick}>Topics</Link>
            </li>
            <li className='nav-item'>
              <a href='#!' className='btn' onClick={handleClick}>Login</a>
            </li>
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={'fas fa-bars'}></i>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar
