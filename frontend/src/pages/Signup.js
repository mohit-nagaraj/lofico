import React,{useRef} from 'react'
import './signup.scss'
import { Link } from 'react-router-dom';

const Signup = () => {
    const videoRef= useRef();
const setPlayBack = () => {
    videoRef.current.playbackRate = 0.3;
};
  return (
    <div className='signup'>
        <div className='signupbg-image'><video ref={videoRef} src='/background.mp4' onCanPlay={() => setPlayBack()} type="video/mp4" autoPlay={true} muted={true} loop={true}/></div>
        <div className='signup-container'>
            <Link to='/' className='signuplogo'>LofiCo</Link>
            <div className='signupintro'>Nice to meet you!<span>Signup for a free account</span></div>
            <input type='text' placeholder='Email' id='email'/>
            <input type='text' placeholder='Username' id='username'/>
            <input type='password' placeholder='Password' id='password'/>
            <button>Sign Up</button>
            {/* <a href='/'>Forgot Password?</a> */}
            <div className='alternate'><span>Already have an account?</span> <a href="/login">Login here</a></div>
        </div>
    </div>
  )
}

export default Signup