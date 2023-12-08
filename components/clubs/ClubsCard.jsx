export default function ClubsCard({title, clubJoined, clubDisc}){

    return(
        <div className="flex flex-col p-4 bg-blue-300 rounded-2xl my-2">
            <div className="flex flex-row justify-between">
                <div className="flex flex-row gap-4">
                    <div className="h-12 w-12 rounded-full bg-yellow-100">
                        {/* image */}
                    </div>

                    <div>
                        <div className="flex  w-44">
                        {/* club name */}
                        <h3 className="font-bold text-normal pt-1 truncate overflow-ellipsis">{title}</h3>
                        </div>

                        <div className="flex">
                            {/* club members */}
                            <p className="font-base text-xs pb-1">{clubJoined} members</p>
                        </div>
                    </div>
                </div>

                <div className="flex items-center">
                    {/* join btn */}
                    <button className="bg-black text-white font-medium p-2 h-6 flex items-center rounded-full">Join</button>
                </div>
            </div>
            <div className="flex items-center justify-center font-light text-sm">
                <p className="line-clamp-1 mt-2">
                    {/* club discription */}
                    {clubDisc}
                </p>
            </div>
        </div>
    )
}