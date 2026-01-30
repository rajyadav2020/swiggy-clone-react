import { groceryGridCards } from "../utils/instamart";
import Grocerycard from "./Grocerycard";


export default function Groceryoption(){
    return(
        <div className="mt-20 w-[80%] container mx-auto">
        <h1>Shop Groceries on Instamart</h1>
                <div className="w-[80%] container mx-auto flex flex-wrap mt-10">
                    {
                        groceryGridCards.map(
                            (food)=> <Grocerycard key={food.id} food={food}></Grocerycard>
                         )
                    }
                </div>
        </div>
    )
}