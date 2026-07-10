"use client"

import {useRef} from "react";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import loanProductsData from "@/data/LoanCardData";
import LoanCard from "./LoanCard";

const LoanCarousel = () =>{
  const plugin = useRef(
    Autoplay({
      delay : 5000,
      stopOnInteraction: true,
      stopOnMouseEnter: true,
    })
  )
  
return (
  <Carousel 
  plugins={[plugin.current]}
  opts = {
    {
      align : "start",
      loop : true,
    }
  }
  className="w-full">

    <CarouselContent className={"-ml-4"}>
      {
        loanProductsData.map((loan) => (
          <CarouselItem key={(loan.id)} className="pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
            <LoanCard loan={loan}/>
          </CarouselItem>
        ))
      }
    </CarouselContent>
    <CarouselPrevious size="lg" className="hidden lg:flex"/>
    <CarouselNext size="lg" className="hidden lg:flex"/>
  </Carousel>

);
}

export default LoanCarousel;