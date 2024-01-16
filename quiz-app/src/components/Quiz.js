import { useEffect, useState } from "react"
import QuestionsData from "../data/QuestionsData"

const Quiz = () => {
    // console.log(QuestionsData)
    const [current, setCurrent] = useState(0)
    const [selectCoice, setSelectCoice] = useState("")

    //ตรวจสอบว่ามีการเปลี่ยนแปลงใน selectCoice? ถ้ามี ก็คือ user ได้ทำการเลือกคำตอบแล้ว
    useEffect(() => {
        checkAnswer()
    }, [selectCoice])

    const checkAnswer = () => {
        if(selectCoice !== ""){
            if(selectCoice === QuestionsData[current].answer){
                console.log("ถูก")
            }else console.log("ผิด")
        }
    }
    return (
        <div className="quiz">
            <h1>{QuestionsData[current].question}</h1>
            <div className="choices">
                <button onClick={() => setSelectCoice("A")}>{ QuestionsData[current].A }</button>
                <button onClick={() => setSelectCoice("B")}>{ QuestionsData[current].B }</button>
                <button onClick={() => setSelectCoice("C")}>{ QuestionsData[current].C }</button>
                <button onClick={() => setSelectCoice("D")}>{ QuestionsData[current].D }</button>
            </div>
            <p>{ `${current + 1} / ${QuestionsData.length}` }</p>
        </div>
    )
}

export default Quiz