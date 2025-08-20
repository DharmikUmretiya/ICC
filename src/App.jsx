import './App.css'
import Status from './component/Status.jsx'
import Selector from './component/Selector.jsx'
import Button from './component/Button.jsx'
import { useEffect, useRef, useState } from "react";


function App() {
  const wsRef = useRef(null);
  const [gate, setGate] = useState("7400")
  const [Result, setResult] = useState("Welcome!")
  const [IsConnected, setConnection] = useState(false)
  const Test_gate_btn = useRef()


  function handleScroll(Index) {
    (Index >= (-5) && Index < (5)) ? setGate("7400") : null;
    (Index >= (84) && Index < (94)) ? setGate("7402") : null;
    (Index >= (170) && Index < (180)) ? setGate("7404") : null;
    (Index >= (255) && Index < (265)) ? setGate("7408") : null;
    (Index >= (342) && Index < (352)) ? setGate("7432") : null;
    (Index >= (420) && Index < (430)) ? setGate("7486") : null;
  }

  function handleClick() {
    const current_Test_Gate = (Test_gate_btn.current.innerText).slice(5)
    wsRef.current.send(current_Test_Gate)
    Test_gate_btn.disabled = true;
  }


  useEffect(() => {
    wsRef.current = new WebSocket("ws://10.172.164.225:8080")
    //"10.172.164.225///ws://192.168.4.1/ws"
    wsRef.current.addEventListener("open", () => {
      console.log("Server is connected")
      setConnection(true)
    })

    wsRef.current.addEventListener("message", (msg) => {
        setResult(msg.data)
        Test_gate_btn.disabled = false;
    })

    Test_gate_btn.current.addEventListener("click", handleClick)

    wsRef.current.addEventListener("close", () => {
      setConnection(false)
    })

    return (
      () => {
        wsRef.current.close()
        Test_gate_btn.current.removeEventListener("click", handleClick)
      }
    )
  }, [])





  return (
    <>
      <div className="container">
        <Status Result={Result} />
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
          <Button Gate_Type={gate} Address={Test_gate_btn} IsConnected={IsConnected} />
        </div>
      </div>
    </>
  )
}

export default App
