import SolutionSections from "@/components/solutionSections"
import ban from "@/public/services/service_web_development/banner.png"
import webdevelopment from "@/public/mocks/services/webdevelopment"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="WEB DEVELOPMENT SERVICES AT WEST ELINOR"
   list={webdevelopment}

   />
        </div></>)
}
export default Page