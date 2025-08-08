import React from 'react'
import axios from 'axios'
import './Delete.css'

const Delete = () => {
    const handledel=async(e) => {
        e.preventDefault();
        const id=e.target.id.value;
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert('User delete successfully')
    }
  return (
    <>
    <h2 align='center'><u>DELETE USER DATA</u></h2>
    <div className='ddl'>
        <form onSubmit={handledel}>
         <label>
            ID:<br></br>
            <input type='text' name='id'/><br></br><br></br>  
        </label>
        <button type='submit' id="dbutton">Delete</button> 
        </form>
    </div>  
  </>)
}

export default Delete