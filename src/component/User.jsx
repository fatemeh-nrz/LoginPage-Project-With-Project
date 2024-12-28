import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RecieveUserError, RecieveUserResponse, getData, sendUserRequest } from "../redux/userActions";
import axios from "axios";
import { RECEVIVE_USER_RESPONSE } from "../redux/userActionTypes";   
const User = () => {
  const { loading, data, error } = useSelector(state =>state);
  const dispatcher = useDispatch();

  // dispatcher(getData())
  const handleGetData = () =>{
    dispatcher(getData())
  }
  
  return (
    <div className="container">
      <button className="btn btn-info  mt-5 mb-4   " onClick={handleGetData}>
        دریافت اطلاعات
      </button>


       
      <div>
       {loading ? (
             <div className="text-center text-secondary m-5  ">
                <div className="spinner-border" role="status">
                 <span className="visually-hidden">LOADING </span>
                </div>
             </div>
            
         
        ):data.length >0 ? (
            <ul className="text-center">
          {
        data.map(u=>(
        <li key={u.id}>{u.id}-{u.username}-{u.email}</li>
    ))
      }

            </ul>
        ):error ? (<h4>{error} </h4>):
        (<h4>برای دریافت اطلاعات دکمه مورد نظر را فشار دهید.</h4>)

        }


       
</div>
</div>
   
  )
}  


export default User;
