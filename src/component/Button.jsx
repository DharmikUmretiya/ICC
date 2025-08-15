
export default function Button({Gate_Type,Address,IsConnected}) {
  return (
    <>
      <button className="tstbtn" ref={Address}>
        {IsConnected===true?"Test "+Gate_Type:"Connect to Wi-Fi"}
      </button>
    </>
  )
}
