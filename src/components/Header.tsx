import Image from "next/image";

const Header =() => {
return (
    <div className="w-[1920px] h-[92px] py-4 px-[220px] bg-[#043873] flex justify-between items-center">
        <div>
            <Image 
            src="/logo.png"
            alt="logo"
            width={191}
            height={34}/>
        </div>
        <div className="w-[737.5px] h-[60px] gap-[60px] flex justify-between items-center">
          <div className="w-[549px] h-[23px]"> 
              <ul className="flex text-[18px] font-semibold leading-6 gap-[32px] text-white">
                   <li>Product</li>
                   <li>Solution</li>
                   <li>Resources</li>
                   <li>Pricing</li>
              </ul> 
           </div>    
        <div>
            <button className="w-[126px] h-[60px] gap-[24px] font-[500] text-black py-4 px-10 rounded-lg bg-[#FFE492]">Login</button>
        </div>  
    </div>     
</div>
)
}

export default Header;