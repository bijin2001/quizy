import './App.css'
import {Route, Routes} from 'react-router-dom'
import Page1 from './Components/Page1'
import Page2 from './Components/Page2'
function App() {
  
  return (
    <>
    <Routes>

    <Route element= {<Page1/>} path='/'/>
    <Route element={<Page2/>} path='/Page2'/>
   </Routes>
   </>
  )}
export default App
