import './App.css'
import ListStudent from './components/ListStudent'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import EmployeeComponent from './components/EmployeeComponent'
import SignIn from './components/SignIn'
import StudentDisplay from './components/StudentDisplay'
import F404 from './components/F404'

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <h1 style={{
         marginLeft:'400px',
         padding:'100px',
         fontSize:'2em'
        }}>Attendence Management System</h1> */}
      
        
        <Routes>
          
          <Route path='/' element={<SignIn/>}/>
          <Route path='/404' element={<F404/>}/>
          <Route path='/admin' element={<ListStudent/>}/>
          <Route path='/roll/:rollno' element={<StudentDisplay/>}/>
          <Route path='/add-student' element={<EmployeeComponent/>}/>
          <Route path='/edit-student/:id' element={<EmployeeComponent/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
