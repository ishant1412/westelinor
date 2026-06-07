import blogs from "@/public/mocks/blogs"
import banner from "@/public/banner-blog.jpg"
import Image from "next/image"
const Blogs=()=>{
    return (<>
           <div  >
            <div>
                 <Image
                 src={banner}
                 alt=""
                 className="w-full"/>
            </div>
            <div className=" flex flex-col items-center my-5 gap-8 " >
            {blogs.map(blog=>
            <div className="flex flex-col items-center" >

            <div className="flex w-[70%] ">
                <div className="text-white bg-blue-400 h-8  rounded mx-5 text-2xl ">
                    {blog.date}
                </div>
                <div>
                    <img src={blog.image} alt="" 
                    className="rounded h-full"/>
                </div>
                <div className="flex flex-col gap-4 ml-4 ">
                    <div className="text-xl underline text-blue-400" >{blog.title}</div>
                    <div>
                     {blog.description}
                    </div>
                    <div className="border-blue-400 border-2 text-blue-400 text-center h-8 rounded  w-[30%]" >
                        <button  >Read More</button>
                    </div>
                </div>
            </div>
                <div className="border border-gray-400 h-0 w-full my-3"> </div>

            </div>)}
            </div>
           </div>
    </>)
}
export default Blogs