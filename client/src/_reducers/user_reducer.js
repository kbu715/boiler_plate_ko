import { LOGIN_USER, REGISTER_USER, AUTH_USER } from "../_actions/types";

//reducer는 peviousState와 action을 통해서 다음 nextState를 rutrun한다.
export default function (state = {}, action) {
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, loginSuccess: action.payload };
    case REGISTER_USER:
      return { ...state, register: action.payload };
      case AUTH_USER:
        return { ...state, userData: action.payload };
    default:
      return state;
  }
}