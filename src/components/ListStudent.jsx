import React,{useEffect, useState} from 'react'
import { deleteStudent, listStudents } from '../service/StudentService'
import { useNavigate } from 'react-router-dom'
import '../assets/tab.css'
const ListStudent = () => {
    const navigator=useNavigate();
    const [student,setStudent] = useState([])
    useEffect(()=>{
        getAllStudents()
    },[])
    
    function getAllStudents(){
        listStudents().then((response)=>{setStudent(response.data)}).catch(error =>{console.error(error)})
    }

    function addNewStudent(){
        navigator('/add-student')
    }
    function updateStudent(id){
        navigator(`/edit-student/${id}`)
    }
    function removeStudent(id){
        console.log(id)
        deleteStudent(id).then((response)=>{
            getAllStudents()
            console.log("Deleted Successfully")
        }).catch(error =>{
            console.log(error)
        })
    }
    function exit(){
        navigator("/")
    }

  return (
    <div className='container'
    style={{
        // background:'rgba(69, 125, 63,0.1)',
        height:'100vh'
    }}>
        <h1 style={{
            marginLeft:'600px'
        }}>Students</h1>
        <button style={{
                  padding:'20px',
                  borderRadius:'10px',
                  border:'none',
                  marginTop:'40px',
                  marginLeft:'50px',
                  marginBottom:'100px',
                  width:'200px',
                  color:'white',
                  fontSize:'1em',
                  background:'rgb(61, 80, 248)'
                }} onClick={addNewStudent}>Add Student </button>
        <button style={{
                  padding:'20px',
                  borderRadius:'10px',
                  border:'none',
                  marginTop:'40px',
                  marginLeft:'900px',
                  width:'200px',
                  color:'white',
                  fontSize:'1em',
                  background:'rgb(61, 80, 248)'
                }}  onClick={exit}>Log Out </button>
        <div style={{
            overflow:'auto',
             maxHeight:'400px',
             width:'1100px',
             marginLeft:'150px',
             borderRadius:'10px',
             borderWidth:'2px',
            //  boxShadow:'2px 2px 2px 5px rgba(0,0,0,.2)',
             padding:'20px',
        }}>
      <table style={{
        
       

      }}>
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>rollno</th>
                <th>email</th>
                <th>
                
                    <tr className='col-md-10'><th colSpan="5">Absent-days</th>
                    </tr>
                    <tr>
                    <th className='col-md-2'>Month</th>
                    <th className='col-md-5'>Days</th>
                    <th className='col-md-10'>Year</th>
                    </tr>
                </th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            {
                student.map(student=>
                <tr key={student.id}>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.rollno}</td>
                    <td>{student.email}</td>
                    
                    <td> {student.marks.map(mark=> <tr> 
                    <td >{mark.month }</td> 
                    <td > {mark.days }</td> 
                    <td > {mark.year }</td> 
                    </tr>)}
                    </td>
                   
                    <td style={{
                        paddingRight:'70px'
                    }}><button  style={{
                  padding:'20px',
                  borderRadius:'10px',
                  border:'none',
                  marginTop:'40px',
                  marginLeft:'50px',
                  width:'100px',
                  color:'white',
                  fontSize:'1em',
                  background:'rgb(61, 80, 248)'
                }} onClick={()=>updateStudent(student.id)}>Update</button>
                    <button  style={{
                  padding:'20px',
                  borderRadius:'10px',
                  border:'none',
                  marginTop:'40px',
                  marginLeft:'50px',
                  width:'100px',
                  color:'white',
                  fontSize:'1em',
                  background:'rgb(61, 80, 248)'
                }} onClick={()=>removeStudent(student.id)} >Delete</button></td>
                </tr>
                )
            }
        </tbody>
        
      </table>
     
    </div></div>
  )
}

export default ListStudent
