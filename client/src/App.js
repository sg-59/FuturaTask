import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import { useSelector } from 'react-redux';
import Update from './Pages/Update';
import Profile from './Pages/Profile';
import Forgottenpassword from './Pages/Forgottenpassword';

function App() {

  const Logindata=useSelector((state)=>state.userInfo.personelData[0])
  console.log("useselector value",Logindata);

  if(Logindata){
    var token=Logindata.accessToken
  }

  console.log("token",token);

  const sample=createBrowserRouter([
    {
      path:'/',
      element:token ? <Home/> : <Login/>
    },
    {
      path:'/signup',
      element:<Signup/>
    },
    {
      path:'/update/:id',
      element:token ?<Update/> : <Login/>
    },
    {
      path:'profile',
      element:token ?<Profile/> :<Login/>
    },
    {
      path:'forgot',
      element:<Forgottenpassword/>
    }
  ])

  return (
 <RouterProvider router={sample}></RouterProvider>
  );
}

export default App;
