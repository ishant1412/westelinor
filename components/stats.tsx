import st1 from "@/assets/westelinor/st1.png"
import st2 from "@/assets/westelinor/st2.png"
import st3 from "@/assets/westelinor/st3.png"
import st4 from "@/assets/westelinor/st4.png"
import st5 from "@/assets/westelinor/st5.png"
import Image from "next/image"

const Stats=()=>{
    const images=[{
        img:st1,
        number:12,
        description:"years in industry"
    },
{
        img:st2,
        number:10,
        description:"countries serving in"
    },{
        img:st3,
        number:200,
        description:"clients across globe"
    },{
        img:st4,
        number:28,
        description:"client from f500"
    },{
        img:st5,
        number:50,
        description:"digital experts"
    },]
    return (
        <>
        <div className="flex place-content-center flex-wrap w-full border-t-gray-100 border-t-2 border-b-gray-100 border-b-2 py-2 gap-6">
 {
  images.map(image=><div className="flex flex-col" >
    <Image
  src={image.img}
  alt=""
  className="size-16"
  />
  <span className="text-2xl font-semibold pl-3">{image.number}+</span>
  <span className="w-25 text-start ">{image.description}</span>
  </div>)  
 }
        </div>
        </>
    )
}
export default Stats