import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import { Button } from "./ui/button";

const category = [
  "Frontend Developer",
  "Backend Devloper",
  "Graphic Designer",
  "FullStack Developer",
  "Data Science",
];

const CatogeryCarousal = () => {
 
  return (
    <div>
      <Carousel className="w-full max-w-xl mx-auto my-20">
        <CarouselContent>
          {category.map((cat, index) => (
            <CarouselItem className="md:basis-1/2 lg-basis-1/3"  >
<Button  className='rounded-full text-white  bg-[#7209b7]'>{cat}</Button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>   
      </Carousel>
    </div>
  );
};

export default CatogeryCarousal;
