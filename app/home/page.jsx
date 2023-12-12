"use client"

import PageBtn from "@/components/home/PageBtn";
import FilterDiscussions from "@/components/home/FilterDiscussions";
import CardDiscussions from "@/components/home/CardDiscussion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home(){

    const [postsData, setPostsData] = useState([]);

    useEffect(() => {
        async function fetchPostsData() {
          try {
            const response = await fetch('/api/posts');
            if (response.ok) {
              const data = await response.json();
              setPostsData(data.posts);
            
            } else {
              console.error('Failed to fetch club data');
            }
          } catch (error) {
            console.error('Error fetching clubs:', error);
          }
        }
    
        fetchPostsData();
      }, []);

    //   console.log(postsData)

    // Shuffle function using Fisher-Yates algorithm
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    
    // Shuffle the postsData array
    const shuffledPosts = shuffleArray(postsData);

    return(
            <main>
                <div className="flex flex-col md:ml-60 md:pl-6 mt-16 md:mt-20 md:mr-20 lg:mr-[30%]">
                    <div className="flex flex-col">

                        <div className="flex flex-row gap-4 items-center justify-between px-20 h-12 w-full">

                            <Link className="font-bold border-b border-black" href="/home"><PageBtn BtnName = "Discussions" /></Link>
                            <Link href="/clubs"><PageBtn BtnName = "Clubs" /></Link>

                        </div>

                        <div className="mx-4 my-2">
                            <FilterDiscussions />
                        </div>

                        <div className="mb-16 px-2">

                            {
                                shuffledPosts.map((post, index) => (
                                    <CardDiscussions key={index} title={post.title} description={post.description} views={post.views} likes={post.likes} comments={post.comments} category={post.category} name={post?.author?.name} bio={post?.author?.bio}                                   />
                                ))
                            }
                    </div>
                    </div>

                    
                </div>

                
            </main>
    )
}