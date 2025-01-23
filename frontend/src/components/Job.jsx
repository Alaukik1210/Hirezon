import React from 'react';
import { Button } from './ui/button';
import { Bookmark } from 'lucide-react';
import { Avatar, AvatarImage } from './ui/avatar';
import { Badge } from './ui/badge';
import { useNavigate } from 'react-router-dom';

const Job = () => {

  const navigate = useNavigate();
  const jobId = "ieoskfes"
  return (
    <div className="p-5 rounded-md shadow-xl bg-white border border-gray-100">
      {/* Header: Posted Time and Bookmark */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">2 days ago</p>
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
          <h1 className="font-medium text-lg">Placeholder Company</h1>
          <p className="text-sm text-gray-500">India</p>
        </div>
      </div>

      {/* Job Title and Description */}
      <div>
        <h1 className="font-bold text-lg my-2">Frontend Developer</h1>
        <p className="text-sm text-gray-600">
          This is a brief description of the job role and its requirements.
        </p>
      </div>

      {/* Job Details */}
      <div className="flex items-center gap-2 mt-4">
        <Badge className="text-blue-700 font-bold" variant="ghost">
          5 Positions
        </Badge>
        <Badge className="text-[#F83002] font-bold" variant="ghost">
          Full-Time
        </Badge>
        <Badge className="text-[#7209b7] font-bold" variant="ghost">
          20 LPA
        </Badge>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-4 mt-4">
        <Button onClick={()=>{navigate(`/JobDiscription/${jobId}`)}} variant="outline">Details</Button>
        <Button className="bg-[#7209b7] text-white">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
