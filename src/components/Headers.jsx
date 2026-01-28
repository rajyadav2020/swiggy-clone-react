export default function Header(){
  return(
    <>
    <div className="bg-[#ff5200] font-serif">

      <div className="flex justify-between container mx-auto py-8">
        <img className="w-40 h-12" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/static-assets/images/swiggy_logo_white.png"  alt="" />

        <div className="font-serif text-white text-base font-bold  flex gap-11 items-center">
          <a href="">Swiggy Corporate</a>
          <a href="">Partner with us</a>
          <a className= "border border-white py-3 px-4 rounded-2xl " href="">Get the app</a>
          <a className="border border-black py-3 px-4 bg-black rounded-2xl" href="">Sign in</a>
        </div>

        
      </div> 

      <div className="pt-16 pb-8 relative">

        <img className="h-110 w-60 absolute top-0 left-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Veggies_new.png" alt="" />

        <img className="h-110 w-60 absolute top-0 right-0" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/portal/testing/seo-home/Sushi_replace.png" alt="" />

        <div className="text-4xl text-white font-bold max-w-[60%] container mx-auto text-center   ">
          Order food and groceries. Discover best restaurant swiggy it!
        </div>

        <div className="max-w-[70%] container mx-auto flex gap-6 mt-10 items-center"> 
          <input className="w-[40%] text-2xl rounded-xl px-6 py-4" type="text" placeholder="Delhi,India" />
          <input className="w-[55%] text-2xl rounded-xl px-6 py-4" type="text" placeholder="Search for restaurant and items for more" />


        </div>

      </div>

    

      <div className="flex max-w-[80%] container mx-auto">

        <a href="https://www.swiggy.com/restaurants"><img className="" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/ec86a309-9b06-48e2-9adc-35753f06bc0a_Food3BU.png" alt="" />
        </a>

        <a href="https://www.swiggy.com/instamart?entryId=1234&entryName=mainTileEntry4&v=1"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b5c57bbf-df54-4dad-95d1-62e3a7a8424d_IM3BU.png" alt="" />
        </a>

        <a href="https://www.swiggy.com/dineout"><img src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/MERCHANDISING_BANNERS/IMAGES/MERCH/2024/7/23/b6d9b7ab-91c7-4f72-9bf2-fcd4ceec3537_DO3BU.png" alt="" />
        </a>

      </div>





    </div>
    </>
  )
}