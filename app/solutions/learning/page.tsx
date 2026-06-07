import SolutionSections from "@/components/solutionSections"
import ban from "@/public/exc_leraning_development/banner.png"
import learning from "@/public/mocks/learning_development"
const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="LEARNING AND DEVELOPMENT"
   list={learning}

   />
        </div></>)
}
export default Page