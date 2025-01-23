import React, { useState } from 'react';
import Navbar from './shared/Navbar';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { Label } from './ui/label';
import { Mail, Pen, Phone } from 'lucide-react';
import AppliedJobTable from './AppliedJobTable';
import { Button } from './ui/button';
import UpdateProfileDialog from './UpdateProfileDialog';
import { useSelector } from 'react-redux';

const Profile = () => {
  // const user = {
  //     fullname: "John Doe",
  //     email: "johndoe@example.com",
  //     phoneNumber: "123-456-7890",
  //     profile: {
  //         bio: "A passionate developer with expertise in web technologies.",
  //         skills: ["Html", "Css", "Javascript", "Reactjs"],
  //         resume: "https://example.com/resume.pdf",
  //         resumeOriginalName: "John_Doe_Resume.pdf"
  //     }
  // };

  const [open, setOpen] = useState(false);
  const { user } = useSelector(store => store.auth);

  return (
    <div>
      <Navbar />
      <div className='max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-8'>
        <div className='flex justify-between'>
          <div className='flex items-center gap-4'>
            <Avatar className="h-24 w-24">
              <AvatarImage className="h-24 w-24" src={user?.profile?.profilePhoto} alt="profile" />
            </Avatar>
            <div>
              <h1 className='font-medium text-xl'>{user.fullname}</h1>
              <p>{user.profile.bio}</p>
            </div>

          </div>
          <Button onClick={() => (setOpen(true))} className="text-right bg-gray-400 text-4xl hover:bg-blue-500 mt-4 mr-4 text-black "><Pen /></Button>
        </div>
        <div className='my-5'>
          <div className='flex items-center gap-3 my-2'>
            <Mail />
            <span>Email:</span>
            <span>{user.email}</span>
          </div>
          <div className='flex items-center gap-3 my-2'>
            <Phone />
            <span>Phone:</span>
            <span>{user.phoneNumber}</span>
          </div>
        </div>
        <div className='my-5'>
          <h1>Skills</h1>
          <div className='flex items-center gap-1'>
            {
              user.profile.skills.length !== 0 ? user.profile.skills.map((item, index) => <Badge className='bg-blue-600' key={index}>{item}</Badge>) : <span>NA</span>
            }
          </div>
        </div>
        <div className='grid w-full max-w-sm items-center gap-1.5'>
          <Label className="text-md font-bold">Resume</Label>
          {
            user?.profile?.resume ? <a target='blank' download={user?.profile?.resume} href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer'>{user.profile.resumeOriginalName}</a> : <span>NA</span>
          }
        </div>
      </div>
      <div className='max-w-4xl mx-auto bg-white rounded-2xl'>
        <h1 className='font-bold text-lg my-5'>Applied Jobs</h1>

        <AppliedJobTable />



      </div>
      <UpdateProfileDialog open={open} setOpen={setOpen} />
    </div>
  );
};

export default Profile;
