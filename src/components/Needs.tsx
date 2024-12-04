import Image from "next/image"

export default function Needs() {
    return (
        <div className="flex justify-between px-[220px] py-[140px]">
            <div className="gap-[4px]">
                <Image src="/Image.png" alt="" width={714} height={523.09}/>
            </div>
           <div>
            <div>
            <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] w-[669px] h-[174px] my-6">
                Customise it to your needs</h1>
            <p className="font-sans font-normal text-[18px] leading-[30px] tracking-[-2%] w-[669px] h-[90px] mt-17">Customise the app with plugins custom themes and multiple text editors (Rich Text or Markdown). Or create your own scripts and plugins using the Extension API.</p>
            </div>
            <div className="flex items-center w-[171px] h-[63px] rounded-lg py-[20px] px-[40px] gap-[10px] bg-[#4F9CF9] mt-14">
                <button className="font-sans font-medium text-[18px] leading-[23px] tracking-[-2%] text-[#FFFFFF]">Let's Go</button>
                <Image src="/Group 214.png" alt="" width={14} height={14}
                className="rounded-[1px]"/>
            </div>
            </div> 
        </div>
    )
}