// import React from "react";

import { Link } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../Redux/hooks";
import { deleteUser } from "../Redux/slices/crudAppSlices/user";



function Home() {
    const user =useAppSelector((state)=>state.users)
    console.log("user Data from userslice",user)
    const dispatch=useAppDispatch();


    const handleDelete=(id)=>{
        dispatch(deleteUser({id:id}))

    }
    return (
        <>
            <h1>Crud Operation for Redux Practice</h1>
            <button>
            <Link to={"/createUserPage"}>Create new user detail +</Link>
            </button>
           
  
<div className="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="px-6 py-3">
                    ID
                </th>
                <th scope="col" className="px-6 py-3">
                    Name
                </th>
                <th scope="col" className="px-6 py-3">
                    Email
                </th>
                <th scope="col" className="px-6 py-3">
                   Action
                </th>
               
            </tr>
        </thead>
        <tbody>
            {user.map((user,index)=>(
                <tr key={index}>
                    <td>
                        {user.id}
                    </td>
                    <td>
                        {user.name}
                    </td>
                    <td>
                        {user.email}
                    </td>
                    <td className="px-6 py-4">
                        <button> <Link to={`/editpage/${user.id}`}>Edit</Link></button>
                       
                        <button onClick={()=>handleDelete(user.id) }>delete</button>
                </td>
                </tr>
            ))}
        </tbody>
    </table>
</div>

        </>
    )
}
export default Home;