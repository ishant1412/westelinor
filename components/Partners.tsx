import c1 from "@/assets/westelinor/c1.png"
import c2 from "@/assets/westelinor/c2.png"
import c3 from "@/assets/westelinor/c3.png"
import c4 from "@/assets/westelinor/c4.png"
import c5 from "@/assets/westelinor/c5.png"
import c6 from "@/assets/westelinor/c6.png"
import c7 from "@/assets/westelinor/c7.png"
import Image from "next/image"
const Partners=()=>{
    const images= [c1,c2,c3,c4,c5,c6]

    
    return(
        <>
        <section className="py-20">
        <h2 className="text-center text-3xl font-bold text-blue-900 mb-12">
          Our Trusted Partners
        </h2>

        <div className="  mx-auto flex flex-wrap justify-center gap-10 overflow-y-hidden">
          {images.map(img=>{
            return (<Image src={img} 
            alt=""
            className=" shrink-0 " />)
          })}
        </div>
      </section></>
    )
}
export default Partners