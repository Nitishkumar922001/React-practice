import React, { useCallback, useState } from 'react';

import './App.css';
import Hello from './components/Hello';
import Button from './components/UI/Button/Button';

function App() {
  const[showPara,setShowPara]=useState(1);
  const [AllowToggle,setAllowToggle]=useState(0)
  console.log('rendering app')
 const onClickHandler= useCallback(
  ()=>
    {if(AllowToggle)
     setShowPara((preState)=>!preState);
    }
    ,[AllowToggle])
    return (
    <div className="app">
  {showPara&&<Hello/>}
  <Button onClick={()=>setAllowToggle(!AllowToggle)}>Allow Toggle</Button>
  <Button onClick={onClickHandler}>show or hide para</Button>
    </div>
  );
}

export default App;
