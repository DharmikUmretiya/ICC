
export default function Button({Gate_Type,HandleClick,IsConnected}) {
  return (
    <>
      <button className="tstbtn" onClick={()=>{HandleClick()}}>
        {IsConnected===true?"Test"+Gate_Type:"Connect to Wi-Fi"}
      </button>
    </>
  )
}
