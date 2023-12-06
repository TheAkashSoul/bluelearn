import Link from "next/link";
import LogoBL from "./LogoBL";

export default function Navbar(){
    return(
        <header className="flex fixed top-0 left-0 w-full">
            <div className="hidden md:flex md:flex-row w-full h-20 bg-[#FFFFFF] z-5 border-b border-slate">

                
                <nav>

                </nav>
            </div>

            <div className="md:hidden flex flex-row w-full h-16 bg-[#FFFFFF] z-5 border-b border-slate">
                <div className="flex px-6 items-center">
                    <Link href="/">
                        <LogoBL />
                    </Link>
                </div>
                
                

            </div>
        </header>
    )
}