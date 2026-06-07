import SolutionSections from "@/components/solutionSections"
import ban from "@/public/services/service_lms/banner.png"
import mobile_development from "@/public/mocks/services/mobiledevelopment"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="MOBILE DEVELOPMENT SERVICES AT WEST ELINOR"
   list={mobile_development}

   />
        </div></>)
}
export default Page