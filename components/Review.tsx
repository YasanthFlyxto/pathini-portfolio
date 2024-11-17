import { testimonials } from "../data";
import { InfiniteMovingCards } from "./ui/InfinteMovingCards";


export default function Review() {
    return (
        <div className="py-20" id="testimonials">
            <h1 className="heading">
                 My Impact In 
                <span className="text-purple"> Action</span>
            </h1>
            <div className="flex flex-col items-center mt-10">
                
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
                
            </div>
        </div>
    );
  }
  