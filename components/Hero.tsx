"use client"
import Image from "next/image";
import aboutusimage from "@/assets/aboutus.png"
import ourserviceimage from "@/assets/ourservice.png"
import Carousel from "./carousel";
import Partners from "./Partners";
import Stats from "./stats";
import Team from "./team";
import VideoSection from "./video";
const Hero = () => {
  return (
    <div className="bg-[#f8fbff] min-h-screen">

      {/* Hero Carousel */}
     <Carousel/>

      {/* Partners */}
      <Partners/>

      {/* About Section */}
      <section className="max-w-7xl mx-auto py-24 px-6  ">
        <div className="grid md:grid-cols-2 gap-16 items-center    opacity-0
  animate-[fadeUp_1s_ease_forwards]
 ">

          <div className="overflow-hidden">
            <Image
              src={aboutusimage}
              alt="About SuperAI"
              className="rounded-3xl shadow-xl hover:scale-105 transition duration-500 size-[80%]"
            />
          </div>

          <div>
            <span className="text-blue-600 font-semibold">
              ABOUT WESTELINOR
            </span>

            <h2 className="text-4xl font-bold text-blue-900 mt-3 mb-6">
              Building the Future with Artificial Intelligence
            </h2>

            <p className="text-gray-600 leading-8 mb-8">
              SuperAI delivers intelligent solutions that help organizations
              automate workflows, improve decision-making, and unlock new
              opportunities through cutting-edge AI technologies.
            </p>

            <button className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            onClick={()=>{

            }}>
              Know More
            </button>
          </div>

        </div>
      </section>

      {/* Services Section */}
      <section className="bg-linear-to-br from-blue-50 to-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-6   opacity-0
  animate-[fadeUp_1s_ease_forwards]
">

          <div className="grid md:grid-cols-2 gap-16 items-center">

            <div>
              <span className="text-blue-600 font-semibold">
                OUR SERVICES
              </span>

              <h2 className="text-4xl font-bold text-blue-900 mt-3 mb-6">
                AI Solutions Tailored For Your Business
              </h2>

              <p className="text-gray-700 leading-8 mb-8">
                From AI automation and chatbots to data analytics and machine
                learning platforms, we provide scalable solutions designed for
                growth and efficiency.
              </p>

              <button className="px-8 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition">
                Know More
              </button>
            </div>

            <div>
              <Image
                src={ourserviceimage}
                alt="Services"
                className="rounded-3xl shadow-xl hover:scale-105 transition duration-500 size-[80%]"
              />
            </div>

          </div>
          {/*stats section*/}
           <Stats/>
           {/* teams section */}
           <Team/>
           {/* {video section} */}
           <VideoSection/>
        </div>
       
      </section>

    </div>
  );
};

export default Hero;