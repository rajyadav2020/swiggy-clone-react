
export default function Dinecard({Restdata}){
  return(
    <div className="max-w-sm flex-none">
      <a href={Restdata.cta.link}>
      <div className="relative">
        <img className="w-80 h-50 object-cover " src={"https://media-assets.swiggy.com/swiggy/image/upload/"+Restdata?.info?.mediaFiles[0]?.url} alt="" />
        <p className="absolute bottom-2 left-4 text-xl text-white font-bold">{Restdata.info.name}</p>
        <p className="absolute bottom-2 right-4 text-xl text-white font-bold">{Restdata?.info?.rating?.value}</p>

        <div className="bg-gradient-to-t from-black h-16  bottom-0  left-0 right-0"></div>
      </div>
      </a>
    </div>
  )
}