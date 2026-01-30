export default function Foodcard({food}){
    return(
        <>
        <a href={food?.action.link}>
        <img className="h-50 w-40 object-cover flex gap-5" src={"https://media-assets.swiggy.com/swiggy/image/upload/"+food?.imageId} alt="" />
        </a>
        </>
    )
}