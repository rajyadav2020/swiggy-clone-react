import { imageGridCards } from "../utils/Food"
import Foodcard from "./Foodcard"
export default function Foodoption(){
    return (
        <>
        <div className="w-[80%] container mx-auto flex flex-wrap mt-10">
            {
                imageGridCards.map(
                    (food)=> <Foodcard key={food.id} food={food}></Foodcard>
                 )
            }
        </div>

        </>
    )

}