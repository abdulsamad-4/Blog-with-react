import Home from './pages/home/Home';
import Single from './pages/home/single/Single';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import Settings from './pages/settings/Settings';
import Write from './pages/write/Write';
import Topbar from './topbar/Topbar';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const user = false;
  return (
    <BrowserRouter>
    <Topbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element={user ? <Home/> :<Register />} />
        <Route path="/login" element={user ? <Home/> :<Login />} />
        <Route path="/write" element={user ? <Write /> : <Register/>} />
        <Route path="/settings" element={user ? <Settings /> : <Register/>} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
