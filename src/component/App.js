import "bootstrap/dist/css/bootstrap.css";
import User from "./User";
import "../App.css";
import { userStore } from "../redux/userStore";
import { Provider } from "react-redux";
import LoadingUser from "./LoadingUser";
import LoadingForm from "./LoaginForm";

function App() {
  return (
    <div className="App">
      <Provider store={userStore}>
        {/* <User /> */}
        {/* < LoadingUser/> */}
        <LoadingForm />
      </Provider>
    </div>
  );
}

export default App;
