import React from 'react'
import axios from 'axios'
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
    <div>
        <h1>Udate User Data</h1>
        <form onSubmit={handleupdate}>
            <label>
                ID:
                <input type='text' name='id'/><br></br><br></br>  
            </label>
            <label>
                NAME:
                <input type='text' name="name"/><br></br><br></br>  
            </label>
            <label>
                AGE:
                <input type='text' name="age"/><br></br><br></br>  
            </label>
            <button type='submit'>Update</button>


        </form>
    </div>
  )
}
export default Update