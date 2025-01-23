import React,{useState} from 'react';
import Navbar from '../shared/Navbar';
import { Label } from '../ui/label';
import { Input } from '../ui/input';
import { RadioGroup } from '../ui/radio-group';
import { Button } from '../ui/button';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { USER_API_END_POINT } from '../utils/constant';
import { toast } from 'sonner';
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../../redux/authSlice';
import store from '../../redux/store';
import { Loader2 } from 'lucide-react';

const Login = () => {
  const [input,setInput] = useState({
      
      email:"",
      
      password:"",
      role:""
     
  
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {loading} =useSelector(store=>store.auth); 
  
    const changeEventHandler =(e)=>{
      setInput({...input,[e.target.name]:e.target.value});
  
    }
    
    const submitHandler =async (e)=>{
      e.preventDefault();
      try {
        dispatch(setLoading(true));
        const res =await axios.post(`${USER_API_END_POINT}/login`,input,{
          headers:{
            "Content-Type":"application/json",
          }
        })
        if(res.data.success){
          dispatch(setUser(res.data.user));
          toast.success(res.data.message);
          navigate("/")
        }
      } catch (error) {
        console.log(error);
        // toast.error(error.res.data.message)
      }finally{
        dispatch(setLoading(false))
      }
    }
  return (
    
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Login</h1>
          <div className="my-2">
            <Label htmlFor="email">Email</Label>
            <Input
               id="email"
               type="email"
               value={input.email}
               name="email"
               onChange={changeEventHandler}
               placeholder="patel@gmail.com"
               className="mt-2"
            />
          </div>

          <div className="my-2">
            <Label htmlFor="password">Password</Label>
            <Input
             id="password"
             type="password"
             value={input.password}
             name="password"
             onChange={changeEventHandler}
             placeholder="Your password"
             className="mt-2"
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex items-center gap-4 my-5">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role==='student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="student"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role==='recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                  id="recruiter"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>
          {
            loading?<Button  className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please Wait</Button>:<Button type="submit" className="w-full my-4">
            Login
          </Button>
          }
          
          <span className="text-sm">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600">
              Signup
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
  