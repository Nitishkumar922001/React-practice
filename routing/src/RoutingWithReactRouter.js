import {BrowserRouter,Routes,Route,Link} from 'react-router-dom'
import Nav1 from './Nav.js';
function RoutingWithReactRouter()
{
return(
    <div>
     
        <BrowserRouter>
       <Nav1></Nav1>
            <Routes>
                <Route path='/signup' element={<h1>signup</h1>}></Route>
                <Route path='/home' element={<h1>home</h1>}/>
                <Route path='/*' element={<h1>error</h1>}/>
            </Routes>
        </BrowserRouter>
        <p>in this page we have used react-router for routing</p>
    </div>
)
}
export default RoutingWithReactRouter;
