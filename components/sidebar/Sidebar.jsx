"use client"

import { GoHome } from "react-icons/go";
import { GrProjects } from "react-icons/gr";
import { MdOutlineWorkOutline } from "react-icons/md";
import { MdEventNote } from "react-icons/md";
import { CgProfile } from "react-icons/cg";

import Link from "next/link";
import LogoBL from "../navbar/LogoBL";
import { useRouter } from "next/navigation";

export default function Sidebar(){

    const router = useRouter();



    const handleButtonClick = (buttonName) =>{
        router.push("/"+buttonName)  
    }


    return(
        <div>

            <div className="fixed bottom-0 left-0 md:hidden flex flex-row gap-4 items-center justify-between w-full h-16 px-12 z-10 bg-[#F1F1F4]">

                

                <button
                onClick={() => handleButtonClick('home')} 
                className="focus:bg-[#E1E5FE] p-2 rounded-xl">
                    <GoHome size={24} />
                </button>

                <button
                onClick={() => handleButtonClick('work')}
                className="hover:bg-[#E1E5FE] p-2 rounded-xl focus:bg-[#E1E5FE]">
                    <MdOutlineWorkOutline size={24} />
                </button>

                <button
                onClick={() => handleButtonClick('projects')}
                className="hover:bg-[#E1E5FE] p-2 rounded-xl focus:bg-[#E1E5FE]">
                    <GrProjects size={24} />
                </button>

                <button
                onClick={() => handleButtonClick('events')}
                className="hover:bg-[#E1E5FE] p-2 rounded-xl focus:bg-[#E1E5FE]">
                    <MdEventNote size={24} />
                </button>

                <button
                onClick={() => handleButtonClick('profile')}
                className="hover:bg-[#E1E5FE] p-2 rounded-xl focus:bg-[#E1E5FE]">
                    <CgProfile size={24} />
                </button>

            </div>

            <div className="md:flex md:flex-col hidden fixed h-full z-10 left-0 top-0 w-60 bg-[#F1F1F4] gap-4 px-8">

                <div className="flex px-6 items-center justify-start mt-6 mb-20">
                    <Link href="/">
                        <LogoBL />
                    </Link>
                </div>
                
                <button className="focus:bg-[#E1E5FE] rounded-xl"
                onClick={() => handleButtonClick('home')}>
                    <div className="flex flex-row items-center justify-start gap-2 px-4 py-2 rounded-xl hover:bg-[#E1E5FE] ">
                        <GoHome size={24} />
                        <p>Home</p>
                    </div>
                </button>

                <button className="focus:bg-[#E1E5FE] rounded-xl"
                onClick={() => handleButtonClick('work')}>
                    <div className="flex flex-row items-center justify-start gap-2 hover:bg-[#E1E5FE] px-4 py-2 rounded-xl">
                        <MdOutlineWorkOutline size={24} />
                        <p>Work</p>
                    </div>
                </button>

                <button className="focus:bg-[#E1E5FE] rounded-xl"
                onClick={() => handleButtonClick('projects')}>
                    <div className="flex flex-row items-center justify-start gap-2 hover:bg-[#E1E5FE] px-4 py-2 rounded-xl">
                        <GrProjects size={24} />
                        <p>Projects</p>
                    </div>
                </button>

                <button className="focus:bg-[#E1E5FE] rounded-xl"
                onClick={() => handleButtonClick('events')}>
                    <div className="flex flex-row items-center justify-start gap-2 hover:bg-[#E1E5FE] px-4 py-2 rounded-xl">
                        <MdEventNote size={24} />
                        <p>Events</p>
                    </div>
                </button>

                <button className="focus:bg-[#E1E5FE] rounded-xl"
                onClick={() => handleButtonClick('profile')}>
                    <div className="flex flex-row items-center justify-start gap-2 hover:bg-[#E1E5FE] px-4 py-2 rounded-xl">
                        <CgProfile size={24} />
                        <p>Profile</p>
                    </div>
                </button>

            </div>

        </div>
        
    )
}