import { useState ,useEffect} from "react"
import React from 'react'
import Navbar from "../Components/Navbar"
import axios from 'axios'
const Dashboard =()=>{
    const[global,setglobal]=useState(true);
    const [myevent,setmyevent]=useState(false);
    const [userDetails, setUserDetails] = useState(null);
    const[eventData,seteventData]=useState(
        {
            title: '',
            description: '',
            event_date: '',
          });
    const globalbtn = ()=>{
        setglobal(true)
        setmyevent(false)
     }
    const myeventbtn = ()=>{
        setglobal(false)
        setmyevent(true)
    }
    
    const handleventchange = (e) => {
        seteventData({ ...eventData, [e.target.name]: e.target.value });
      };
      const addEvent = async (eventData, config) => {
        try {
          const response = await axios.post('http://127.0.0.1:8000/api/add_event/', eventData, config);
          return response.data;
        } catch (error) {
          throw error;
        }
      };
      const handleAddEvent = async (e) => {
        e.preventDefault();
        try {
          const token = sessionStorage.getItem('token');
          const config = {
            headers: {
              Authorization: `Token ${token}`,
            },
          };
    
          // Call the addEvent function to send the data to the API
          const response = await addEvent(eventData, config);
          console.log('Event added:', response);
    
          // Clear the form after successful submission
          seteventData({
            title: '',
            description: '',
            event_date: '',
          });
        } catch (error) {
          console.log('Error adding event:', error);
        }
      };
    
    const handleLogout = async () => {
        try {
          const token = sessionStorage.getItem('token'); // Get the token from local storage
          const config = {
            headers: {
              Authorization: `Token ${token}`,
            },
          };
    
          await axios.post('http://127.0.0.1:8000/api/logout/', null, config);
          // Clear the token from local storage and perform any other logout-related actions
          sessionStorage.removeItem('token');
          // Redirect the user to the login page or any other page as needed
          window.location.href = '/';
        } catch (error) {
          console.log('Error logging out:', error);
        }
      };
        useEffect(() => {


          
            // Function to fetch user details using the token
            const fetchUserDetails = async () => {
              try {
                const token = sessionStorage.getItem('token'); // Assuming you have stored the token in local storage after login
                const config = {
                  headers: {
                    Authorization: `Token ${token}`,
                  },
                };
        
                const response = await axios.get('http://127.0.0.1:8000/api/dashboard/', config);
                setUserDetails(response.data);
                if(response.status===200){
                    console.log(response.data)
                    setUserDetails(response.data)
                }
               
              } catch (error) {
                console.log('Error fetching user details:', error);

              }
            };
            
    fetchUserDetails();
}, []);

    
    return (

        <div className="h-screen w-full " > 
        
        <Navbar logout={handleLogout}  myevents={myeventbtn}  global={globalbtn} />

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
    myevent && <div className="m-10">

<form onSubmit={handleAddEvent}>

<div className="card card-side bg-base-100 shadow-xl">
  <figure><img width="375" height="375" src="https://img.icons8.com/3d-fluency/375/planner.png" alt="planner"/></figure>
  <div className="card-body">
    <h2 className="card-title"><input onChange={handleventchange} value={seteventData.title} name="title" type="text" placeholder="Type here Event Title" className="input input-bordered w-full max-w-xs" /></h2>
    <p><textarea name="description" onChange={handleventchange} value={seteventData.description} className="textarea textarea-bordered textarea-lg w-full max-w-xs  " placeholder="Type here the description of event"></textarea></p>

    <p><input name="event_date" onChange={handleventchange} value={seteventData.event_date} type="date" placeholder="Type here Date" className="input input-bordered w-full max-w-xs" /> </p>
    <div className="card-actions justify-end">
        <button className="btn btn-primary " >Post</button>
    </div>
  </div>
</div>
</form>


    </div>

}


        </div>
        
        
        </div>
    )}
export default Dashboard;

