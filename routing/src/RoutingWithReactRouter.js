import {BrowserRouter,Routes,Route, NavLink} from 'react-router-dom'
import Nav1 from './Nav.js';
import UserParamsHook from './UserParamsHook.js';
import NavLink1 from './NavLink.js';
import NavigateHook from './NavigateHook.js';
import UseSearchParamsHook from './UseSearchParamsHook.js';
function RoutingWithReactRouter()
{
return(
    <div>
     
        <BrowserRouter>
        <h1>in this page we have used react-router for routing</h1>
       <Nav1></Nav1>

            <Routes>
                <Route path='/signup' element={<h1>signup</h1>}></Route>
                <Route path='/home' element={<h1>home</h1>}/>
                <Route path='/user/:name' element={<UserParamsHook/>}/>
                <Route path='/navlink' element={<NavLink1/>}/>
                <Route path="/navigatehook" element={<NavigateHook/>}/>
                <Route path='/useSerachparams' element={<UseSearchParamsHook/>}/>
                <Route path='/*' element={<h1>error</h1>}/>
            </Routes>
        </BrowserRouter>
       
    </div>
)
}
export default RoutingWithReactRouter;
