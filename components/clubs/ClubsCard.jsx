export default function ClubsCard(){
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
                        <h3 className="font-bold text-normal pt-1 truncate overflow-ellipsis">Club Name</h3>
                        </div>

                        <div className="flex">
                            {/* club members */}
                            <p className="font-base text-xs pb-1">5049 members</p>
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
                    uueiiji bueu ieijiji nvnij ijj99 jijjw9ojiuhu9e h9jewjhuhu9h9 u9eh989we9h h89888w0 88euwe90jij j8e89wj9j j8ewwjj8 889vew898 88e 8hv8eu8 8h8e8ehh889vh8e
                </p>
            </div>
        </div>
    )
}