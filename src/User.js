import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const User = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const[save,setSave]=useState("Insert");
  const navigate = useNavigate();
 const param=useParams();
const {id}=param;
  useEffect(() => {
   if(id)
   {
   getUserByid(id)

   }
  }, []);
  const getUserByid=(id)=>{
    axios
    .get(`http://localhost:5000/users/${id}`)
    .then((response) => {
      console.log("hello")
  setName(response.data.name);
  setEmail(response.data.email);
  setCourse(response.data.course);  
  setSave("update")
    })
    .catch((error) => {
      console.log(error);
    });
   }

  const Insert = () => {
if(name==="" && email=="" && course==="") {
alert("please enter the filed");
}
    else{
      if(id){
        updatedata(id);
      }
      else{
        insertdata();
      }
   
    }
  };
const insertdata=()=>{
  axios.post("http://localhost:5000/users", {
    name,
    email,
    course,
  })
  .then((response) => {
    if(response.status===201)
    {
      
      navigate("/");
    }
  })
  .catch((error) => {
    console.log("error");
   
  });
}
const updatedata=(id)=>{
  axios.put(`http://localhost:5000/users/${id}`, {
    name,
    email,
    course,
  })
  .then((response) => {
    if(response.status===200)
    {

      navigate("/");
    }
   
  })
  .catch((error) => {
    console.log("error");
   
  });
}
  return (
    <div>
      
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </label>
      <label>
        Course:
        <input
          type="text"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </label>
      <button onClick={Insert}>{save}</button>
      
    </div>
  );
};

export default User;
