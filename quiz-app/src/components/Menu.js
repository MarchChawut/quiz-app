import { useContext } from "react"
import { DataContext } from "../App"

const Menu = () => {
    //กำหนด setAppState ผ่าน DataContext
    const {setAppState} = useContext(DataContext)
    return (
        <div className="menu">
            <h1>Menu Component</h1>
            <button onClick={() => {setAppState("quiz")}}>Start</button>
        </div>
    )
}

export default Menu