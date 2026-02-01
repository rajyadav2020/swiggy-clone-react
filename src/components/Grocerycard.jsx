export default function Grocerycard({food}){
    return(
        <div className="flex-none">
        <a href={food?.action.link}>
        <img className="h-50 w-40 object-cover flex gap-5 " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} alt="" />
        </a>
        <h2 className="text-center font-bold">{food?.action.text}</h2>

        </div>
    )
}