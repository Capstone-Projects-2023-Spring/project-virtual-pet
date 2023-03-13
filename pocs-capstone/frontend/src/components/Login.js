import {useRef,useState,useEffect} from 'react';
import useAuth from '../hooks/useAuth'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import useAxiosPrivate from '../hooks/useAxiosPrivate';
import axios, { axiosPrivate } from '../api/axios';
const LOGIN_URL = '/api/token/';
const USER_DATA_URL = '/user-data/'

const Login = () => {

        const axiosPrivate = useAxiosPrivate()

        const { setAuth, persist, setPersist } = useAuth();

        const navigate = useNavigate();
        const location = useLocation();
        const from = location.state?.from?.pathname || "/loading";

        const emailRef = useRef()
        const errRef = useRef()

        const [email, setEmail] = useState('');
        const [password,setPassword] = useState('');
        const [errMsg, setErrMsg] = useState('');

        const [activeUser,setActiveUser]=useState([false])

        useEffect(()=>{emailRef.current.focus();},[])
        useEffect(()=>{setErrMsg('');},[email,password]) //as unreadable as humanly possible like a tru front-end dev

        const TASK_URL = `/tasks/`
    
        const getTasksB = () => {
            const request = axiosPrivate.get(TASK_URL)
            return request.then(response => response.data)
        }
    
        const createTaskB = (newTask) => {
            const request = axiosPrivate.post(TASK_URL, newTask)
            return request
        }
        
        const getUserData = () => {
            
            const request = axiosPrivate.get(USER_DATA_URL)
            return request
        }
        
        const updateUserData = (userId) => {
            const url = USER_DATA_URL+userId+'/'
            console.log("URL update tutorial ---> ",url)
            const request = axiosPrivate.put(url, {"tutorial":false})
            return request
    
        }

        //create this task then update the user to active
        const tutorialCreateCandy = {
            title:"Let's try completing a task!",
            due_date : new Date().toISOString().slice(0, 10),
            created_date:new Date().toISOString(),
            completed:false,
            active:true,
            task_type:'M',
            task_level:1,
            recurring:false,
            recurring_time_delta:0,
            description: "You can mark the task as complete in the task list.",
            course_id:0,
            assignment_id:0,
        }



        const handleSubmit = async (e) => {
            e.preventDefault();
            
            try {
                const response = await axios.post(LOGIN_URL,
                    JSON.stringify({email,password}), //email: email provided for clarity, first is a key for the value
                    {
                        headers: {'Content-Type':'application/json'},
                        withCredentials:true //odd we need this out
                        //TODO - when we serve on a site, we will need to add an origin to cors serverside
                        
                    }
                );
                
                console.log(response?.data?.access)
                //console.log(response?.data?.refresh)
                console.log(email)
                const access = response?.data?.access;
                //const refreshToken = response?.data?.refresh;
                //const roles = response?.data?.roles; //not a thing we have but we could add later if admin
                setAuth({email,password,access});//,refreshToken});
                localStorage.setItem("refresh",response?.data?.refresh)
                
                /**
                const userData = getUserData();
                console.log("USERDATA----->",(await userData).data[0])
                console.log("USERDATA TUTORIAL--->",(await userData).data[0].tutorial)       
                console.log("USERDATA USERID--->",(await userData).data[0].id)            
                const needsTutorial = (await userData).data[0].tutorial
                const userId = (await userData).data[0].id
                const sanity = 0;

                while(needsTutorial){
                                    //check user is active

                    
                    console.log("INSIDE WHILE NEEDSTUTORIAL")
                    const response = await createTaskB(tutorialCreateCandy).then((response)=>{})
                    //add error checking here!
                    console.log("RESPONSE CREATE TUTORIAL --->",response)
                    updateUserData(userId)
                    sanity = sanity+1;
                    if (sanity>5)
                        break;
                        //TODO - add error handling here
                    const newData = getUserData();
                    console.log("NEW DATA ----> ",(await newData).data[0])
                    console.log("NEW TUTORIAL ----> ",(await newData).data[0].tutorial)
                    needsTutorial = (await newData).data[0].tutorial
                    
                    if(!needsTutorial){
                        const response2 = await axios.post(LOGIN_URL,
                            JSON.stringify({email,password}), //email: email provided for clarity, first is a key for the value
                            {
                                headers: {'Content-Type':'application/json'},
                                withCredentials:true //odd we need this out
                                //TODO - when we serve on a site, we will need to add an origin to cors serverside
                                
                            }
                        );
                        
                        console.log(response2?.data?.access)
                        //console.log(response?.data?.refresh)
                        console.log(email)
                        const access = response2?.data?.access;
                        //const refreshToken = response?.data?.refresh;
                        //const roles = response?.data?.roles; //not a thing we have but we could add later if admin
                        setAuth({email,password,access});//,refreshToken});
                        localStorage.setItem("refresh",response2?.data?.refresh)
                        setEmail('');
                        setPassword('');
                    }

                    
                }
                **/
                setEmail('');
                setPassword('');
                navigate(from, { replace: true });
            
            } catch(err){ //TODO do these error codes really match
                if (!err?.response){
                    setErrMsg('No Server Response');
                }
                else if (err.response?.status === 400){
                    setErrMsg('Missing Username or Password')
                }
                else if (err.response?.status === 401){
                    setErrMsg('Unauthorized')
                }
                else{
                    console.log(err.response.data)
                    setErrMsg('Login Failed')
                }
                errRef.current.focus();
            }

        }

        const togglePersist = () => {
            setPersist(prev => !prev);
        }
    
        useEffect(() => {
            localStorage.setItem("persist", persist);
        }, [persist])


    return (

        <div className="backg">
            <section className='section-login-register'>
                <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                <h1>Sign-in to visit your buddies!</h1>
                <form onSubmit={handleSubmit} className="form-login-register">
                    <label className="label-login-register" htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        ref={emailRef}
                        autoComplete="off"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required
                    />
                    <label className="label-login-register" htmlFor="password">Password:</label>
                    <input 
                    type="password" 
                    id="password"
                    onChange={(e)=>setPassword(e.target.value)}
                    value={password}
                    required
                    />
                    <button className='button-login-register'>Sign In</button>
                    <div className="persistCheck">
                        <input
                            type="checkbox"
                            id="persist"
                            onChange={togglePersist}
                            checked={persist}
                        />
                        <label htmlFor="persist">Trust This Device</label>
                    </div>
                
                </form>
                <p>
                    Need an Account?<br />
                    <span className="line">
                        <Link to='/register'>Sign Up</Link>
                    </span>
                </p>
            </section>
        </div>

    )

}


export default Login