import { elearningImage,digitalMarketingImages,webApplicationImage,MobileapplicationImages } from "@/public/mocks/images"
import Image from "next/image"
import projectBanner from "@/public/project-banner.jpg"

const Project=()=>{
    return (<>
    <section className="w-full flex flex-col items-center ">
           <div className="w-full">
            <Image
            src={projectBanner}
            alt=""
            className="w-full "/>
           </div>
        <div className="w-[70%]  flex flex-col items-center my-10 " >
            <div className="text-center text-2xl text-blue-400 my-10 font-bold ">E lEARNING SERVICES</div>
            <div className="flex flex-wrap gap-6 place-content-center " >{elearningImage.map(image=><div>
                   <Image
                   src={image}
                   alt=""
                   className="rounded-xl border-blue-400 border-2 hover:bg-blue-400  size-50 w-70   shadow-md  shadow-gray-400  "/>
            </div>)}</div>
        </div><div className="w-[70%]  flex flex-col items-center my-10" >
            <div className="text-center text-2xl text-blue-400 my-10 font-bold ">WEB DEVELOPMENTSERVICES</div>
            <div className="flex flex-wrap gap-6 place-content-center  " >{webApplicationImage.map(image=><div>
                   <Image
                   src={image}
                   alt=""
                   className="rounded-xl border-blue-400 border-2 hover:bg-blue-400  size-50 w-70   shadow-md  shadow-gray-400"/>
            </div>)}</div>
        </div>
        <div className="w-[70%]  flex flex-col items-center my-10" >
            <div className="text-center text-2xl text-blue-400 my-10 font-bold ">MOBILE APPLICAION SERVICES</div>
            <div className="flex flex-wrap gap-6 place-content-center " >{MobileapplicationImages.map(image=><div>
                   <Image
                   src={image}
                   alt=""
                   className="rounded-xl border-blue-400 border-2 hover:bg-blue-400  size-50 w-70   shadow-md  shadow-gray-400 shrink-0"/>
            </div>)}</div>
        </div>
        <div className="w-[70%]  flex flex-col items-center my-10" >
            <div className="text-center text-2xl text-blue-400 my-10 font-bold ">DIGITAL MARKETING</div>
            <div className="flex flex-wrap gap-6 place-content-center " >{digitalMarketingImages.map(image=><div>
                   <Image
                   src={image}
                   alt=""
                   className="rounded-xl border-blue-400 border-2 hover:bg-blue-400  size-50 w-70   shadow-md  shadow-gray-400"/>
            </div>)}</div>
        </div>

        
        
    </section>
    </>)
}

export default Project