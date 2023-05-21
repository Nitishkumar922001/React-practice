import './ErrorPopUp.css'
function ErrorDialogBox(props) {
 return <div  >
    <div className="blackDrop"  onClick={props.errHandler}></div>
    <div className="err-popup">
      <header>
        <h2>invalid input</h2>
      </header>
      <p>{props.errormsg}</p>
      <footer>
        <button onClick={props.errHandler}>Okey</button>
      </footer>
    </div>
  </div>;
}
export default ErrorDialogBox;
