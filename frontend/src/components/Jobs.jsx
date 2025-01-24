import React from 'react';
import Navbar from './shared/Navbar';
import FilterCard from './FilterCard';
import Job from './Job';
import { useSelector } from 'react-redux';

const Jobs = () => {

  const {allJobs} = useSelector(store=>store.job)


  return (
    <div>
      {/* Navbar Component */}
      <Navbar />
      <div className="max-w-[1580px] mx-auto mt-5">
        <div className="flex gap-5">
          {/* Sidebar Filter */}
          <div className="w-1/5">
            <FilterCard />
          </div>
          {/* Jobs Grid */}
          <div className="flex-1 h-[88vh] overflow-y-auto  pb-5">
            <div className="grid grid-cols-3 gap-4">
              {allJobs.map((job) => (
                <div  key={job?._id}>
                  <Job job={job}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
