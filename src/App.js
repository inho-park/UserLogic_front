import './App.css';
import {Route} from "react-router-dom";
import Switch from "react-router-dom/es/Switch";
import {Signup} from "./pages/user/Signup";

export default function App() {
  return (
    <div className="App">
      <Switch>
          <Route path = '/app' component={Signup} />
      </Switch>
    </div>
  );
}


