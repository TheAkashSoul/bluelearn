export default function FilterDiscussions(){
    return (
        <div className="flex flex-row gap-4">
            
            <button className="flex items-center justify-between px-4 py-2 bg-[#a3d0e2] rounded-full text-sm">For you</button>

            <button className="flex items-center justify-between px-4 py-2 bg-[#FFFFF0] rounded-full text-sm">Popular</button>

            <button className="flex items-center justify-between px-4 py-2 bg-[#FFFFF0] rounded-full text-sm">Latest</button>

        </div>
    )
}