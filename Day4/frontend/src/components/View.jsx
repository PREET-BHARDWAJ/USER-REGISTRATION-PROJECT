import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './View.css'

const View=() => {
    const [users,setUsers]=useState([]);
    const handleview=async ()=>{
        const res=await axios.get('http://localhost:9000/users');
        setUsers(res.data);    
    }
    useEffect(()=>{
        handleview();
    },[])
  return (
    <div className='vv'>
        <h2 align="center"><u>REGISTERED LOG</u></h2>
        <table style={{align:"center",width:'50%',backgroundColor: 'yellow',border: '5px solid black'}}>
            <thead style={{backgroundColor:'blue',color:'white'}}>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>AGE</th>
                </tr>
            </thead>
        <tbody>
       {
        users.map((user)=>(
            <tr key={user.id}>
                <td align='center'>{user.id}</td>
                <td align='center'>{user.name}</td>
                <td align='center'>{user.age}</td>
            </tr>
        ))
       }
       </tbody>
       </table>
    </div>
  )
}

export default View