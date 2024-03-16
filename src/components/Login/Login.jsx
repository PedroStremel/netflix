import { useNavigate, Link, useLocation } from "react-router-dom";
import "./Login.scss";
import { initializeApp } from "firebase/app";
import { firebaseConfig } from "../firebaseConfig";
import { getAuth, 
    signInWithEmailAndPassword,
createUserWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";


const Login = () => {

    const app = initializeApp(firebaseConfig);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [ isUserExist, setUserExist ] = useState(false);
    const [ isEmailUsed, setIsEmailUsed ] = useState(false);
    const [ emailValid, setEmailValid ] = useState(true);
    const [ passwordValid, setPasswordValid ] = useState(true);
    const location = useLocation();
    const navigate = useNavigate();
    const auth = getAuth();

    const validation = (fieldName, value) => {
        switch(fieldName) {
            case 'email':
                return value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
            case 'password':
                return value.length >= 6;
            default:
                break;
        }
    }
    const onSignInClickHandler = (e) => {
        e.preventDefault();
        if(page) {
            signInWithEmailAndPassword(auth, email, password)
        .then( auth => {
            if(auth) {
                navigate('/dashboard')
            }
        })
        .catch( error => setUserExist(true));
        }else { 
            createUserWithEmailAndPassword(auth, email, password)
            .then(
                auth => {
                    if(auth){
                        navigate('/dashboard')
                    }
                })
                .catch( error => setIsEmailUsed(true));
            
        }
        
    }

    useEffect(() => {
        setUserExist(false);
        setIsEmailUsed(false);
    }, [location])

    const emailOnChangeHandler = (e) => {
        setEmail(e.targe.value);

    }

const page = location.pathname === '/login' ? true:false;
    return(
        <div className="login">
            <div className="holder">
                <h1 className="text-white">{page ? 'Sign In' : 'Register'}</h1>
                <br/>
                <form>
                    <input className="form-control" value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder="Email" />
                    { !emailValid && <p className="text-danger">Email is invalid</p>}
                    <input className="form-control" value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                    { !passwordValid && <p className="text-danger">Password is invalid</p>}
                    <button className="btn-sign text-white" onClick={onSignInClickHandler}>
                        {page ? 'Sign In' : 'Register'}
                    </button>
                    <br/>
                    {page && <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                        <label className="form-check-label" htmlFor="flexCheckDefault">
                            Remember Me
                        </label>
                    </div>}
                </form>
                <br/>
                <br/>
                { isUserExist && <p className="text-danger">User does not exist | Go for SignUp</p>}
                { isEmailUsed && <p className="text-danger">Email is already in use | Go for Sign In</p>}
                <div className="other-login">
                    <div className="new-account">
                    {page ? 'New at Netflix? ' : 'Exist account'}
                        <Link className="" to={page ? '/register' : '/login'}>
                        {page ? 'Sign Up' : 'Sign In'}
                            </Link>
                    </div>
                </div>
            </div>
            <div className="shadow"></div>
            <img className="concord-img" src="https://assets.nflxext.com/ffe/siteui/vlv3/6e32b96a-d4be-4e44-a19b-1bd2d2279b51/ee068656-14b9-4821-89b4-53b4937d9f1c/IN-en-20220516-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="" />
        </div>
    )
}

export default Login;