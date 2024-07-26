import React,{useState ,useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {
    const [username, setusername] = useState('')
    const [password, setpassword] = useState('')

    const {setUser} = useContext(UserContext) 
    const handleSubmit = (e)=>{
        e.preventDefault()
        setUser({username,password})
    }
    return (
        <div className='m-3'>
            <h2 className='p-3 font-mono text-2xl '>Login</h2>
            <input className='p-2 rounded-lg ' type="text" value={username} 
            onChange={(e)=> setusername(e.target.value)}
            placeholder='username' />
            {" "}
            <input className='p-2 rounded-lg' type="text" 
            value={password} 
            onChange={(e)=>setpassword(e.target.value)}
            placeholder='password' />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
