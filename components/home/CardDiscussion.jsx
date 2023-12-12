import Link from "next/link";
import { TbTriangle } from "react-icons/tb";
import { TbTriangleFilled } from "react-icons/tb";

import { TbTriangleInverted } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";

import { IoMdStats } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";

import { IoShareSocialOutline } from "react-icons/io5";


export default function CardDiscussions({title, description, views, likes, comments, category, name, bio}){
    return(
        // Card div
        <div className="flex flex-col px-4 py-4 my-2 bg-slate-300 rounded-3xl">
            {/* Card header */}
            <div className="flex flex-row gap-4 justify-between">
                <div className="flex flex-row gap-2">
                    <div className="h-12 w-12 rounded-full bg-slate-500">
                        {/* img */}
                        
                    </div>

                    <div className="flex flex-col justify-between h-12">
                        <div className="flex  w-28 xl:w-44 md:w-32">
                            {/* name */}
                            <p className="font-bold text-normal pt-1 truncate overflow-ellipsis">{name || "User Name"}</p>
                        </div>
                        <div className="flex  w-28 xl:w-44 md:w-32">
                            {/* bio */}
                            <p className="font-light text-xs pb-1 truncate overflow-ellipsis">{bio || "User Bio"}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    {/* club */}
                    <Link 
                    className="flex bg-yellow-200 p-3 h-8 text-sm rounded-full items-center font-semibold"
                    href="" >{category}</Link>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col mt-3 p-2 justify-center">
                <div className="font-bold text-lg">
                    {/* title */}
                    <h3 className="line-clamp-2">{title}</h3>
                </div>
                <div className="mt-3 font-medium text-base">
                    {/* discription */}
                    <h4 className="line-clamp-3">{description}</h4>
                </div>
                <div className="overflow-hidden mt-6 flex items-center justify-center">
                    {/* img post */}
                </div>
            </div>

            {/* footer */}
            <div className="flex flex-row mt-4 items-center justify-evenly gap-4">
                <div className="flex flex-row gap-2 text-2xl">
                    {/* like */}
                    <button 
                    ><TbTriangle /></button>
                    <button className="hidden"><TbTriangleFilled /></button>
                    <p className="text-xl">{likes
}</p>
                </div>
                <div className="flex flex-row gap-2 text-2xl">
                    {/* dislike */}
                    <button
                    ><TbTriangleInverted /></button>
                    <button className="hidden"><TbTriangleInvertedFilled /></button>
                </div>
                <div className="flex flex-row gap-2 text-2xl">
                    {/* views */}
                    <IoMdStats />
                    <p className="text-xl">{views}</p>
                </div>
                <div className="flex flex-row gap-2 text-2xl">
                    {/* comments */}
                    <button><FaRegComment /></button>
                    <p className="text-xl">{comments}</p>
                </div>
                <div className="flex flex-row gap-2 text-2xl">
                    {/* share */}
                    <button><IoShareSocialOutline /></button>
                </div>
            </div>

        </div>
    )
}