import { createContext, useState } from "react";
import Menu from "./components/Menu";
import Quiz from "./components/Quiz";
import Score from "./components/Score";

//ใช้ createContext
export const DataContext = createContext()

function App() {
  // ใช้ useState
  const [appState, setAppState] = useState("menu")
  return (
    //ให้บริการเกี่ยวกับข้อมูลชุดหนึ่ง
    <DataContext.Provider value={{ appState, setAppState }}>
      <div className="App">
        <h1>TRD Quiz Application</h1>
        {/* ถ้า appState เท่ากับ menu ให้แสดงผล component menu ออกมา  */}
        {appState === "menu" && <Menu/>} 
        {appState === "quiz" && <Quiz/>} 
        {appState === "score" && <Score/>} 
      </div>
    </DataContext.Provider>
  );
}

export default App;
