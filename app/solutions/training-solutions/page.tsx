import SolutionSections from "@/components/solutionSections"
import ban from "@/public/exc_training_solution/banner.png"
import learning from "@/public/mocks/training_solution"

const Page=()=>{
    return (<>
    <div>
   <SolutionSections
   banner={ban}
   title="TRAINING SOLUTIONS"
   list={learning}

   />
        </div></>)
}
export default Page