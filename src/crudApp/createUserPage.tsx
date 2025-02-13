import { useState } from "react";
import { addUser } from "../Redux/slices/crudAppSlices/user";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { useNavigate } from "react-router-dom";

function CreateUser() {

    const [name,setName]=useState('');
    const [email,setEmail]=useState('')
   const dispatch=useAppDispatch();
   const user=useAppSelector((state)=>state.users)
   const navigate=useNavigate();

    

    const handleSubmit=(event)=>{
        event.preventDefault();
        dispatch(addUser({id: (user[user.length-1].id)+1,name:name,email:email}))
        navigate("/")

    }
    return (

        <>
            <div className="bg-black p-10">


                <div>
                    <h1>Create New User</h1>
                </div>
                <div className="p-8">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label><br />
                            <input className="bg-white text-black w-full p-2" type="text" name="name" placeholder="Enter your name"
                            onChange={e=>setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email">Email</label><br />
                            <input className="bg-white text-black w-full p-2" type="email" name="email" placeholder="enter the email" 
                            onChange={e=>setEmail(e.target.value)}/>
                        </div>
                        <div>
                            <button>submit</button>
                        </div>


                    </form>
                </div>
            </div>

        </>
    )
}

export default CreateUser;