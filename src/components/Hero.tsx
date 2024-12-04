import Image from "next/image";
function Hero (){
    return (
    <div className="flex justify-between items-center bg-[#043873] w-[1920px] h-[829px] py-[140px] px-[220px]">  
      <div className="w-[656px] h-[361px] gap-[60px]">
        <div>
        <h2 className="font-sans font-bold text-[64px] leading-[77.45px] tracking-[-2%] text-[#FFFFFF] w-[665px] h-[154px]">Get More Done with whitepace</h2>
        <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] text-[#ffffff] w-[656px] h-[60px] my-7">Project management software that enables your teams to collaborate plan analyze and manage everyday tasks</p>
        </div>
      <div>  
         <button className="flex font-sans font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF] w-[219px] h-[63px] rounded-lg bg-[#4F9CF9] p-5 justify-between items-center my-14">Try Whitepace free
            <Image src="/Group 212.png" alt="" width={10} height={10}
             className="flex justify-between rounded-[1px] text-white" />
         </button>
      </div>   
     </div>      
      <div>
        <Image src="/Image-container.png" alt="" width={824} height={549}/>
      </div>  
    </div>
    )
}

export default Hero; 