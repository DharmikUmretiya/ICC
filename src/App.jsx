import './App.css'
import Status from './component/Status.jsx'
import Selector from './component/Selector.jsx'
import Button from './component/Button.jsx'


function App() {

  return (
    <>
      <div className="container">
        <Status Result="TTSS" />
        <div className="card">
          <Selector />
          <Button Gate_Type="And" HandleClick="" IsConnected={true} />
        </div>
      </div>
    </>
  )
}

export default App
