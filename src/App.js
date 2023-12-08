import Home from "./Pages/Home";
import Error from "./Pages/Error";
import {Route,Routes} from 'react-router-dom'
import Welcome from "./Pages/Welcome";


function App() {
  return (
<Routes>
<Route path="/" element={<Home />}/>
<Route path="*" element={<Error />}/>
<Route path="/welcome" element={<Welcome />}/>
</Routes>
  );
}

export default App;
