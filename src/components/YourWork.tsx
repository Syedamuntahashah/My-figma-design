import Image from "next/image";

function YourWork() {
    return (
        <div className="flex justify-center items-center w-[1920px] h-[575px] py-[140px] px-[220px] bg-[#043873]">
           <div>
            <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] w-[1064px] h-[87px] text-white">Your work, everywhere you are</h1>
            <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] text-center w-[1064px] h-[60px] text-white mt-8">
                Access your notes from your computer phone or tablet by synchronising with various services including whitepace Dropbox and OneDrive. The app is available on Windows macOS Linux Android and iOS. A terminal app is also available!</p>
        <div className="flex justify-center">
         <div className="flex w-[195px] h-[63px] py-[20px] rounded-lg px-[40px] gap-[10px] bg-[#4F9CF9] mt-20">
            <button className="font-sans font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF]">Try Taskey</button>
            <Image src="/Group 214.png" alt="" width={14} height={14} className="rounded-[1px]"/>
         </div>
         </div> 
         </div> 
        </div>
    
    )
}

export default YourWork;