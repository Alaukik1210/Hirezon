import axios from "axios";
import React, { useEffect } from "react";
import { COMPANY_API_END_POINT } from "../components/utils/constant";
import { useDispatch } from "react-redux";
import { setSingleCompany } from "../redux/companySlice";

const useGetCompanyById = (companyID) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchSingleCompany = async () => {
      const token = localStorage.getItem("token");
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get${companyID}`, {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            "authorization": `${token}`
          },
        });
        if (res.data.success) {
          dispatch(setSingleCompany(res.data.company));
          console.log(res.data.jobs)
        }
      } catch (error) {
        console.log(error);
      }
    }
    fetchSingleCompany();
  }, [dispatch]);
};




export default useGetCompanyById
