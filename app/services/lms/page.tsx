import SolutionSections from "@/components/solutionSections"
import ban from "@/public/services/service_lms/banner.png"
import lms from "@/public/mocks/services/lms"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="LEARNING MANEMENT SYSTEM SERVICES AT WEST ELINOR"
   list={lms}

   />
        </div></>)
}
export default Page