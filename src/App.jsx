import './App.css'
import { Route,Routes } from 'react-router-dom'
import MainPage from './pages/mainpage/MainPage'
import MainComp from './components/MainComponent/maincomp'

function App() {
  return(
    <Routes>
      <Route path='/' element={<MainPage/>}>
        <Route path='' element={<MainComp/>}/>
      </Route>
    </Routes>
  )
}

export default App
