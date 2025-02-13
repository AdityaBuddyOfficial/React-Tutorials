import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useState } from "react";
import { updateUser } from "../Redux/slices/crudAppSlices/user";

function UpdateUser()
{
const navigate=useNavigate();
   
const dispatch=useAppDispatch();
    const {id}=useParams();
    const userId=parseInt(id);
    console.log("🚀 ~ id:", id)
    const users=useAppSelector((state)=>state.users)
    console.log("🚀 ~ users:", users)
    const existingUser=users.filter((item)=>item.id === userId);
    
    console.log("🚀 ~ existingUser:", existingUser)

    const {name,email}=existingUser[0]
    console.log("🚀 ~ email:", email)
    console.log("🚀 ~ name:", name)
    const [nameUpdate,setNameUpdate]=useState(name)
    const [emailUpdate,setemailUpdate]=useState(email)


    const handleUpdate=(e)=>{
        e.preventDefault();
        dispatch( updateUser({
            id:userId,
            name:nameUpdate,
            email:emailUpdate,
        }))
        navigate("/")
    }
   
    

    return(


        <>
       <div className="bg-black p-10">


<div>
    <h1>Update your Details</h1>
</div>
<div className="p-8">
    <form onSubmit={handleUpdate}>
        <div>
            <label htmlFor="name">Name</label><br />
            <input className="bg-white text-black w-full p-2" type="text" name="name" placeholder="Enter your name"
             value={nameUpdate} onChange={(e)=>setNameUpdate(e.target.value)}/>
        </div>
        <div>
            <label htmlFor="email">Email</label><br />
            <input className="bg-white text-black w-full p-2" type="email" name="email" placeholder="enter the email" 
              value={emailUpdate} onChange={(e)=>setemailUpdate(e.target.value)}/>
        </div>
        <div>
            <button>update</button>
        </div>


    </form>
</div>
</div>
        </>
    )
}

export default UpdateUser;