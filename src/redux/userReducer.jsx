import { RECEVIVE_USER_ERROR, RECEVIVE_USER_RESPONSE, SEND_USER_REQUEST } from "./userActionTypes";

const states = {
  loading: false,
  data: [],
  error: ""
};

const userReducer = (state = states , action) => {
  switch (action.type) {
    case SEND_USER_REQUEST:
      return {
        ...state,
        loading: true
      };
    case RECEVIVE_USER_RESPONSE:
      return {
        loading: false,
        data: action.payload,
        error:''
      };
    case RECEVIVE_USER_ERROR:
      return {
        loading: false,
        data: [],
        error:action.payload
      };
    default:
      return state;
  }
};

export default userReducer;