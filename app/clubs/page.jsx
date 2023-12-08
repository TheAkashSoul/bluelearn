"use client"

import Link from "next/link";
import PageBtn from "@/components/home/PageBtn";
import FilterClubsBtn from "@/components/clubs/FilterClubsBtn";
import ClubsCard from "@/components/clubs/ClubsCard";
import { useEffect, useState } from "react";

export default function Clubs(){

    const [clubData, setClubData] = useState([]);

    useEffect(() => {
        async function fetchClubsData() {
          try {
            const response = await fetch('/api/clubs');
            if (response.ok) {
              const data = await response.json();
              setClubData(data.clubs);
            } else {
              console.error('Failed to fetch club data');
            }
          } catch (error) {
            console.error('Error fetching clubs:', error);
          }
        }
    
        fetchClubsData();
      }, []);



    return(

            <main>
            <div className="flex flex-col md:ml-60 md:pl-6 mt-16 md:mt-20 md:mr-20 lg:mr-[30%]">
                    <div className="flex flex-col">

                        <div className="flex flex-row gap-4 items-center justify-evenly h-12 w-full border-b border-black">

                        <Link href="/home"><PageBtn BtnName = "Discussions" /></Link>
                        <Link href="/clubs"><PageBtn BtnName = "Clubs" /></Link>

                        </div>

                        <div className="mx-4 my-2">
                            <FilterClubsBtn />
                        </div>

                        <div className="mb-16 px-2">
                            {
                                clubData.map((club, index) => (
                                    <ClubsCard key={index} title={club.clubName} clubJoined={club.membersJoined} clubDisc={club.shortNote} />
                                ))
                            }
                        </div>
                    </div>

                    
                </div>                
            </main>
    )
}