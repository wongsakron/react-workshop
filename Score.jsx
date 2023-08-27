import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuesstionsData"
const Score = () => {
    const {score,setScore,setAppState} = useContext(DataContext)

  const resetapp = () => {
    setAppState("menu") 
    setScore(0)
  }
  return (
    <div className="score">
        <h1>สรุปผลคะแนน</h1>
        <h2>{score}/ {QuestionsData.length}</h2>
        <button onClick={()=> {resetapp()}}>กลับหน้าแรก</button>
       
    </div>
  )
}

export default Score
