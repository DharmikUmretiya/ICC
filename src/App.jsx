import './App.css'
import arrowicon from './assets/arrows.svg'

function App() {

  function goFullscreen() {
    document.documentElement.requestFullscreen();
  }
  goFullscreen

  return (
    <>
      <div className="container">
        <nav className="nav">
          <img src={arrowicon} className='arrow' height={24} width={24}></img>
        </nav>
        <div className="status">
          <span className="testres">
            <span className='green'>T</span>
            <span className='red'>F</span>
            <span className='green'>T</span>
            <span className='red'>F</span>
          </span>
        </div>
        <div className="card">
          <button className="tstbtn">
            Test 7408
          </button>
        </div>
      </div>
    </>
  )
}

export default App
