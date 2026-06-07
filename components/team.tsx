import Image from "next/image";
import tm1 from "@/assets/westelinor/tm1.png";
import tm2 from "@/assets/westelinor/tm2.png";
import tm3 from "@/assets/westelinor/tm3.png";
import tm4 from "@/assets/westelinor/tm4.png";

const Team = () => {
  const members = [
    {
      img: tm1,
      text: "Working with West Elinor has been a remarkable experience. Their professionalism and attention to detail exceeded our expectations."
    },
    {
      img: tm2,
      text: "The team consistently delivered quality solutions and maintained excellent communication throughout the project."
    },
    {
      img: tm3,
      text: "Their innovative approach and dedication helped us achieve our goals much faster than anticipated."
    },
    {
      img: tm4,
      text: "A highly reliable and talented team that truly understands client requirements and delivers exceptional results."
    }
  ];

  return (
    <div className="flex flex-wrap  flex-col justify-center border-y-2 border-gray-100 py-8 ">
        <div className="text-2xl text-blue-400 font-bold mx-auto mb-51" > TESTIMONIALS</div>
        <div className="flex flex-wrap justify-center">
      {members.map((member, index) => (
        <div key={index} className="relative group flex">
          <div className="w-20 my-auto border border-blue-200"></div>

          <Image
            src={member.img}
            alt=""
            className="cursor-pointer"
          />

          <div className="w-20 my-auto border border-blue-200"></div>

          {/* Hover Card */}
          <div className="absolute left-1/2  mt-4 -translate-x-1/2 w-80 bg-white shadow-xl rounded-xl p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all bottom-full duration-300 z-100 ">
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={member.img}
                alt=""
                className="w-14 h-14 rounded-full object-cover"
              />
              <h3 className="font-semibold text-gray-800">
                Team Member {index + 1}
              </h3>
            </div>

            <p className="text-gray-600 leading-relaxed relative px-4">
              <span className="text-5xl text-blue-300 absolute -left-1 -top-5">
                “
              </span>

              {member.text}

              <span className="text-5xl text-blue-300 absolute -right-1 bottom-[-30px]">
                ”
              </span>
            </p>
          </div>
        </div>

      ))}
      </div>
    </div>
  );
};

export default Team;