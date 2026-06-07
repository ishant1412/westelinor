import SolutionSections from "@/components/solutionSections"
import ban from "@/public/exc_buisness_developmet/banner.png"
import digitalmarketing from "@/public/mocks/services/digitalmarketing"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="DIGITAL MARKETING"
   list={digitalmarketing}

   />
        </div></>)
}
export default Page