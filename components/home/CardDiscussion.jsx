import Link from "next/link";
import { TbTriangle } from "react-icons/tb";
import { TbTriangleFilled } from "react-icons/tb";

import { TbTriangleInverted } from "react-icons/tb";
import { TbTriangleInvertedFilled } from "react-icons/tb";

import { IoMdStats } from "react-icons/io";

import { FaRegComment } from "react-icons/fa";

import { IoShareSocialOutline } from "react-icons/io5";


export default function CardDiscussions(){
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
                        <div className="flex  w-44">
                            {/* name */}
                            <p className="font-bold text-normal pt-1 truncate overflow-ellipsis">User Name  dbhbdnuud jdnujijidi n nijijiji nfijijfij ifii iejjfe9o 0kv00 </p>
                        </div>
                        <div className="flex  w-44">
                            {/* bio */}
                            <p className="font-light text-xs pb-1 truncate overflow-ellipsis">uuhuhuu huhh ujjd8jdv hjf8j88j 88u8hh hh8d8</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center">
                    {/* club */}
                    <Link 
                    className="flex bg-yellow-200 p-3 h-fit text-sm rounded-full items-center font-semibold"
                    href="" >Startup Club</Link>
                </div>
            </div>

            {/* content */}
            <div className="flex flex-col mt-3 p-2 justify-center">
                <div className="font-bold text-lg">
                    {/* title */}
                    <h3 className="line-clamp-2">Title is displayed here jijjii jijijj9 jj9j9 jj9j9 jjjdjj9j 9j9j9j9j9j9vj99vj9j9jv9j99e9j 9j999 j9j9jej9j9 9j99 j9jijjj9jjjcojc9</h3>
                </div>
                <div className="mt-3 font-medium text-base">
                    {/* discription */}
                    <h4 className="line-clamp-3">description is here nujnujji nn88h h8je8j8hh h8h8ej8hhh 8h8h8he8h8h8h8h8h8h h8h8h8eh8h8 h8h8he8h8h8h8h8h 8h8h8h9e98xnosih9 uhehhcuihenby 8enjiu h9nneuesu 7h8hehubygdzhuub uu8h8f8heb77 hueg78h b7e8h 88yhe8h8 8ehe8</h4>
                </div>
                <div className="h-80 w-[100%] overflow-hidden mt-6 bg-slate-900 flex items-center justify-center">
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
                    <p className="text-xl">0</p>
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
                    <p className="text-xl">8</p>
                </div>
                <div className="flex flex-row gap-2 text-2xl">
                    {/* comments */}
                    <button><FaRegComment /></button>
                    <p className="text-xl">6</p>
                </div>
                <div className="flex flex-row gap-2 text-2xl">
                    {/* share */}
                    <button><IoShareSocialOutline /></button>
                </div>
            </div>

        </div>
    )
}