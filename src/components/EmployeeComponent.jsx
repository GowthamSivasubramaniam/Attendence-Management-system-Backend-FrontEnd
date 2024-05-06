import React, { useEffect, useState } from "react";
import {
  createStudent,
  getStudent,
  updateStudent,
} from "../service/StudentService";
import { useNavigate, useParams } from "react-router-dom";

const EmployeeComponent = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [rollno, setrollno] = useState("");
  const { id } = useParams();

  const [errors, setErrors] = useState({
    name: "",
    rollno: "",
    email: "",
  });

  const handleName = (e) => setname(e.target.value);
  const handleRollno = (e) => setrollno(e.target.value);
  const handleEmail = (e) => setemail(e.target.value);

  const navigator = useNavigate();
  const [marks, setMarks] = useState([{ month: "", days: "", year: "" }]); // State to store marks

  // Function to handle adding a new input box
  const addInput = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    setMarks([...marks, { month: "", days: "", year: "" }]);
  };

  // Function to handle removing an input box
  const removeInput = (index) => {
    const updatedMarks = marks.filter((_, i) => i !== index);
    setMarks(updatedMarks);
  };

  // Function to handle input change for subject name
  const handleSubjectChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].month = event.target.value;
    setMarks(updatedMarks);
  };

  // Function to handle input change for mark
  const handleDaysChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].days = event.target.value;

    setMarks(updatedMarks);
  };
  const handleyearChange = (index, event) => {
    const updatedMarks = [...marks];
    updatedMarks[index].year = event.target.value;
    setMarks(updatedMarks);
  };

  useEffect(() => {
    if (id) {
      getStudent(id)
        .then((response) => {
          setname(response.data.name);
          setrollno(response.data.rollno);
          setemail(response.data.email);
          setMarks(response.data.marks);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [id]);

  function saveOrUpdateEmployee(e) {
    e.preventDefault();
    if (validateForm()) {
      if (id) {
        const student = { name, rollno, email, marks };
        updateStudent(id, student)
          .then((response) => {
            console.log(response.data);
            navigator("/admin");
          })
          .catch((error) => {
            console.log(error);
          });
      } else {
        const student = { name, rollno, email, marks };
        console.log("hii");
        console.log(student);
        createStudent(student)
          .then((response) => {
            console.log(response.data);
            navigator("/admin");
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }
  const student = { name, rollno, email };

  function validateForm() {
    let valid = true;
    const errorsCopy = { ...errors };
    if (name.trim()) {
      errorsCopy.name = "";
    } else {
      errorsCopy.name = "Name is required";
      valid = false;
    }

    if (rollno.trim()) {
      errorsCopy.rollno = "";
    } else {
      errorsCopy.rollno = "Rollno is required";
      valid = false;
    }

    if (email.trim()) {
      errorsCopy.email = "";
    } else {
      errorsCopy.email = "Email is required";
      valid = false;
    }
    setErrors(errorsCopy);
    return valid;
  }

  function pageTitle() {
    if (id) {
      return <h2 className="text-center">Update Entry</h2>;
    } else {
      return <h2 className="text-center">Add Entry</h2>;
    }
  }

  return (
    <div   style={{
      width:'1400px',
      height:'900px',
      background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,20,107,1) 0%, rgba(31,0,255,1) 100%)',

    }}>
   
      <div className="row">
        <div style={{
              
              top:'50%',
              left:'50%',
              position:'Absolute',
              transform:'translate(-50%,-50%)',
            }}>
       
          <div style={{
              // top:'50%',
              // Left:'50%',
              // position:'Absolute',
              // transform:'translate(-50%,-50%)',
             
              background:'white',
               boxShadow:'7px 7px 7px 7px rgba(0,0,0,.5)',
               width:'600px',
               height:'600px',
               dispay:'flex',
               borderRadius:'10px',
               overflow:'auto'
            }}>
               <h4 style={{
                  marginTop:'40px',
                  marginLeft:'200px'
                }} >{pageTitle()}</h4>
                 
            <form>
              <div className="form-group mb-2">
              
                <input
                  type="text"
                  placeholder="Enter the name"
                  name="name"
                  value={name}
                  style={{
                    color:'black',
                    width:'400px',
                    height:'40px',
                    background:'transparent',
                    outline: '1px solid black',
                    border:'none',
                    borderRadius:'2px',
                   fontSize:'1em',
                    marginLeft:'100px',
                    marginTop:'10px',
                    textAlign:'center'
                }}
                  onChange={handleName}
                />
                {errors.name && (
                  <div className="invalid-feedback">{errors.name}</div>
                )}
              </div>
              <div className="form-group mb-2">
              
                <input
                  type="text"
                  placeholder="Enter the rollno"
                  name="rollno"
                  value={rollno}
                  style={{
                    color:'black',
                    width:'400px',
                    height:'40px',
                    background:'transparent',
                    outline: '1px solid black',
                    border:'none',
                    borderRadius:'2px',
                   fontSize:'1em',
                    marginLeft:'100px',
                    marginTop:'20px',
                    textAlign:'center'
                }}
                  onChange={handleRollno}
                />
                {errors.rollno && (
                  <div className="invalid-feedback">{errors.rollno}</div>
                )}
              </div>
              <div className="form-group mb-2">
               
                <input
                  type="text"
                  placeholder="Enter the mail"
                  name="email"
                  value={email}
                  style={{
                    color:'black',
                    width:'400px',
                    height:'40px',
                    background:'transparent',
                    outline: '1px solid black',
                    border:'none',
                    borderRadius:'2px',
                   fontSize:'1em',
                    marginLeft:'100px',
                    marginTop:'20px',
                    textAlign:'center'
                }}
                  onChange={handleEmail}
                />
                {errors.email && (
                  <div className="invalid-feedback">{errors.email}</div>
                )}
              </div>
              <div style={{
                  paddingBottom:'20px'
                }}>
                <h2 style={{
                  marginTop:'40px',
                  marginLeft:'200px'
                }} >Absent-Days</h2>

                <div style={{
                  marginLeft:'50px',
                  padding:'10px'
                }}>
                  {marks.map((mark, index) => (
                    <div key={index} style={{
                      display:'flex',
                      marginTop:'20px'
                    }}>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter Month"
                        name="month"
                        style={{
                          color:'black',
                          width:'100px',
                          height:'40px',
                          background:'transparent',
                          outline: '1px solid black',
                          border:'none',
                          marginLeft:'10px',
                          borderRadius:'2px',
                         fontSize:'1em',
                          textAlign:'center'
                      }}
                        value={mark.month}
                        onChange={(event) => handleSubjectChange(index, event)}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Enter days"
                        name="days"
                        value={mark.days}
                        style={{
                          color:'black',
                          width:'100px',
                          height:'40px',
                          background:'transparent',
                          outline: '1px solid black',
                          border:'none',
                          marginLeft:'10px',
                          borderRadius:'2px',
                         fontSize:'1em',
                          textAlign:'center'
                      }}
                        onChange={(event) => handleDaysChange(index, event)}
                      />
                      <input
                        type="text"
                        style={{
                          color:'black',
                          width:'100px',
                          height:'40px',
                          background:'transparent',
                          outline: '1px solid black',
                          border:'none',
                          borderRadius:'2px',
                          marginLeft:'10px',
                         fontSize:'1em',
                          textAlign:'center'
                      }}
                        placeholder="Enter Year"
                        name="year"
                        value={mark.year}
                        onChange={(event) => handleyearChange(index, event)}
                      />
                      <div className="input-group-append">
                        {/* Button to remove input box */}
                        <button
                         style={{
                          padding:'15px',
                          borderRadius:'10px',
                          border:'none',
                          marginTop:'-5px',
                          marginLeft:'20px',
                          width:'100px',
                          color:'white',
                          fontSize:'1em',
                          background:'rgb(61, 80, 248)'
                        }}
                          type="button"
                          onClick={() => removeInput(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                  <div style={{
                    display:'flex',
                    flexDirection:'row',
                    
                  }}>
                  {/* Button to add new input box */}
                  <button style={{
                  padding:'20px',
                  borderRadius:'10px',
                  border:'none',
                  marginTop:'40px',
                  marginLeft:'30px',
                  width:'200px',
                  color:'white',
                  fontSize:'1em',
                  background:'rgb(61, 80, 248)'
                }} onClick={addInput}>
                    Add Entry
                  </button>
                
            
     
              <button
               style={{
                padding:'20px',
                borderRadius:'10px',
                border:'none',
                marginTop:'40px',
                marginLeft:'20px',
                width:'200px',
                color:'white',
                fontSize:'1em',
                background:'rgb(61, 80, 248)'
              }}
                onClick={saveOrUpdateEmployee}
              >
                Submit
              </button>
              </div>
              </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeComponent;
