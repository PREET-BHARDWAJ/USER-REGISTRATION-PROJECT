import React from 'react'
import axios from 'axios'
import './Update.css'
const Update = () => {
    const handleupdate=async(e) => {
        e.preventDefault();
        const id=e.target.id.value;
        const name=e.target.name.value;
        const age =e.target.age.value;
        const user={name,age}
        await axios.put(`http://localhost:9000/users/${id}`,user)
        alert('User update successfully')
    }
  return(
    <>
    <h2 align="center"><u>UPDATE USER DATA</u></h2>
    <div className='upd'>
        <form onSubmit={handleupdate}>
            <label>ID:<br></br>
                <input type='text' name='id'/><br></br>
            </label>
            <label>
                NAME:<br></br>
                <input type='text' name="name"/><br></br>
            </label>
            <label>
                AGE:<br></br>
                <input type='text' name="age"/><br></br>
            </label>
            <button type='submit'id="ubutton">Update</button>


        </form>
    </div>
    </>
  )
}
export default Update