import React from 'react'
import axios from 'axios'
import './Register.css'
const Register = () => {
    const handleregister =async (e)=>{
        e.preventDefault();
        const name=e.target.name.value;
        const age =e.target.age.value;
        const users={name,age}
        await axios.post('http://localhost:9000/users',users)
        alert('User registered successfully')
    }
  return (
    <>
     <h2 align='center'><u>NEW USER</u></h2>
    <div className='reg'>
      <form onSubmit={handleregister}>
        <label>
          Name:<br></br>
          <input type="text" name="name" />
        </label><br></br>
        <label>
          Age:<br></br>
          <input type="text" name="age" />
        </label><br></br>
        <button id="rebutton" type='submit'>Register</button>
      </form>
    </div>
    </>
  )
}
export default Register