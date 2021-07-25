import { useState } from 'react';
import { Redirect } from 'react-router-dom';
import utility from './assets/scripts/common';
import Loader from './components/Loader';

function App() {
  const [email, setEmail] = useState('');
  const [redirect, setRedirect] = useState(false)
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  const login = async () => {
    setLoading(true);
    await setTimeout(async () => {
      //var email = document.getElementsByName("username")[0].value;
if (!emailError && (email || !utility.ValidateEmail(email))) {
  setEmailError(true);
}
if (emailError && utility.ValidateEmail(email)) {
  setEmailError(false);
}
if (email === "test@gmail.com" && password === "12345") {
  console.log("Credentials Correct")
  setRedirect(true);
}
console.log(`Username = ${email} and Password = ${password}`);
setLoading(false);
    },1000)

  };
  return (
    redirect ? <Redirect to="/home"/> :
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Complain Mangement System</h3>
        <h2 className="splash-description"> by Axial Ideas</h2>
      </div> 
      <div className="card-body"> 
      {loading ? <Loader /> : null}
        <form>
          <div className="form-group">
            <input value={email} onChange={(e) => setEmail(e.target.value)}
              name="username" type="text" placeholder="Email or Username" required
              className={`form-control form-control-lg ${emailError && "is-invalid"}`} />
            {emailError &&
              <div className="invalid-feedback">
                Please provide a valid email address.
              </div>
            }
          </div>
          <div className="form-group">
            <input value={password} onChange={(e) => setPassword(e.target.value)}
              name="password" className="form-control form-control-lg" type="password" placeholder="Password" required />
          </div>

          <button type="button" className="btn btn-primary btn-lg btn-block" onClick={login} >Sign-In</button>
        </form>
      </div>
      <section className="card-footer bg-white p-0">
        <div className="card-footer-item card-footer-item-bordered">
          <a href="www.axialideas.com" className="footer-link">Create An Account</a>
        </div>
        <div className="card-footer-item card-footer-item-bordered">
          <a href="https://www.axialideas.com" className="footer-link">Forgot Password</a>
        </div>
      </section>
    </div>
  );
}

export default App;
