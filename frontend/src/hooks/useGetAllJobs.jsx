import axios from "axios";
import React, { useEffect } from "react";
import { JOB_API_END_POINT } from "../components/utils/constant";
import { useDispatch } from "react-redux";
import { setAllJobs } from "../redux/jobSlice";

const useGetAllJobs = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchAllJobs = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get`, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `${token}`
          },
        });
        if (res.data.success) {
          dispatch(setAllJobs(res.data.jobs));
          console.log(res.data.jobs)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchAllJobs();
  }, [dispatch]);
};

export default useGetAllJobs;
