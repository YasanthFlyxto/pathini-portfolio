import { FaLocationArrow } from "react-icons/fa";
import { projects } from "../data";
import { PinContainer } from "./ui/3d-pin";

export default function RecentProjects() {
    return (
      
        <div className="py-20">
            <h1 className="heading">
                A small section of {''}
                <span className="text-purple">recent projects</span>
            </h1>
            <div className="flex flex-wrap items-center justify-center p-4 gap-x-20 gap-y-20 mt-20">
                {projects .map(({id,title,des,img,iconLists,link})=>(
                    <div key={id} className=" sm:h-[41rem] lg:min-h-[32.5rem] h-[32rem] flex items-center justify-center sm:w-[570px] w-[80vw] lg:h-[30vh] mb-5">
                        <PinContainer title={link} href={link}>
                            <div className="relative flex items-center justify-center sm:w-[570px] sm:h-[40vh] w-[80vw] overflow-hidden h-[30vh] ">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                                    <img src="/bg.png" alt="bg-img" />
                                </div>
                                    <img src={img} alt={title} className="z-10 absolute bottom-0"/>
                            </div>
                            <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1 mt-2">
                                {title}
                            </h1>
                            <p className="lg:text-lg lg:font-normal font-light text-base line-clamp-2 mt-1 leading-tight ">
                                {des}
                            </p>
                            <div className="flex items-center justify-between mt-7 mb-3">
                                <div className="flex items-center">
                                    {iconLists.map((icon)=>(
                                        <div key={icon} className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center
                                        ">
                                            <img src={icon} alt={icon} className="p-2"/>
                                        </div>
                                    ))}
                                </div>
                                <div className="flex justify-center items-center">
                                    <p className="flex text-xs lg:text-base text-purple">Check Live Site</p>
                                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                                </div>
                            </div>
                        </PinContainer>
                    </div>
                ))}
            </div>

        </div>
    );
  }