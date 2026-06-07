import Image, { StaticImageData } from "next/image"
import React from "react"
type listtype={
    img:StaticImageData,
    subtitle:string,
    text:string,
}
type SolutionSectionsProps = {
    list: listtype[]
    banner: StaticImageData
    title: string
}

const SolutionSections: React.FC<SolutionSectionsProps> = ({ list, banner, title }) => {


    return (
        <div>
            <div className="w-full flex flex-col items-center">
                <Image src={banner} alt="banner" className="w-full"/>
            </div>
            <div className="w-full flex-col flex items-center">
                <div className="w-[6,elearle0%] text-2xl font-bold my-6" >{title}</div>
                <div className="w-[60%]">
                    {list && list.map((item, idx) => (
                        <div className={`flex ${idx%2==0?"flex-row":"flex-row-reverse"} place-content-around gap-10 my-5`}>
                            <Image
                            src={item.img}
                            alt=""
                            className="size-50 rounded shrink-0"
                            />
                            <div>
                            <div className="text-xl font-semibold my-4" >{item.subtitle}</div>
                            <div  className="text-wrap" >{item.text}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default SolutionSections