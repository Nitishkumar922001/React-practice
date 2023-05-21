import './ErrorPopUp.css';
import ReactDom from 'react-dom';
function BlackDrop(props)
{
  return <div className="blackDrop"  onClick={props.errHandler}></div>
}
function ErrorModal(props){
  return <div className="err-popup">
  <header>
    <h2>invalid input</h2>
  </header>
  <p>{props.errormsg}</p>
  <footer>
    <button onClick={props.errHandler}>Okey</button>
  </footer>
</div>
}

function ErrorDialogBox(props) {
 return <>
   {
    ReactDom.createPortal(<BlackDrop errHandler={props.errHandler}/>,document.getElementById('overlay'))
   }
   {
    ReactDom.createPortal(<ErrorModal errormsg={props.errormsg} errHandler={props.errHandler}/>,document.getElementById('error-modal'))
   }
  </>;
}
export default ErrorDialogBox;
