import PageBtn from "@/components/home/PageBtn";
import RootLayout from "../layout";
import FilterDiscussions from "@/components/home/FilterDiscussions";
import CardDiscussions from "@/components/home/CardDiscussion";
import Link from "next/link";

export default function Home(){

    

    return(
            <main>
                <div className="flex flex-col md:ml-60 md:pl-6 mt-16 md:mt-20 md:mr-20 lg:mr-[30%]">
                    <div className="flex flex-col">

                        <div className="flex flex-row gap-4 items-center justify-evenly h-12 w-full border-b border-black">

                            <Link href="/home"><PageBtn BtnName = "Discussions" /></Link>
                            <Link href="/clubs"><PageBtn BtnName = "Clubs" /></Link>

                        </div>

                        <div className="mx-4 my-2">
                            <FilterDiscussions />
                        </div>

                        <div className="mb-16 px-2">
                        <CardDiscussions />
                        <CardDiscussions />
                        <CardDiscussions />
                        <CardDiscussions />
                        <CardDiscussions />
                    </div>
                    </div>

                    
                </div>

                
            </main>
    )
}