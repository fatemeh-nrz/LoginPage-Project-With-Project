import axios from "axios";
import {
  RECEVIVE_USER_ERROR,
  RECEVIVE_USER_RESPONSE,
  SEND_USER_REQUEST,
} from "./userActionTypes";

export const sendUserRequest = () => {
  return {
    type: SEND_USER_REQUEST,
  };
};

export const RecieveUserResponse = (data) => {
  return {
    type: RECEVIVE_USER_RESPONSE,
    payload: data,
  };
};

export const RecieveUserError = (error) => {
  return {
    type: RECEVIVE_USER_ERROR,
    payload: error,
  };
};

export const getData = () => {
  return (dispatcher) => {
    dispatcher(sendUserRequest());
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        dispatcher(RecieveUserResponse(res.data));
      })
      .catch((err) => {
        dispatcher(RecieveUserError(err.message));
      });
  };
};
