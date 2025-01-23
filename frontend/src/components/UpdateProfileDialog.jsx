import React, { useState } from 'react'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from './ui/dialog'
import { Label } from '@radix-ui/react-label'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { USER_API_END_POINT } from './utils/constant';
import axios from 'axios';
import { setUser } from '../redux/authSlice';
import { toast } from 'sonner';
const UpdateProfileDialog = ({ open, setOpen }) => {
  const [loading, setLoading] = useState(false);
  const { user } = useSelector(store => store.auth);

  const [input, setInput] = useState({
    fullname: user?.fullname,
    email: user?.email,
    phoneNumber: user?.phoneNumber,
    bio: user?.profile?.bio,
    skills: user?.profile?.skills?.map(skill => skill),
    file: ''
  });
  const dispatch = useDispatch();
  const eventChangeHandler = (e) => {
    console.log(e.target.value)
    setInput({ ...input, [e.target.name]: e.target.value });
  }
  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("bio", input.bio);
    formData.append("skills", input.skills);
    if (input.file) {
      formData.append("file", input.file)
    }
    try {
      const token = localStorage.getItem("token");
      console.log("Token from frontend", token)
      const res = await axios.post(`${USER_API_END_POINT}/profile/update`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          "authorization": `${token}`
        },
      });
      if (res.data.success) {
        dispatch(setUser(res.data.user));
        toast.success(res.data.message);
      }

    } catch (error) {
      console.log('This is error', error);
      toast.error(error.response.data.message)

    }
    setOpen(false);
    console.log(input);
  }

  const fileChangeHandler = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Selected file:', file);
      setInput((prevState) => ({ ...prevState, file }));
    }
  }

  return (
    <div>
      <Dialog open={open}>
        <DialogContent className='sm:max-w-[425px] ' onInteractOutside={() => setOpen(false)}>
          <DialogHeader>
            <DialogTitle>
              Update Profile
            </DialogTitle>
          </DialogHeader>
          <form onSubmit={submitHandler} className='  ' action="">
            <div className='grid gap-4 py-4'>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='name' className='font-semibold text-right'>Name</Label>
                <input type="text"
                  name='fullname'
                  value={input.fullname}
                  onChange={eventChangeHandler}
                  className='col-span-3 px-2 text-sm  rounded-lg  border-2'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='email' className='text-right font-semibold'>Email</Label>
                <input type="text"
                  name='email'
                  value={input.email}
                  onChange={eventChangeHandler}
                  className='col-span-3 rounded-lg text-sm  px-2  border-2'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='Number' className='text-right font-semibold'>Number</Label>
                <input type="text"
                  name='phoneNumber'
                  value={input.phoneNumber}
                  onChange={eventChangeHandler}
                  className='col-span-3 rounded-lg text-sm  px-2  border-2'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='Bio' className='text-right font-semibold'>Bio</Label>
                <input type="text"
                  name='bio'
                  value={input.bio}
                  onChange={eventChangeHandler}
                  className='col-span-3 rounded-lg text-sm  px-2  border-2'
                />
              </div>

              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='Skills' className='text-right font-semibold'>Skills</Label>
                <input type="text"
                  name='skills'
                  value={input.skills}
                  onChange={eventChangeHandler}
                  className='col-span-3 rounded-lg text-sm  px-2  border-2'
                />
              </div>
              <div className='grid grid-cols-4 items-center gap-4'>
                <Label htmlFor='file' className='text-right font-semibold'>Resume</Label>
                <input type="file"
                  name='file'
                  onChange={fileChangeHandler}
                  accept='application/pdf'
                  className='col-span-3 rounded-lg text-sm  px-2  border-2'
                />
              </div>
            </div>
            <DialogFooter>
              {
                loading ? <Button className="w-full my-4"> <Loader2 className='mr-2 h-4 w-4 animate-spin' /> Please Wait</Button> : <Button type="submit" className="w-full my-4">
                  Update
                </Button>
              }
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default UpdateProfileDialog
