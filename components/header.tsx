import Link from "next/link"
import React from "react"
import logo from "@/assets/elinor.png"
import Image from "next/image"
export const Header=()=>{
    const links=[{
        title:"HOME",
        address:"/",
        onhoverlist:[]
    },
{
        title:"ABOUT",
        address:"/about-us",
        onhoverlist:[]


    },{
        title:"SOLUTION",
        address:"",
        onhoverlist:[{
            title:"web-application",
            address:"solutions/web-application"
        },
    {
            title:"web-application",
            address:"solutions/web-application"
        },{
            title:"mobile-application",
            address:"solutions/mobile-application"
        },
        {
            title:"learning and development",
            address:"solutions/learning"
        },
        {
            title:"training-solution",
            address:"solutions/training-solutions"
        },
        {
            title:"buisness development",
            address:"solutions/buisness-development"
        }]
    },{
        title:"SERVICES",
        address:"/",
        onhoverlist:[{
            title:"WEB DEVELOPMENT",
            address:"services/web-development"
        },
    {
            title:"MOBILE DEVELOPMENT",
            address:"services/mobile-development"
        },
    {
            title:"E-LEARNING SERVICES",
            address:"services/elearning"
        },
    {
            title:"DIGITAL MARKETING",
            address:"services/digital-marketing"
        },
    {
            title:"LMS SERVICE",
            address:"services/lms"
        }]
    },{
        title:"SHOWCASE",
        address:"/projects",
        onhoverlist:[]
    },
{
        title:"BLOGS",
        address:"/blogs",
        onhoverlist:[]
    },]

    return ( 
    <>
    <div className=" relative z-1 w-full l-full flex place-content-center pt-2  bg-linear-to-b from-white from-0% to-blue-300 to-300%  ">
        <div className="innerbox  flex gap-2 place-content-between">
            
             <div className="logo mr-50 flex gap-2 pb-1">
                  <Image src={logo} alt="" className="" ></Image>
             </div>
             <div className="navlinks flex ">
                   {links.map((link) => (
  <div key={link.title}   className="group relative flex ">
    <Link
      href={link.address || "#"}
      className=" relative px-4 mt-8 font-medium text-gray-700 hover:text-blue-600 transition-colors duration-300 h-fit"
    >
      {link.title}
        <span
    className="
      absolute
      left-0
      bottom-0
      h-0.5
      w-0
      bg-blue-600
      transition-all
      duration-300
      group-hover:w-full
      "
  />
    </Link>

    {link.onhoverlist?.length > 0 && (
      <div
        className="
        
          invisible absolute  top-full left-0 z-100 mt-2
          min-w-64 rounded-xl bg-white shadow-xl border
          opacity-0 translate-y-3
          transition-all duration-300
          group-hover:visible
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      >
        <div className="p-2">
          {link.onhoverlist.map((child) => (
            <Link
              key={child.address}
              href={child.address}
              className="
                block rounded-lg px-4 py-3
                text-sm text-gray-700
                transition-all duration-200
                hover:bg-blue-50
                hover:text-blue-600
              "
            >
              {child.title}
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
))}
             </div>
             <div className=" mt-7 button border-2 h-8  border-blue-300 bg-blue-500 text-white  px-3  rounded-md" >
                 <button>Get in Touch</button>
             </div>
        </div>
        
    </div>
    <div className="w-full border border-gray-300"> </div>
    </>)
}
export default Header