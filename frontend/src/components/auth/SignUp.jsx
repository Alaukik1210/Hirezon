import React, { useState } from 'react';
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
import { setLoading } from '../../redux/authSlice';
import { Loader2 } from 'lucide-react';


const Signup = () => {

  const [input,setInput] = useState({
    fullname: "",
    email:"",
    phoneNumber:"",
    password:"",
    role:"",
    file:""

  });

  const navigate = useNavigate();
  const {loading} = useSelector(store=>store.auth);
  const dispatch = useDispatch();

  const changeEventHandler =(e)=>{
    setInput({...input,[e.target.name]:e.target.value});

  }
  const changeFileHandler=(e)=>{
    setInput({...input,file:e.target.files?.[0]});
  }
  const submitHandler =async (e)=>{
    e.preventDefault();
    const formdata = new FormData(); // Create an instance of FormData
    formdata.append("fullname", input.fullname); // Use formdata.append
    formdata.append("email", input.email);
    formdata.append("phoneNumber", input.phoneNumber);
    formdata.append("password", input.password);
    formdata.append("role", input.role);
    if(input.file){
      formdata.append("file", input.file);
    }
    try {
      dispatch(setLoading(true));
      const res =await axios.post(`${USER_API_END_POINT}/register`,formdata,{
        headers:{
          "Content-Type":"multipart/form-data"
        },
        
      })
      console.log(res)
      if(res.data.success){
        toast.success(res.data.message);
        navigate("/");
      }
      
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
    }
   
    
  }

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center max-w-7xl mx-auto">
        <form onSubmit={submitHandler} className="w-1/2 border border-gray-200 rounded-md p-4 my-10">
          <h1 className="font-bold text-xl mb-5">Sign Up</h1>

          <div className="my-2">
            <Label htmlFor="fullname">Full Name</Label>
            <Input
              id="fullname"
              type="text"
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
              placeholder="Your full name"
              className="mt-2"
            />
          </div>

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
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              value={input.phoneNumber}
              name="phoneNumber"
              onChange={changeEventHandler}
              type="text"
              placeholder="8080808080"
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
                  id="student"
                  className="cursor-pointer"
                />
                <Label htmlFor="student">Student</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  checked={input.role==='recruiter'}
                  onChange={changeEventHandler}
                  value="recruiter"
                  id="recruiter"
                  className="cursor-pointer"
                />
                <Label htmlFor="recruiter">Recruiter</Label>
              </div>
            </RadioGroup>
            <div className="flex items-center gap-2">
              <Label htmlFor="profile">Profile</Label>
              <Input
                id="profile"
                // name="profilePicture"
                onChange={changeFileHandler}
                accept="image/*"
                type="file"
                className="cursor-pointer"
              />
            </div>
          </div>

          {
            loading?<Button  className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please Wait</Button>:<Button type="submit" className="w-full my-4">
            Signup
          </Button>
          }

          <span className="text-sm">
            Already have an account?{' '}
            <Link to="/login" className="text-blue-600">
              Login
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Signup;
