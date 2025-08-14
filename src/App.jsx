import './App.css'

function App() {

  function goFullscreen(){
    document.documentElement.requestFullscreen();
  }

  return (
    <>
      <div className="container">
        <div className="status">
          <span className="testres" onClick={()=>{goFullscreen()}}>
            <span className='green'>T</span>
            <span className='red'>F</span>
            <span className='green'>T</span>
            <span className='red'>F</span>
          </span>
        </div>
        <div className="card">
          <div className="scroll">
            <div>
              <div className="grad-l">
              </div>
            </div>
            <div className="content-scroll">
              <div className='gate-list'>
                <div className='option'>7400</div>
                <div className='option'>7400</div>
                <div className='option'>7402</div>
                <div className='option'>7404</div>
                <div className='option'>7408</div>
                <div className='option'>7410</div>
                <div className='option'>7410</div>
              </div>
            </div>
            <div>
              <div className="grad-r">
              </div>
            </div>

          </div>
          <button className="tstbtn">
            Test 7408 DHARMIK
          </button>
        </div>
      </div>
    </>
  )
}

export default App
