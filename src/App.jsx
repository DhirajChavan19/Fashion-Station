import './App.css'
import { Route,Routes } from 'react-router-dom'
import MainPage from './pages/mainpage/MainPage'
import MainComp from './components/MainComponent/maincomp'
import MainPageComponent from './components/MainPageComponent/mainpagecomp'

function App() {
  return(
    <Routes>
      <Route path='/' element={<MainPage/>}>
        <Route index element={<MainPageComponent/>}/>
      </Route>
    </Routes>
  )
}

export default App
