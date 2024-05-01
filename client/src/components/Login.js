import React, {useState, useRef} from 'react';


const Login = () => {

  const [showSignUp, setShowSignUp] = useState(false);
  
  const handleSignUp = () =>{
    // const status = validateData(email.current.value, password.current.value);
  }

  const [errorMsg, setErrorMsg] = useState("");

  const email = useRef("");
  const password = useRef("");



  return (
    <div className='relative'>
        <div>
            <img 
            className='absolute'
            src="https://images.unsplash.com/photo-1554734867-bf3c00a49371?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="backgroundImage"/>
        <div className='absolute top-36 left-[38%] w-3/12 h-[600px] pt-[60px] pr-[40px] pb-[40px] pl-[40px] bg-black opacity-90 rounded-md'>
            
            <h1 className='text-white font-semibold font-sans text-3xl mb-4'>
              {showSignUp?"Sign Up":"Sign In"}
            </h1>

            <form action="" onSubmit={(e)=>e.preventDefault()}>
            {(showSignUp) && <input type="text" placeholder='Your Name' className=' text-lg p-3 my-3 w-full rounded-sm bg-gray-600 text-white outline-none'/>}
            <input ref={email} type="text" placeholder='Email' className=' text-lg p-3 my-3 w-full rounded-sm bg-gray-600 text-white outline-none'/>
            <input ref={password} type="password" placeholder='Password' className='text-lg p-3 my-3  w-full rounded-sm bg-gray-600 text-white outline-none'/>
            <h1 className='text-sm font-medium text-orange-600'>{errorMsg}</h1>
            <button className='p-3 my-7 bg-red-700 opacity-100 w-full rounded-sm text-white font-semibold text-lg'>
            {showSignUp?"Get Started":"Sign In"}
            </button>
            </form>
            <div>
              <p className='text-white cursor-pointer' onClick={handleSignUp}>
              {showSignUp?"Go to Sign In.":"New to Netflix? Sign up now."}
              </p>
            </div>
        </div> 
        </div>
    </div>
  )
}


export default Login;