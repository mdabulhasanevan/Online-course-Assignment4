import { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../public/firebase/Firebase.config";

const Login = () => {
  const { loginWithGoogle, loginWithGithub } = useContext(AuthContext);

  const navigate = useNavigate();

  const auth = getAuth(app);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const handleSubmit = () => {
    if (!email && !password) {
      setErr("Fill the all details!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setErr("");
          console.log(userCredential);
          navigate("/products");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/wrong-password") {
            setErr("Wrong password!");
          } else if (error.code == "auth/user-not-found") {
            setErr("Wrong email!");
          } else {
            setErr("");
          }
        });
    }
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/products");
    }
  });


  const handelGoogleLogin = () => {
    console.log("helloo");
    loginWithGoogle()
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  //github
  const handelGithubLogin = () => {
    console.log("helloo");
    loginWithGithub()
      .then((res) => {
        console.log(res);
        navigate("/products");
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">

          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body"> 
            <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter your email" className="input input-bordered" required />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Enter your password" className="input input-bordered" required />
                <p>{err}</p>
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button onClick={handleSubmit} className="btn btn-primary">Login</button>
                <Link  to="/singup">You have don't account? Singup</Link>
              </div>
              <div className="form-control mt-6">
                <button onClick={handelGoogleLogin} className="btn btn-success">Login with Google</button>
<br></br>
                <button onClick={handelGithubLogin} className="btn btn-secondary">Login with Github</button>
              
              
                </div>

              </div> 
          </div>
        </div>
      </div>
    </div>
  )
};
export default Login;
