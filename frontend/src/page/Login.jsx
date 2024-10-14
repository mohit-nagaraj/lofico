import './login.scss'
import { Link } from 'react-router-dom';

const Login = () => {

    return (
        <div className='login'>
            <div className='bg-image'><video src='/background.mp4' type="video/mp4" autoPlay={true} muted={true} loop={true} /></div>
            <div className='login-container'>
                <Link to='/' className='logo'>LofiCo</Link>
                <div className='intro'>Welcome back!<span>Login in to your account</span></div>
                <input type='text' placeholder='Email' id='email' />
                <input type='password' placeholder='Password' id='password' />
                <button>Login</button>
                <a href='/'>Forgot Password?</a>
                <div className='alternate'><span>Dont have an account?</span> <a href="/signup">Sign up for free</a></div>
            </div>
        </div>
    )
}

export default Login