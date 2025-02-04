import { Avatar } from "@radix-ui/react-avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import {  AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button"
import { LogOut, User2 } from "lucide-react";
import {  Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from 'axios';
import { USER_API_END_POINT } from "../utils/constant";
import { toast } from "sonner";
import { setUser } from "../../redux/authSlice";

const Navbar = () => {
  const {user} = useSelector(store=>store.auth);
  
  
  const disPatch = useDispatch();
  const navigate = useNavigate();
  const logoutHandler = async ()=>{
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{withCredentials:true})
      if(res.data.success){
        disPatch(setUser(null));
        navigate('/')
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message)
      
    }
  }
  return (
    <div className="bg-gray-100 shadow-md">
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16 px-6">
        {/* Logo */}
        <div>
          <h1 className="font-bold text-purple-600 text-4xl">Hirezon</h1>
        </div>

        {/* Navbar Links */}
        <div className="flex items-center gap-12">
          <ul className="flex font-medium items-center gap-6">
            {
              user && user.role==="recruiter"?(
                <>
               
              
            
            <li className="cursor-pointer hover:text-purple-600 transition-colors">
            <Link to={"/jobs"}>Jobs
            </Link>
            </li>
            <li className="cursor-pointer hover:text-purple-600 transition-colors">
            <Link to={"/browse"}>Companies
            </Link>
            </li>
                </>
                
              ):
            <>
            <li className="cursor-pointer hover:text-purple-600 transition-colors">
              <Link to={"/"}>Home
              </Link>
              
            </li>
            <li className="cursor-pointer hover:text-purple-600 transition-colors">
            <Link to={"/jobs"}>Jobs
            </Link>
            </li>
            <li className="cursor-pointer hover:text-purple-600 transition-colors">
            <Link to={"/browse"}>Browse
            </Link>
            </li>
            </>
}
          </ul>

          {/* Profile Popover */}
          {
            !user?(
              <div className="gap-4 flex">
                <Link to='/login'><Button className='text-violet-500 hover:text-violet-800' variant='outline'>Login</Button></Link>
                <Link to='/signup'><Button className='bg-violet-500 hover:bg-violet-800' variant=''>SignUp</Button></Link>
                

              </div>
            ):(
          
          <Popover>
            <PopoverTrigger asChild>
              <Avatar className="cursor-pointer">
                <AvatarImage
                  src={user?.profile?.profilePhoto}
                  alt="User Avatar"
                />
                {/* <AvatarFallback>CN</AvatarFallback> */}
              </Avatar>
            </PopoverTrigger>
            <PopoverContent
              className="w-80  p-4 bg-white shadow-lg outline-none  rounded-lg border border-gray-200"
              
            >
              
                <div className="flex  gap-4 " >
                <div>
                <Avatar className="cursor-pointer">
                <AvatarImage
                  src={user?.profile?.profilePhoto}
                  alt="User Avatar"
                />
              </Avatar>
                </div>
                <h3 className="font-medium">{user.fullname}</h3>
              
                </div>
                <div >
                
                <p className="text-sm text-muted-foreground ml-12">{user.role}</p>
              </div>
              {
                user && user.role==="student" &&(
                  <>
                  <div className="flex mt-2">
               <User2/>
              <Button className='outline-none pb-4' variant="link"><Link to={"/profile"}>View Profile</Link></Button>
              </div>
                  </>
                )
              }
                
              <div>
              
              <div className="flex ">
                <LogOut/>
              <Button onClick={logoutHandler} className='outline-none pb-4' variant="link">Logout</Button>
              </div>
              </div>
             
            </PopoverContent>
          </Popover>
            )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;