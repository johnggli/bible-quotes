import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

import NavBar from './components/NavBar'
import AllQuotes from './pages/AllQuotes'
import QuotesByTopic from './pages/QuotesByTopic'
import Topics from './pages/Topics'

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<AllQuotes />} />
        <Route path='/topics' element={<Topics />}/>
        <Route path='/topics/love' element={<QuotesByTopic topic='love'/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
