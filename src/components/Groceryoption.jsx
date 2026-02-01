import { groceryGridCards } from "../utils/instamart";
import Grocerycard from "./Grocerycard";


export default function Groceryoption(){
    return(
        <div className="mt-20 w-[80%] container mx-auto">
        <h1 className="text-2xl font-bold">Shop Groceries on Instamart</h1>
                <div className=" container mx-auto flex  mt-5 flex-nowrap overflow-x-auto gap-3">
                    {
                        groceryGridCards.map(
                            (food)=> <Grocerycard key={food.id} food={food}></Grocerycard>
                         )
                    }
                </div>
        </div>
    )
}