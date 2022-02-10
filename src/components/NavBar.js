import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from '@auth0/auth0-react'

function NavBar() {
  const { user, isAuthenticated, isLoading, loginWithRedirect, logout } = useAuth0()
  const [click, setClick] = useState(false)

  function handleClick() {
    setClick(!click)
  }

  return (
    <div className='navbar'>
      <div className='container'>
        <div className='nav-content'>
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
            {!isLoading && (
              <>
                {isAuthenticated ? (
                  <>
                    <li className='nav-item'>
                      <button className='btn-danger' onClick={logout}>
                        <i className={'fas fa-power-off'}></i>
                      </button>
                    </li>
                  </>
                ) : (
                  <li className='nav-item'>
                    <button className='btn' onClick={loginWithRedirect}>Login</button>
                  </li>
                )}
              </>
            )}
          </ul>
          <div className='nav-icon' onClick={handleClick}>
            <i className={'fas fa-bars'}></i>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar
