import {React,useState} from "react";
import "../tailwind.css"
import axios from "axios";
const Home =()=>{
    const [formData, setFormData] = useState({
        email: "",
        password: "",
      });

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  axios.post("https://rupeegainapi.onrender.com/api/login", formData)
      .then((response) => {
        // Handle success if needed
       if (response.status===200){
        console.log("Form submitted successfully!");
        console.log(response.data);
        window.location.href="/dashboard"
       }
       else{
        console.log("Error")
       }
      })
      .catch((error) => {
        // Handle errors if needed
        console.error("Error submitting form:", error);
      });
  };





    const handlesingup=()=>{
        window.location.href="/signup"

    }
    return(<div className="h-screen w-full flex justify-center items-center " >
        <div>
        <div data-aos="fade-up" className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">

  <img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/user-male-circle.png" alt="user-male-circle"/>



  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title text-3xl font-bold  ">Log in</h2>


<form  onSubmit={handleSubmit} >

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your email?</span>
    <span className="label-text-alt text-red-500">*</span>
  </label>
  <input type="email" name="email" value={setFormData.email}  onChange={handleChange} required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  </label>
</div>

<div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your password?</span>
    <span className="label-text-alt text-red-500">*</span>
  </label>
  <input type="password" name="password" required value={setFormData.password} onChange={handleChange} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
  </label>
</div>








<div className="w-full flex justify-center mt-5 "  >
<button className="btn btn-primary">Login</button>

</div>

<div className="flex w-full justify-center mt-5"  > 
<p>Don't have a account ?</p><span className="text-blue-500" onClick={handlesingup} >SignUp</span>
 </div>


    </form>
  </div>
</div>
        </div>




    </div>)
}

export default Home;