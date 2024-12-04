import Image from "next/image";
function WorkManagment() {
return (
    <div className="flex justify-between items-center pt-[125px] pl-[-382.13px] px-44">
        <div className="w-[672px] h-[411px] gap-[60px]">
            <h1 className="font-sans font-bold text-[72px] leading-[87.14px] tracking-[-2%] text-[#212529] my-11">Project Management</h1>
            <p className="font-sans font-normal text-[18px] leading-[18px] tracking-[-2] w-[672px] h-[90px]">
                Images videos PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.</p>
         <div className="flex w-[201px] h-[63px] py-[20px] px-[40px] bg-[#4F9CF9] rounded-md gap-[8px] my-8">
            <button className="font-medium text-[18px] leading-[23px] tracking-[2%] text-white rounded-[1px] gap-[10px]">Get Started</button>
             <Image src="/Group 214.png" alt="" width={14} height={14}
             className="gap-[4px]"/>
         </div>       
        </div>
        <div>
            <Image src="/Image-container.png" alt="" width={748} height={547}/>
        </div>
    </div>
)
}

export default WorkManagment;