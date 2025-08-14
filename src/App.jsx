import './App.css'
import Status from './component/Status.jsx'
import Selector from './component/Selector.jsx'
import Button from './component/Button.jsx'
import { useEffect, useState } from "react";


function App() {

  const [gate, setGate] = useState("7400")

  function handleScroll(Index) {
    (Index >= (-5) && Index < (5)) ? setGate("7400") : null;
    (Index >= (84) && Index < (94)) ? setGate("7402") : null;
    (Index >= (170) && Index < (180)) ? setGate("7404") : null;
    (Index >= (255) && Index < (265)) ? setGate("7408") : null;
    (Index >= (342) && Index < (352)) ? setGate("7432") : null;
    (Index >= (420) && Index < (430)) ? setGate("7486") : null;
  }





  return (
    <>
      <div className="container">
        <Status Result="TTSS" />
        <div className="card">
          <Selector Gates_Array={[
            "Start",
            7400,
            7402,
            7404,
            7408,
            7432,
            7486,
            "End!!",
          ]
          }
            handleScroll={handleScroll} />
          <Button Gate_Type={gate} HandleClick="" IsConnected={true} />
        </div>
      </div>
    </>
  )
}

export default App
