import { useContext, useEffect, useState } from "react"
import QuestionsData from "../data/QuesstionsData"
import { DataContext } from "../App"

function Quiz() {
    
    const [current,setCurrent] = useState(0)
    const [selectChoice,setselectChoice] = useState("")
    const {setAppState,score,setScore} = useContext(DataContext)

    useEffect(()=>{
        checkAnswer()
    },[selectChoice])

    const checkAnswer = ()=>{
        if(selectChoice!== ""){
            if(selectChoice === QuestionsData[current].answer)
                setScore(score+1)
            nextQuestion()
           
        }    
    }

    const nextQuestion =()=>{
        setselectChoice("")
        if(current === QuestionsData.length-1)
            setAppState("score")
        else
            setCurrent(current+1)
    }
    return (
      <div className="quiz">
          <h1>{QuestionsData[current].question}</h1>
          <div className="choices">
            <button onClick={()=>setselectChoice("A")}>{QuestionsData[current].A}</button>
            <button onClick={()=>setselectChoice("B")}>{QuestionsData[current].B}</button>
            <button onClick={()=>setselectChoice("C")}>{QuestionsData[current].C}</button>
            <button onClick={()=>setselectChoice("D")}>{QuestionsData[current].D}</button>
          </div>
          <p>{`${current+1}/${QuestionsData.length}`}</p>
      </div>
    )
  }
  
  export default Quiz
  