import Image from "next/image";
import aboutUsImg from "@/assets/about-us.png";
import Team1 from "@/assets/team.jpg";
import Team2 from "@/assets/team2.png";
import Team3 from "@/assets/Team3.png";
import lead from "@/public/lead.jpeg";
import pi1 from "@/assets/propelicon1.png";
import pi2 from "@/assets/propelicon2.png";
import pi3 from "@/assets/propelicon3.png";
import pi4 from "@/assets/propelicon4.png";

const Page = () => {
  const images = [
    {
      img: Team3,
      name: "",
      description: false,
    },
    {
      img: Team2,
      name: "JAYANT GUPTA",
      description: true,
    },
    {
      img: Team1,
      name: "AKSHAY KUMAR",
      description: true,
    },
  ];
  const icons = [
    {
      img: pi1,
      text: "Learning and development",
    },
    {
      img: pi2,
      text: "mobile app  development",
    },
    {
      img: pi3,
      text: "web application development",
    },
    {
      img: pi4,
      text: "Buisness development",
    },
  ];
  return (
    <>
      <div className="flex flex-col items-center">
        <Image src={aboutUsImg} className="w-full" alt="" />
        <div className="w-[60%] flex flex-col flex-wrap  my-5 gap-5">
          <div className="text-2xl text-blue-400 font-bold">ABOUT US</div>
          <p>
            West Elinor is an organization defined by service and proficiency,
            collaboration and communication. We labor to accomplish good things
            for our associates, the organizations we serve, and the world around
            us. Over the years, we have attracted and maintained an exceptional
            team and consistently delivered effective solutions to support
            highly successful organizations. At the core of our culture and what
            motivates us every day is the knowledge that we possess and the
            tools and expertise to continually make a positive impact on
            society’s challenges. We are pleased with all that we have
            accomplished in collaboration with our client partners.
          </p>
          <p>
            The projects we take on are all of utter importance to us. Indeed,
            we have all the tools, processes, and best practices to set your
            project up for success. Indeed, we have an attention on risk
            management that enables us to envision and mitigate risks before
            they impact any of the project entities like QA/QC, TAT, Budget. All
            things being equal, there will still be instances where issues
            emerge. We do not sweep issues under the table. We address them with
            honest communication, decency, and a commitment to working through,
            resolving, and ultimately moving them forward.
          </p>
          <p>
            Our success is attributed to the steadfast attitude and the extent
            of competencies we offer, as represented on this site: an exclusive
            blend of Web Application Design and Development, Digital Learning
            Solutions, eLearning Modules Development, Learning Management System
            Development and Administration, Custom Software Development, Digital
            Marketing, Search Engine Optimization and Lead Generation. Repeated
            contracts from our clients is proof enough that what we deliver
            cannot be emulated by other vendors. It is our endeavor to keep our
            staff abreast with the latest tools and technology of this industry.
            Through consultation and analysis, design and development, project
            management and customer service, we collaborate with our clients to
            find and implement solutions that will drive their organization
            toward greater success.
          </p>
          <div>
            <div className=" my-5 text-2xl font-bold">OUR TEAM</div>
            <div>
              We are a team held together closely by our culture of caring and
              devotion to our craft. Our team is passionate about delivering
              excellence and committed to helping clients scale to new heights.
              Our values of innovation and collaboration drive us to achieve
              lasting success for our clients across the globe. With this team,
              we contribute goodness to the world around us while growing a
              remarkable business.
            </div>
            <div className="flex gap-10 place-content-between my-5">
              {images.map((image) => (
                <div className="flex flex-col items-center gap-1">
                  <Image src={image.img} alt="" className="size-50 mb-3" />
                  <div className="text-blue-300">{image.name}</div>
                  {image.description ? (
                    <>
                      <div className="text-sm text-center">
                        <div>FOunding Member</div>
                        <div>WEST ELINOR Technologies</div>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
                  <div className="relative w-full">
            {/* Background image */}
            <Image
              src={lead}
              alt=""
              className="  w-full  object-cover"
            />

            {/* Overlay content */}
            <div className="absolute inset-0 flex items-center justify-center place-content-center text-white">
              <div className="w-[35%]  mx-10" >
                <div className="text-blue-300 text-2xl "> Let`s Propel</div>
                <div className="text-clip">
                  Empower your business with us. Tell us about your idea, and
                  we'll choose the best technology for your next web project. We
                  cooperate with technology businesses globally to create
                  brand-new software products and implement market-leading
                  solutions.
                </div>
                <div className="flex flex-wrap gap-20 my-10">
                  {icons.map((icon) => (
                    <div>
                      <Image src={icon.img} alt="" />
                      <div className="w-30" >{icon.text}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="w-[35%] flex flex-col gap-6">
                <div className="text-blue-400 font-semibold text-2xl ">Want To Work With US</div>
                <div className="flex flex-col">
                  <label htmlFor="">Name</label>
                  <input
                    type="text"
                    placeholder="Name"
                    className="border-gray-300 border border-b-blue-400 border-b-2 bg-white text-md text-gray-400  w-full h-10 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">Email</label>
                  <input
                    type="text"
                    placeholder="Email"
                    className="border-gray-300 border border-b-blue-400 border-b-2 bg-white text-md text-gray-400  w-full h-10 "
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="">message for us </label>
                  <textarea
                    
                    placeholder="message for us "
                    className= "   border-gray-300 border border-b-blue-400 border-b-2 bg-white text-md text-gray-400  w-full h-40 "
                  />
                </div>
                <div className="border-blue-400 border w-[30%] text-center">
                  <button className="text-blue-300 text-xl ">SEND</button>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
};
export default Page;
