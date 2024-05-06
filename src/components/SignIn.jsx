import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css'

const SignIn = () => {
    const navigator=useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [v, setv] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle sign-in logic here
    console.log('Username:', username);
    console.log('Password:', password);
    if(username=="admin" && password=="123")
        navigator('/admin')
    else{
      if(username==password){
        setv('')
        navigator( `/roll/${username}`)
      }
      else
        setv("Invalid Credentials")
    }
  };

  return (
    <div >
      <div style={{
        width:'1400px',
        height:'900px',
        background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(86,20,107,1) 0%, rgba(31,0,255,1) 100%)',

      }}>
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
               width:'500px',
               height:'500px',
               dispay:'flex',
               borderRadius:'10px',
            }}>
              <h1 style={{
                paddingTop:'40px',
              
                marginLeft:'200px'
              }}>Sign In</h1>
              <form onSubmit={handleSubmit}>
                <div >
                
                  <input type="text" style={{
                     color:'black',
                     width:'300px',
                     height:'40px',
                     background:'transparent',
                     outline: '1px solid black',
                     border:'none',
                     borderRadius:'2px',
                    fontSize:'1em',
                     marginLeft:'100px',
                     marginTop:'80px',
                     textAlign:'center'
                 }
                  } id="username" value={username} placeholder='Enter Username' onChange={handleUsernameChange} />
                </div>
                <div className="mb-3">
                 
                  <input type="password" className="form-control" id="password"
                  style={{
                    color:'black',
                    width:'300px',
                    height:'40px',
                    background:'transparent',
                    outline: '1px solid ',
                    border:'none',
                    borderRadius:'2px',
                    marginLeft:'100px',
                    fontSize:'1em',
                    marginTop:'40px',
                    textAlign:'center'
                }} value={password} placeholder='Enter Password'onChange={handlePasswordChange} />
                </div>
                <p style={{marginLeft:"400px",color:"red"}}>{v}</p>
                <button type="submit" style={{
                  padding:'20px',
                  borderRadius:'10px',
                  border:'none',
                  marginTop:'40px',
                  marginLeft:'150px',
                  width:'200px',
                  color:'white',
                  fontSize:'1em',
                  background:'rgb(61, 80, 248)'
                }}>Sign In</button>
              </form>
            </div>
          </div>
          </div>
          </div> 
        
  );
};

export default SignIn;
