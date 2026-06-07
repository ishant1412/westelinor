import SolutionSections from "@/components/solutionSections"
import ban from "@/public/services/service_elearning/el1.png"
import elearning from "@/public/mocks/services/elearning"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="ELEARNING  SERVICES "
   list={elearning}

   />
        </div></>)
}
export default Page