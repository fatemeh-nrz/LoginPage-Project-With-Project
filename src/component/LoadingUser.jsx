import React from "react";
import { useDispatch, useSelector } from "react-redux";
import  {getData} from "../redux/userActions";

const LoadingUser = () => {
  const { data } = useSelector((state) => state);
  const dispatcher = useDispatch();
  const handleLoading = () => {
    dispatcher(getData());
  };
  return (
    <div>
      <button className="btn btn-primary   mt-5 mb-4   "
        onClick={handleLoading} >دریافت اطلاعات</button>
      {data.map((u) => (
        <li key={u.id}>
          {u.id}-{u.username}-{u.email}
        </li>
      ))}
    </div>
  );
};
export default LoadingUser;
