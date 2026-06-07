import SolutionSections from "@/components/solutionSections"
import ban from "@/public/exc_web_development/banner.png"
import web_development from "@/public/mocks/webdevelopment"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="WEB APPLICATION DEVELOPMENT AT WEST ELINOR"
   list={web_development}

   />
        </div></>)
}
export default Page