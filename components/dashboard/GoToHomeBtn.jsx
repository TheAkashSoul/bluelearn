"use client"

import { useRouter } from "next/navigation"

export default function GoToHomeBtn(){

    const router = useRouter();

    const Dashboard = () => {

        router.push("/home");

    }
    return(
        <button onClick={Dashboard}>Dashboard</button>
    )
}