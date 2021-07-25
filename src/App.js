import { useState } from 'react';
import './assets/vendor/bootstrap/css/bootstrap.min.css';
import './assets/libs/css/style.css';
import './App.css';
import utility from './assets/scripts/common';

function App() {
  const isValid = false;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);

  const login = () => {
//var email = document.getElementsByName("username")[0].value;
if (!emailError && (email || !utility.ValidateEmail(email))) {
  setEmailError(true);
}
if (emailError && utility.ValidateEmail(email)) {
  setEmailError(false);
}
if (email === "test@gmail.com" && password === "12345") {
  isValid = true;
  console.log("Credentials Correct")
}
console.log(`Username = ${email} and Password = ${password}`);
  };
  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-header">Complain Mangement System</h3>
        <h2 className="splash-description"> by Axial Ideas</h2>
      </div>
      <div className="card-body">
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
