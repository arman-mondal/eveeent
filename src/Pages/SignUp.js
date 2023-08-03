import React from "react";


const SignUp =()=>{

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


<form >

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">What is your email?</span>
<span className="label-text-alt text-red-500">*</span>
</label>
<input type="email" required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
<label className="label">
</label>
</div>

<div className="form-control w-full max-w-xs">
<label className="label">
<span className="label-text">What is your password?</span>
<span className="label-text-alt text-red-500">*</span>
</label>
<input type="password" required placeholder="Type here" className="input input-bordered w-full max-w-xs" />
<label className="label">
</label>
</div>








<div className="w-full flex justify-center mt-5 "  >
<button className="btn btn-primary">SignUp</button>

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