import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = ({job}) => {

  const navigate = useNavigate();
  // const jobId = "ieoskfes"
  const dayAgoFunction = (mongodbTime) => {
    const createdAt = new Date(mongodbTime); // Convert MongoDB time to a Date object
    if (isNaN(createdAt.getTime())) {
      throw new Error("Invalid MongoDB time format");
    }
  
    const currentTime = new Date(); // Get the current time
    const timeDifference = currentTime - createdAt; // Calculate the time difference in milliseconds
    return Math.floor(timeDifference / (1000 * 60 * 60 * 24)); // Convert to days and round down
  };
  dayAgoFunction(job?.createdAt);
  console.log('message',job);


  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      {/* Header: Posted Time and Bookmark */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{dayAgoFunction(job?.createdAt)=='0'?'today':`${dayAgoFunction(job?.createdAt)}days ago` } </p>
        <Button variant="outline" className="rounded-full" size="icon">
          <Bookmark />
        </Button>
      </div>

      {/* Company Information */}
      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="outline" size="icon">
          <Avatar>
            <AvatarImage src="https://imgs.search.brave.com/IrjckpSv0CZsbpLfnrNzwh401w4BcZjUvJYL3U9I8cI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTI5/NzE1Mjg1NS92ZWN0/b3IvbG9nby13aXRo/LXRoZS1sZXR0ZXIt/Yy5qcGc_cz02MTJ4/NjEyJnc9MCZrPTIw/JmM9XzZuSE9ReTNn/VjE2ZENIeGpUUUhM/b25JZWdWQU9YSm43/a012ZXJHdEZ3OD0" />
          </Avatar>
        </Button>
        <div>
          <h1 className="font-medium text-lg">{job?.company?.name}</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div>
        <h1 className="font-bold text-lg my-2">{job.title}</h1>
        <p className="text-sm text-gray-600">
        { job.description}
        </p>
      </div>

      {/* Job Details */}
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          {job.position}
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
         {job.jobType}
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
         Rs {job.salary} per month 
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>{navigate(`/JobDiscription/${job?._id}`)}} variant="outline">Details</Button>
        <Button className="bg-[#7209b7] text-white">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
