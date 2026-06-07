import SolutionSections from "@/components/solutionSections"
import ban from "@/public/exc_buisness_developmet/banner.png"
import learning from "@/public/mocks/buisness_development"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="BUISNESS DEVELOPMENT"
   list={learning}

   />
        </div></>)
}
export default Page