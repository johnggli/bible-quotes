import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from './components/Footer'

import NavBar from './components/NavBar'
import NewQuotes from './pages/NewQuotes'
import QuotesByTopic from './pages/QuotesByTopic'
import Topics from './pages/Topics'

function AppRoutes() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route exact path='/' element={<NewQuotes />} />
        <Route path='/topics' element={<Topics />}/>
        <Route path='/topics/blessing' element={<QuotesByTopic topic='blessing'/>}/>
        <Route path='/topics/commandments' element={<QuotesByTopic topic='commandments'/>}/>
        <Route path='/topics/consolation' element={<QuotesByTopic topic='consolation'/>}/>
        <Route path='/topics/death' element={<QuotesByTopic topic='death'/>}/>
        <Route path='/topics/faith' element={<QuotesByTopic topic='faith'/>}/>
        <Route path='/topics/forgiveness' element={<QuotesByTopic topic='forgiveness'/>}/>
        <Route path='/topics/friendship' element={<QuotesByTopic topic='friendship'/>}/>
        <Route path='/topics/gratitude' element={<QuotesByTopic topic='gratitude'/>}/>
        <Route path='/topics/health' element={<QuotesByTopic topic='health'/>}/>
        <Route path='/topics/hope' element={<QuotesByTopic topic='hope'/>}/>
        <Route path='/topics/judgment' element={<QuotesByTopic topic='judgment'/>}/>
        <Route path='/topics/love' element={<QuotesByTopic topic='love'/>}/>
        <Route path='/topics/marriage' element={<QuotesByTopic topic='marriage'/>}/>
        <Route path='/topics/money' element={<QuotesByTopic topic='money'/>}/>
        <Route path='/topics/motivation' element={<QuotesByTopic topic='motivation'/>}/>
        <Route path='/topics/prayer' element={<QuotesByTopic topic='prayer'/>}/>
        <Route path='/topics/promises' element={<QuotesByTopic topic='promises'/>}/>
        <Route path='/topics/purity' element={<QuotesByTopic topic='purity'/>}/>
        <Route path='/topics/repentance' element={<QuotesByTopic topic='repentance'/>}/>
        <Route path='/topics/salvation' element={<QuotesByTopic topic='salvation'/>}/>
        <Route path='/topics/wisdom' element={<QuotesByTopic topic='wisdom'/>}/>
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default AppRoutes
