import Home from "./Pages/Home";
import Error from "./Pages/Error";
import {Form, Route,Routes} from 'react-router-dom'
import Welcome from "./Pages/Welcome";
import DashBoard from "./Pages/DashBoard";
import Running from "./clinets/projects/Running";
import Profile from "./freelancer/Profile";


function App() {
  return (
<Routes>
<Route path="/" element={<Home />}/>
<Route path="*" element={<Error />}/>
<Route path="/welcome" element={<Welcome />}/>
<Route path="/dashboard" element={<DashBoard />}/>
<Route path="/projects/running" element={<Running />}/>
<Route path="/projects/form" element={< Form/>}/>
<Route path="/profile" element={< Profile/>}/>
</Routes>
  );
}

export default App;
