import { useState } from "react";
import React from "react";

import axios from "axios";
const SignUp =()=>{
    const[formdata,setformdata]=useState({
        username: "",
        email:"",
        password: "",

    })
    const handleChange = (e) => {
        const { name, value } = e.target;
        setformdata((prevFormData) => ({
          ...prevFormData,
          [name]: value,
          
        }));
      };
      const handleSubmit = (e) => {
        e.preventDefault();
      axios.post("http://127.0.0.1:8000/api/register/", formdata)
          .then((response) => {
            // Handle success if needed
           
            alert("Form submitted successfully!");
            console.log(response.data);
            window.location.href="/dashboard"
           
           
            console.log("Error")
            alert("Error")
           
          })
          .catch((error) => {
            // Handle errors if needed
            console.error("Error submitting form:", error);
          });
      };
    const handlelogin =() =>{

        window.location.href="/"
    }

    


    return(<div className="h-screen w-full flex justify-center items-center " >
    <div>
    <div data-aos="fade-up"  className="card w-96 bg-base-100 shadow-xl">
<figure className="px-10 pt-10">

<img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>



</figure>
<div className="card-body items-center text-center">
<h2 className="card-title text-3xl font-bold  ">Sign Up</h2>


<form onSubmit={handleSubmit} >

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Set Your username?</span>
<span className="label-text-alt text-red-500">*</span>
</label>
<input type="text" required name="username" onChange={handleChange} value={formdata.username} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
<label className="label">
</label>
</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">What is Your email?</span>
<span className="label-text-alt text-red-500">*</span>
</label>
<input type="text" required name="email" onChange={handleChange} value={formdata.email} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
<label className="label">
</label>

</div>
<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">Set your password?</span>
<span className="label-text-alt text-red-500">*</span>
</label>
<input type="password" required onChange={handleChange} value={formdata.password} name="password" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
<label className="label">
</label>
</div>








<div className="w-full flex justify-center mt-5 "  >
<button className="btn btn-primary" >SignUp</button>

</div>

<div className="flex w-full justify-center mt-5"  > 
<p>Already have a account ?</p><span className="text-blue-500" onClick={handlelogin} >Login</span>
</div>


</form>
</div>
</div>
    </div>




</div>)



}

export default SignUp