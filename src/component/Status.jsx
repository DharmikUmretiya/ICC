
export default function Status({ Result }) {
    
    function goFullscreen() {
        document.documentElement.requestFullscreen();
    }

    return (
        <>
            <div className="status">
                <span className="testres" onClick={() => { goFullscreen() }}>
                    {Result}
                </span>
            </div>
        </>
    )
}
