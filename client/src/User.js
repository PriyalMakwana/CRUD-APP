import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const User = () => {
  
    const [users,setUsers] = useState([])

    useEffect(()=>{
       axios.get('http://localhost:3001')
       .then(result => setUsers(result.data))
       .catch(err => console.log(err))
    },[])

    const handleDelete = (id)=>{
      axios.delete('http://localhost:3001/deleteUser/'+id)
      .then(res =>{console.log(res)
      window.location.reload()}
    )
      .catch(err=> console.log(err))
    }

  return (
    <div className='d-flex vh-100 bg-info justify-content-center align-items-center'>
      <div className='w-50 bg-white rounded p-3'>
        <Link to="/create" className='btn btn-success'>Add +</Link>
        <table className='table'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Age</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
             {
                users.map((user,k)=>{
                    return <tr key={k}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.age}</td>
                        <td>
                        <Link to={`/update/${user._id}`} className='btn btn-outline-success'>Update</Link>
                            <button className='btn btn-outline-danger' onClick={(e)=> handleDelete(user._id)}>Delete</button>
                        </td>
                    </tr>
                })
             }
        </tbody>
        </table>
      </div>
    </div>
  )
}

export default User
