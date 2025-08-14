import { useRef, useState } from "react";

export default function Selector({ Gates_Array ,handleScroll}) {

  const Slider = useRef()
 

  return (
    <>
      <div className="scroll">
        <div>
          <div className="grad-l">
          </div>
        </div>
        <div className="content-scroll">
          <div className='gate-list' ref={Slider} onScroll={() => { handleScroll(Slider.current.scrollLeft) }}>
            {
              Gates_Array.map((Gate_Type, index) => {
                return (
                  <div className='option' key={index}>{Gate_Type}</div>
                )
              })
            }
          </div>
        </div>
        <div>
          <div className="grad-r">
          </div>
        </div>
      </div>
    </>
  )
}
