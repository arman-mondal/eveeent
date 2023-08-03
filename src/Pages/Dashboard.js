import { useState } from "react"
import React from 'react'
import Navbar from "../Components/Navbar"

export default function Dashboard (){
    const[global,setglobal]=useState(true);
    const [myevent,setmyevent]=useState(false);
 const globalbtn = ()=>{
    setglobal(true)
    setmyevent(false)
 }
const myeventbtn = ()=>{
    setglobal(false)
    setmyevent(true)
}
    return (

        <div className="h-screen w-full " > 
        
        <Navbar  myevents={myeventbtn}  global={globalbtn} />

        <div className="w-full h-full " >


{global  &&  <div className="m-10" >

<div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>

    <p>Date: </p><span>{}</span>
    <div className="card-actions justify-end">
    <label className="swap swap-flip text-9xl">
  
  {/* this hidden checkbox controls the state */}
  <input type="checkbox" />
  
  <div className="swap-on"><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/like--v6.png" alt="like--v6"/></div>
  <div className="swap-off"><img width="94" height="94" src="https://img.icons8.com/3d-fluency/94/like--v1.png" alt="like--v1"/></div>
</label>    </div>
  </div>
</div>
</div>


 }

{
    myevent && <>My Events</>

}


        </div>
        
        
        </div>
    )
  }


