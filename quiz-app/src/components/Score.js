import { useContext } from "react"
import { DataContext } from "../App"
import QuestionsData from "../data/QuestionsData"

const Score = () => {
    const { score, setAppState, setScore } = useContext(DataContext)

    const restaetApp = () => {
        setScore(0)
        setAppState("menu")
    }

    return (
        <div className="score">
            <h1>สรุปผลคะแนน</h1>
            <h1>{ score } / { QuestionsData.length }</h1>
            <button onClick={ restaetApp }>ลองใหม่!</button>
        </div>
    )
}

export default Score