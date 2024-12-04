import Image from "next/image"
function Work (){
    return (
        <div className="w-[1480px] h-[661px] gap-[100px] px-[209px]">
        <div className="flex justify-between w-[1480px] h-[661px] gap-[100px] py-[120px] rounded-lg">
            <Image src="/Work Together Image.png" alt="" width={710} height={661} />
           <div className="w-[670px] h-[294px] gap-[60px] py-[130px] px-[44px] items-center">
            <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529]">Work together</h1>
            <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] w-[670px] h-[60px] my-11">With whitepace share your notes with your colleagues and collaborate on them.
                              You can also publish a note to the internet and share the URL with others.</p>
            <div className="flex w-[186px] h-[63px] rounded-md py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9]">
                <button className="font-sans font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF]">Try it now</button>
            <Image src="/Group 214.png" alt="" width={14} height={14}/>
            </div>                  
            </div>
        </div>
    </div>   
    )
}
export default Work;