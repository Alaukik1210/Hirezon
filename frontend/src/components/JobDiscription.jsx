import React, { useEffect } from "react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { JOB_API_END_POINT } from "./utils/constant";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {setSingleJobs} from '../redux/jobSlice'

const JobDescription = () => {
  const params = useParams();
  const jobId = params.id;
  const { singleJob } = useSelector((store) => store.job);
  const isApplied = true;
  const {user} = useSelector(store=>store.auth);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchSingleJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, {
            
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            authorization: `${token}`,
          },
        });
        console.log(res);
        if (res.data.success) {
          dispatch(setSingleJobs(res.data.job));
          console.log(res.data.jobs);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchSingleJobs();
  }, [ jobId,dispatch, user?._id]);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-bold text-xl">{}</h1>
          <div className="flex items-center gap-2 mt-4">
            <Badge className={"text-blue-700 font-bold"} variant="ghost">
              X Positions
            </Badge>
            <Badge className={"text-[#F83002] font-bold"} variant="ghost">
              Job Type
            </Badge>
            <Badge className={"text-[#7209b7] font-bold"} variant="ghost">
              Salary LPA
            </Badge>
          </div>
        </div>
        {isApplied ? (
          <Button className="rounded-lg bg-[#7209b7] hover:bg-[#5f32ad]">
            Apply Now
          </Button>
        ) : (
          <Button className="rounded-lg bg-gray-500 hover:bg-[#5f32ad]">
            Applied
          </Button>
        )}
      </div>
      <h1 className="border-b-2 border-b-gray-300 font-medium py-4">
        Job Description
      </h1>
      <div className="my-4">
        <h1 className="font-bold my-1">
          Role:{" "}
          <span className="pl-4 font-normal text-gray-800">Job Title</span>
        </h1>
        <h1 className="font-bold my-1">
          Location:{" "}
          <span className="pl-4 font-normal text-gray-800">Job Location</span>
        </h1>
        <h1 className="font-bold my-1">
          Description:{" "}
          <span className="pl-4 font-normal text-gray-800">
            Job Description
          </span>
        </h1>
        <h1 className="font-bold my-1">
          Experience:{" "}
          <span className="pl-4 font-normal text-gray-800">X yrs</span>
        </h1>
        <h1 className="font-bold my-1">
          Salary:{" "}
          <span className="pl-4 font-normal text-gray-800">Salary LPA</span>
        </h1>
        <h1 className="font-bold my-1">
          Total Applicants:{" "}
          <span className="pl-4 font-normal text-gray-800">0</span>
        </h1>
        <h1 className="font-bold my-1">
          Posted Date:{" "}
          <span className="pl-4 font-normal text-gray-800">YYYY-MM-DD</span>
        </h1>
      </div>
    </div>
  );
};

export default JobDescription;
