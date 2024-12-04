import Image from "next/image";

function YourNeeds() {
    return (
       <div className="flex justify-between w-[1920px] h-[759px] py-[140px] px-[220px] bg-[#043873]">
            ,<div>
             <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-white py-12">Use as Extension</h1>
             <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] w-[697px] h-[60px] text-white mt-7">Use the web clipper extension available on Chrome and Firefox to save web pages or take screenshots as notes.</p>
             <div className="flex items-center w-[171px] h-[63px] rounded-md py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] mt-14">
               <button className="font-sans font-medium text-[18px] leading-[23px] tracking-[-2%] text-white">Let s Go</button>
               <Image src="/Group 214.png" alt="" width={14} height={14} className="rounded-[1px]"/>
             </div>
             </div>
             <div className="gap-[4px]">
               <Image src="/Image.png" alt="" width={686} height={479}/>
             </div>
       </div>
    )
}

export default YourNeeds;