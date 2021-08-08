import { useState, Component, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import utility from '../assets/scripts/common';
import TextBox from './GeneralComponents/Input';
import Loader from './Loader';

function App() {
  const requiredError = useState("This field is required.");
  const [state, setState] = useState('init');
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState(false);
  const [redirect, setRedirect] = useState(false)
  const [Error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  useEffect(() => {
    if(state === 'init'){
      var bodyElem = document.getElementById("root-body");
      bodyElem.className = "login-page";
    setState('');}
    if(state === 'done'){
      var bodyElem = document.getElementById("root-body");
      bodyElem.classList.remove("login-page");
    }
 },[state]);
  const login = async () => {
    if(email === "" && password === ""){
      setEmailError(true);
      setErrorMessage(requiredError);
      setPasswordError(true);
      setErrorMessage(requiredError);
      return;
    }if(email === ""){
      setPasswordError(false);
      setEmailError(true);
      setErrorMessage(requiredError);
      return;
    }
    if(password === ""){
      setEmailError(false);
      setPasswordError(true);
      setErrorMessage(requiredError);
      return;
    }
    if (!utility.ValidateEmail(email)) {
      setEmailError(true);
      setPasswordError(false);
      setErrorMessage('Invalid Email Provided.');
      return;
    }
    setEmailError(false);
    setPasswordError(false);
    setLoading(true);
    await setTimeout(async () => {
      debugger;
      
      
      if (email === "test@gmail.com" && password === "12345") {
        console.log("Credentials Correct");
        setState('done');
        setRedirect(true);
      }
      else{
        setError(true);
        setErrorMessage('Invalid Credentials.');
      }
      console.log(`Username = ${email} and Password = ${password}`);
      setLoading(false);
    }, 1000)
    
    

  };
  return (
    
    redirect ? <Redirect to="/home" /> :
    loading ? <Loader/> :
      <div className="login-box">
        <div className="logo">
          <a href="#"><b>Complain Management System</b></a>
          <small>by <a href="https://www.axialideas.com">Axial Ideas</a></small>
        </div>
        <div className="card">
          <div className="body">
            <form id="sign_in" method="POST">
              <div className="msg">Kindly Sign In to start your session</div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="material-icons">person</i>
                </span>
                <TextBox inputFormClass = {emailError ? "form-line error focused" : "form-line"} 
                inputName = "username" inputIsRequired = {true} inputPlaceholder = "Username" inputErrorClass = "error"
                inputType = "text" inputValue = {email} inputOnChange = {(e) => setEmail(e.target.value)}
                inputErrorMessage = {errorMessage} inputError = {emailError}/>
              </div>
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="material-icons">lock</i>
                </span>
                <TextBox inputFormClass = {passwordError ? "form-line error focused" : "form-line"} 
                inputName = "password" inputIsRequired = {true} inputPlaceholder = "Password" inputErrorClass = "error"
                inputType = "password" inputValue = {password} inputOnChange = {(e) => setPassword(e.target.value)}
                inputErrorMessage = {errorMessage} inputError = {passwordError}/>                
              </div>
              <div className="row input-group">
                  {Error ?
                    <label className="error" style={{textAlign : 'center',fontWeight: 'bolder'}} >{errorMessage}</label>
                    : ""}
                    <TextBox inputFormClass = "col-xs-8 p-t-5" 
                inputName = "rememberme" inputIsRequired = {false}
                inputType = "checkbox" inputErrorMessage = "Remember Me" inputError = {false}/>  
                {/* <div className="col-xs-8 p-t-5">
                  <input type="checkbox" name="rememberme" id="rememberme" className="filled-in chk-col-pink" />
                  <label htmlFor="rememberme">Remember Me</label>
                </div> */}
                <div className="col-xs-4">
                  <button className="btn btn-block bg-pink waves-effect" onClick={login} type="button">SIGN IN</button>
                </div>
              </div>
              <div className="row m-t-15 m-b--20">
                <div className="col-xs-6">
                  <a href="sign-up.html">Register Now!</a>
                </div>
                <div className="col-xs-6 align-right">
                  <a href="forgot-password.html">Forgot Password?</a>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>


  );
}

export default App;
