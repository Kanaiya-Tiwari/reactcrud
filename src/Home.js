import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);

const deleteById=(id)=>{
    axios.delete(`http://localhost:5000/users/${id}`)
    .then(response => {
      console.log(response);
      getUser();
    })
    .catch(error => {
      console.log(error);
    });
}
const getUser=()=>{
    axios.get('http://localhost:5000/users')
    .then(response => {
      setData(response.data);
    })
    .catch(error => {
      console.log(error);
    });
}

  useEffect(() => {
   
    getUser();
  }, []);

  return (
    <div>
      <h1>Admin Interface</h1>
      <h2><Link to='/user'>Add</Link></h2>
      <table>
        <tbody>
          <tr>
            
            <th>Name</th>
            <th>Email</th>
            <th>Course</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
          {data.map(value => (
            <tr key={value._id}>
              <td>{value.name}</td>
              <td>{value.email}</td>
              <td>{value.course}</td>
              <td> <Link to={`/user/${value._id}`}>Updatr</Link> </td>
            <td> <button onClick={()=>deleteById(value._id)}>Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;