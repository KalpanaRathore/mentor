import { useRef, useState, useEffect, useContext } from 'react';
import axios from 'axios';



const LOGIN_URL = ' http://localhost:3004/contact';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();

    }

    const handleLogin = async () => {
        try {
          const response = await axios.get('http://localhost:3004/contact', {
            params: {
              user,
              pwd,
            },
          });
    
          if (response.data.length > 0) {
            setSuccess(true) 
          } else {
            console.error('Invalid email or password');
            alert("Invalid Username or Password")
          }
        } catch (error) {
          console.error('Login failed:', error.message);
        alert("Login Failed")
        }
      };
    
    return (
        <>
        <div className="App">
            {success ? (
                <section className="sect">
                    <h1>You are logged in!</h1>
                    <br />
                    <p>
                        <a href="/">Go to Home</a>
                    </p>
                </section>
            ) : (
                <section className="sect">
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className='form2'>
                        <label htmlFor="username" className='labelSign'>Username:</label>
                        <input
                        className="inputSign"
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password" className='labelSign'>Password:</label>
                        <input
                        className="inputSign"
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        <button className='buttonSign'>Sign In</button>
                    </form>
                    <p>
                        Need an Account?<br />
                        <span className="line">
                            {/*put router link here*/}
                            <a href="#" className='aSign'>Sign Up</a>
                        </span>
                    </p>
                </section>
                
            )}
            </div>
        </>
    )
}

export default Login
