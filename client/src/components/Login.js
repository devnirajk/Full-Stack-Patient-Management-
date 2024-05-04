import React, {useState, useRef} from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const email = useRef("");
  const password = useRef("");
  

  const handleSubmit = async (event) => {
    // event.preventDefault(); 
  
    try {
      const response = await fetch('http://localhost:8080/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.current.value, password: password.current.value }),
      });
      if (response.ok) {
        //  successful response
        console.log('Login successful');
      } else {
        //  error response
        setErrorMsg('Login failed');
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  
  const handleSignUp = async () =>{
    await handleSubmit();
  }


  return (
    <div className='relative'>
        <div>
            <img 
            className='absolute'
            src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="backgroundImage"/>
        <div className='absolute top-36 left-[38%] w-3/12 h-[600px] pt-[60px] pr-[40px] pb-[40px] pl-[40px] bg-black opacity-90 rounded-md'>
            
      
            <h1 className='text-white font-semibold text-2xl'>Sign In</h1>
            <form action="" onSubmit={(e)=>e.preventDefault()}>
            <input ref={email} type="text" placeholder='Email' className=' text-lg p-3 my-3 w-full rounded-sm bg-gray-600 text-white outline-none'/>
            <input ref={password} type="password" placeholder='Password' className='text-lg p-3 my-3  w-full rounded-sm bg-gray-600 text-white outline-none'/>
            <h1 className='text-sm font-medium text-orange-600'>{errorMsg}</h1>
            <Link to="/patients">
            <button
            onClick={handleSignUp}
            className='p-3 my-7 bg-red-700 opacity-100 w-full rounded-sm text-white font-semibold text-lg'>
            Sign In
            </button>
            </Link>
            </form>
            <div>
            <h1>{errorMsg}</h1>            
            </div>
        </div> 
        </div>
    </div>
  )
}


export default Login;