import { Button } from "@heroui/react";
import DestinationCard from "./DestinationCard";
import Link from "next/link";

const Featured = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/featured`)
    const destinations = await res.json()
    console.log(destinations)
    return (
        <div className="mt-10 max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
             <div>
               <h1 className="text-3xl font-bold">Featured Destinations</h1>
            <p className="text-muted">Handpicked travel experiences for the adventure seekers</p>
         </div>

     <Link href={'/destinations'}>    <Button variant="outline" className={'rounded-none border-cyan-500 border-2 text-cyan-500'}>All Destinations</Button></Link>
        </div>


        <div className="grid grid-cols-4 gap-5 mt-10">
            {destinations.map(destination => <DestinationCard key={destination._id} destination={destination}/>)}
        </div>
            
        </div>
    );
};

export default Featured;