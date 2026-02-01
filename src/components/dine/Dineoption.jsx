import { dineoutRestaurants } from "../../utils/Dinedata"
import Dinecard from "./Dinecard"
export default function Dineoption(){
  return(
    <div className="w-[80%] mx-auto mt-20 mb-25">
      <p className="text-2xl font-bold">Discover best option on Dineout</p>
      <div className="flex flex-nowrap overflow-x-auto mt-5 gap-4 ">
        {
          dineoutRestaurants.map((Restdata)=><Dinecard key={Restdata?.info.id} Restdata={Restdata}></Dinecard> )
        }

      </div>
    </div>
  )
}