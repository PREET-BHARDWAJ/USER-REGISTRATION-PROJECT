import React from 'react'
import axios from 'axios'

const Delete = () => {
    const handledel=async(e) => {
        e.preventDefault();
        const id=e.target.id.value;
        await axios.delete(`http://localhost:9000/users/${id}`)
        alert('User delete successfully')
    }
  return (
    <div>
        <h1>Delete User Data</h1>
        <form onSubmit={handledel}>
         <label>
            ID:
            <input type='text' name='id'/><br></br><br></br>  
        </label>
        <button type='submit'>delete</button> 
        </form>
    </div>  
  )
}

export default Delete